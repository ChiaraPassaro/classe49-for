// //ciclo 0 9
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

// // ciclo 1 a 10
// for (let index = 1; index <= 10; index++) {
//   console.log(index);
// }

// // questo da errore perche non possiamo vedere la let fuori dal ciclo
// // console.log(index);


// let contatore = 0;
// for (contatore; contatore < 4; contatore++) {
//   console.log(contatore);
// }

// console.log(contatore);


// let x = 0;
// console.log('x++', x++); // 0
// console.log('x', x); //1

// let y = 0;
// console.log('++y', ++y); // 0
// console.log('y', y); //1

// let number = parseInt(prompt('inserisci un numero'));
// console.log('numero successivo', ++number);

// Stampiamo da 0 a 12 con incremento di 2
// for (let i = 0; i < 12; i += 2) {
//   console.log(i);
// }

// // stampiamo da 100 a 1
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }


// const list = document.querySelector('ul.list');
// for (let i = 1; i < 5; i++) {
//   // const element = `<li class="box box--${i}">${i}</li>`;
// const element = '<li class="box box--' + i + '">' + i + '</li>';
//   list.innerHTML += element;
// }

// const li = document.querySelector('.box--3');
// console.log(li);


// creiamo degli elementi e inseriamoli nel dom
// const list = document.querySelector('ul.list');
// for (let i = 1; i < 5; i++) {
//   const li = document.createElement('li');
//   li.append(i);
//   li.classList.add('box', 'box--' + i);
//   list.append(li);
// }

// const container = document.querySelector('.container');
// // console.dir(list);
// for (let i = 0; i < 100; i++) {
//   const element = document.createElement('div');

//   // console.dir(element);
//   if (i % 2 == 1) { //resto == 1 allora e dispari
//     // console.log('numeri dispari', i);
//     // const dispari = 'numero dispari ' + i;
//     // element.innerHTML = dispari;
//     element.innerHTML = 'numero dispari ' + i;
//   } else {
//     // console.log('numeri pari', i);
//     // const pari = 'numero pari ' + i;
//     // element.innerHTML = pari;
//     element.innerHTML = 'numero pari ' + i;
//   }

//   container.append(element);
// }


// Stampiamo una griglia
// const container = document.querySelector('.container');

// for (let i = 0; i < 30; i++) {
//   const element = document.createElement('div');
//   element.classList.add('box');

//   if (i % 2 == 1) { //resto == 1 allora e dispari
//     //div verdi
//     element.classList.add('green');
//     element.innerHTML = 'numero dispari ' + i;
//   } else {
//     // div gialli
//     element.classList.add('yellow');
//     element.innerHTML = 'numero pari ' + i;
//   }

//   container.append(element);
// }


//scacchiera con dei numeri random

// const container = document.querySelector('.container');
// for (let i = 0; i < 20; i++) {
//   const rand = Math.floor(Math.random() * 100);
//   const div = document.createElement('div');
//   div.classList.add('box');
//   div.append(rand);
//   // div.addEventListener('click',
//   //   function () {
//   //     div.style.backgroundColor = 'red';
//   //   });
//   container.append(div);
//   // container.innerHTML += i;
// }

//numero inserito dall'utente
// const number = document.getElementById('number');
// //bottone per partire
// const button = document.getElementById('generate');
// //stampiamo in container
// const container = document.querySelector('.container');

// button.addEventListener('click',
//   function () {
//     //svuoto il container per futuri click
//     container.innerHTML = '';
//     const numbInsert = number.value;
//     // console.log(numbInsert);

//     for (let i = 1; i <= numbInsert; i++) {
//       const numbRandom = Math.floor(Math.random() * 100);
//       container.innerHTML += numbRandom;
//     }

//     //svuoto il value dell-input
//     number.value = '';
//   });


// //stampo dei numeri da 1000 a 99
// for (let i = 1000; i >= 99; i--) {
//   console.log(i);
// }

// for (let i = 0; i <= 901; i++) {
//   console.log(1000 - i);
// }

//numero inserito dall'utente
const number = document.getElementById('number');
//bottone per partire
const button = document.getElementById('generate');
//stampiamo in container
const container = document.querySelector('.container');

button.addEventListener('click',
  function () {
    // console.log(!(isNaN(number.value)));
    // console.log(isNaN(number.value));
    //number e un numero - number non e un non numero
    const numberParsed = parseInt(number.value);
    // if (!(isNaN(numberParsed))) {
    //   for (let i = 1; i < numberParsed; i++) {
    //     console.log(i);
    //   }
    // } else {
    //   alert('non hai inserito un numero');
    //   number.value = '';
    // }

    if (isNaN(numberParsed)) {
      alert('non hai inserito un numero');
      number.value = '';
    } else {
      for (let i = 1; i < numberParsed; i++) {
        console.log(i);
      }
    }
  }
);