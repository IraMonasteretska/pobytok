

let onlyLat = document.querySelectorAll('.onlyLat')
for(let i of onlyLat){
 
  i.addEventListener('keypress', (e) => {
    var char = /["a-zA-Z]/;
    var val = String.fromCharCode(e.which);
    var test = char.test(val);
    
    if(!test){
      e.preventDefault()
    }
  })
}


let numberLat = document.querySelectorAll('.numberLat')
for(let i of numberLat){
  i.addEventListener('keypress', (e) => {
    var char = /["a-zA-Z1-9]/;
    var val = String.fromCharCode(e.which);
    var test = char.test(val);
    
    if(!test){
      e.preventDefault()
    }
  })
}

