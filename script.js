/* Declare variables below to save the different sections (divs) of your story*/

let buttonOne = document.querySelector(".option-one");


let optionOneScreen = document.querySelector(".option-one-screen");

console.log(buttonOne);


let buttonTwo = document.querySelector(".option-two");

let optionTwoScreen = document.querySelector(".option-two-screen");

console.log(buttonTwo);


buttonTwo.onclick=function() {
    optionTwoScreen.style.display="block";
};

let optionOneEnd = document.querySelector(".option-one-end");
buttonOne.onclick = function() {
    optionOneScreen.style.display = "block";
    optionOneEnd.style.display="block";
};

let optionTwoEnd = document.querySelector(".option-two-end");
buttonTwo.onclick = function() {
    optionTwoScreen.style.display = "block";
    optionTwoEnd.style.display="block";
};

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


