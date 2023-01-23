const checkbox = document.getElementById("boxes").childNodes;
const listOfCheckboxes = document.getElementById("boxes");

console.log("Child Nodes: " + JSON.stringify(boxes));

const handleChange = (event) => {
  const checkbox = event.srcElement;
  const box = event.srcElement.parentNode;
  if (checkbox.checked) {
    console.log("Checked");
    // bring to top,
    let removedChild = listOfCheckboxes.removeChild(box);
    listOfCheckboxes.prepend(removedChild);
  } else {
    console.log("UnChecked");
  }
};

checkbox.forEach((box) => {
  box.addEventListener("change", handleChange);
});
