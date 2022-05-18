function promises(param1, param2, param3) {
  return new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      reject('Informe apenas números.');
    }

    let result = (param1 + param2) * param3;
    
    if (result < 50) {
      reject('Valor muito baixo');
    }
    resolve(result);
  });
};

let a = Math.floor(Math.random() * 100 + 1);
let b = Math.floor(Math.random() * 100 + 1);
let c = Math.floor(Math.random() * 100 + 1);

// promises(a, b, c)
//   .then(resolve => console.log(resolve))
//   .catch(reject => console.log(reject));

