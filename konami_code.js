const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



// function init(e) {
//   let index = 0;
//   const key = e.key; //setting var key equal to the event.key, e is the event argument the function will register the event handler.
//
//   if (key === codes[i]) { //if the event.key or the user input is the same as the sequence above in the order that it is listed...
//     index += 1; //increase the index count by 1
//
//     if (index === codes.length) {//if the index is the same as the length of the codes array then it means the user key input is the same as the sequence of the codes array, they input the correct konami code.
//       alert("Hurray!");
//
//       index = 0; //reset the index to zero
//     } else {
//       index = 0; //if the sequence does not match, reset to zero
//     }
//   }
// }
//
// document.body.addEventListener('keydown', (event) => { //we're asking the DOM to pay attention to the event of the user pressing the key?
//   init(event);
// })
//I have a function that compares the user keystroke to the array sequence of keystrokes. How do I connect that function to the event of the user pressing down the first key? ANSWER you have to place the addEventListener within the function and place the conditionals within it, it all starts with the event of the user pressing the key.

function init(e) {
  let index = 0;
  document.body.addEventListener('keydown', (event) => { //we're asking the DOM to pay attention to the event of the user pressing the key?
    console.log(event.key)

    const key = event.key; //setting var key equal to the event.key, e is the event argument the function will register the event handler.
    if (key === codes[index]) { //if the event.key or the user input is the same as the sequence above in the order that it is listed...
      index += 1; //increase the index count by 1

      if (index === codes.length) {//if the index is the same as the length of the codes array then it means the user key input is the same as the sequence of the codes array, they input the correct konami code.
        alert("Hurray!");

        index = 0; //reset the index to zero
      }
    }
    else { //be careful where you put this else, you originally place it on the inner if!!!
      index = 0; //if the sequence does not match, reset to zero
    }
  })
}//function init(e)
