import "../assets/styles/styles.scss";

// Import JSON data
import buildTools from "../data/build-tools.json";

// Get the ul element from the DOM
const buildToolsList = document.getElementById("build-tools");

// Populate the list with build tools from the JSON
buildTools.forEach((tool) => {
  const li = document.createElement("li");
  li.textContent = tool.name; // Initially, do not capitalize
  buildToolsList.appendChild(li);
});

document.getElementById("loadLodash").addEventListener("click", async () => {
  const { default: _ } = await import("lodash"); // Dynamically load lodash
  console.log(_.capitalize("dynamic lodash loading"));

  // Capitalize the existing list items
  const listItems = buildToolsList.getElementsByTagName("li");
  for (let item of listItems) {
    item.textContent = _.capitalize(item.textContent);
  }
});