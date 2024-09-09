// Import JSON data
import buildTools from './build-tools.json';

// Get the ul element from the DOM
const buildToolsList = document.getElementById('build-tools');

// Populate the list with build tools from the JSON
buildTools.forEach(tool => {
  const li = document.createElement('li');
  li.textContent = tool.name;
  buildToolsList.appendChild(li);
});
