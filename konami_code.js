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
  let index = 0

  const body = document.querySelector('body')

  body.eventListener('keydown', function(event){

    const key = event.key
    if(codes[index] === key){
      index++;
      if(index === codes.length){
        alert("Hurray!")
        index = 0
      }
    }else{
      index = 0
    }
  })
}
