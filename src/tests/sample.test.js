import { capitalize } from 'lodash';
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
    li.textContent = capitalize(tool.name);
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
    expect(listItems[index].textContent).toBe(capitalize(tool.name));
  });
});