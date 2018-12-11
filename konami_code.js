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
// let konami = (event) =>{
//   let i = 0;
//   const key = event.key

//   if (key === codes[i]){
//     ++i;
//     if (i === codes.length){
//       alert("Woot Woot!");
//       i = 0;
//     }
//   }
//   else{
//     i = 0;
//   }
// }


function init() {
  let i = 0;
  const main = document.body
  main.addEventListener('keydown', (event) => {
    console.log("i", i) 
    console.log("event:",event)
    const key = event.key
    // if else statement
    console.log("key:",key)
    console.log('supposed to press', codes[i])
    console.log('length of code',codes.length)
    if (key === codes[i]){
      i++;
      console.log('i2:', i) 
      if (i === codes.length){
        console.log(event.key)
        alert("Woot Woot!");
        i = 0;
      }//if statement
    } //close if /else
    else{
      // alert("YOU LOST");
      i = 0;
    }// else
  });
}