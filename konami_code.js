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

function init() {
  let index = 0;
    document.body.addEventListener("keydown", function(event) {
      //sequence is initiated by any key being depressed
      const key = event.key
      //iterate through the index of keys
      if (key === codes[index]) {
        //if the key matches the code in the index
        //in sequence with the order its pressed
        index++;
        if (index === codes.length) {
          //if the length of the index matches the codes array length
          //(meaning the code must have been executed correctly through)
          alert("you did it!")
          index = 0;
        }
      }
      else {
        //reset the index to 0 and start over
        index = 0;
      }
    });
}
