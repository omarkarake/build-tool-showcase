import './styles.scss';
import { capitalize } from 'lodash';

// Import JSON data
import buildTools from './build-tools.json';

// Get the ul element from the DOM
const buildToolsList = document.getElementById('build-tools');

document.getElementById('loadLodash').addEventListener('click', async () => {
  const { default: _ } = await import('lodash'); // Dynamically load lodash
  console.log(_.capitalize('dynamic lodash loading'));
});

// Populate the list with build tools from the JSON
buildTools.forEach(tool => {
  const li = document.createElement('li');
  li.textContent = capitalize(tool.name);
  buildToolsList.appendChild(li);
});
