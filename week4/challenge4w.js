// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.

var elemDiv = document.createElement('div');
elemDiv.className = "planet";
elemDiv.style.cssText = "background-color: blue";
document.body.appendChild(elemDiv);

// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.
var elemDiv2 = document.createElement('div');
elemDiv2.className = 'moon';
elemDiv2.style.cssText ="background-color:yellow";
elemDiv.appendChild(elemDiv2);

