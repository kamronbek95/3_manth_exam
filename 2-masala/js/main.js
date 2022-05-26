    var salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800
  };

  function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum; 
  }
  
  console.log(sumSalaries(salaries))