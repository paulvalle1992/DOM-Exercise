// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
//a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

/* const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content); */ 
/* <!-- The DOM -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body> */
const container = document.querySelector('#container');
const para = document.createElement("p");
para.classList.add("para1")
para.textContent = "Hey I'm red!"
para.style.color = "red";
container.appendChild(para);
const headingThree = document.createElement("h3");
headingThree.textContent = "I'm a blue h3"
headingThree.classList.add("heading3");
headingThree.style.color = "blue";
container.appendChild(headingThree);
const divOne = document.createElement("div");
divOne.classList.add("content");
divOne.style.cssText = "border: 2px solid black; background-color: pink";
const headingOne = document.createElement("h1");
headingOne.textContent = "I'm in a div!";
headingOne.style.color = "blue";
divOne.appendChild(headingOne);
const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!"
paraTwo.style.color = "blue";
divOne.appendChild(paraTwo);
container.appendChild(divOne);