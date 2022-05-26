function sumInput() {

    var numbers = [];
  
    while (true) {
  
      let value = prompt("Sonni kiriting: ", 0);

      if (value === " " || value === null || !isFinite(value)) break;
      numbers.push(+value);

    }
  
    let sum = 0;
    for (let i=0 ; i<numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  alert( sumInput() );