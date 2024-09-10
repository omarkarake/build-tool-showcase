import buildTools from '../data/build-tools.json';

// Mock DOM elements
document.body.innerHTML = `
  <ul id="build-tools"></ul>
  <button id="loadLodash"></button>
`;

const buildToolsList = document.getElementById('build-tools');

// Function to populate the list with build tools
function populateBuildTools() {
  buildTools.forEach(tool => {
    const li = document.createElement('li');
    li.textContent = tool.name; // Initially, do not capitalize
    buildToolsList.appendChild(li);
  });
}

// Test for lodash dynamic import and capitalize function
test('dynamically loads lodash and capitalizes string', async () => {
  const { default: _ } = await import('lodash');
  expect(_.capitalize('dynamic lodash loading')).toBe('Dynamic lodash loading');
});

// Test for populating the list with build tools
test('populates the list with build tools', () => {
  populateBuildTools();
  const listItems = buildToolsList.getElementsByTagName('li');
  expect(listItems.length).toBe(buildTools.length);
  buildTools.forEach((tool, index) => {
    expect(listItems[index].textContent).toBe(tool.name);
  });
});

// Test for error handling during lodash dynamic import
test('handles error during lodash dynamic import', async () => {
  // Mock the dynamic import to throw an error
  jest.mock('lodash', () => {
    return {
      capitalize: jest.fn(() => {
        throw new Error('Failed to load lodash');
      })
    };
  });

  const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  // Define the event listener with error handling
  const loadLodashButton = document.getElementById('loadLodash');
  loadLodashButton.addEventListener('click', async () => {
    try {
      const { default: _ } = await import('lodash'); // This will throw an error
      console.log(_.capitalize('dynamic lodash loading'));
    } catch (error) {
      console.error('Error loading lodash or capitalizing list items:', error);
    }
  });

  // Simulate button click
  await loadLodashButton.click();

  // Check if the error was logged
  expect(consoleErrorSpy).toHaveBeenCalledWith(
    'Error loading lodash or capitalizing list items:',
    expect.any(Error)
  );

  // Restore the original console.error implementation
  consoleErrorSpy.mockRestore();
});