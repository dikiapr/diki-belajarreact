// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=94888941&s=avengers",
//   success: (movies) => console.log(movies),
// });

// fetch("http://www.omdbapi.com/?apikey=94888941&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve("Janji telah ditepati!");
//   } else {
//     reject("Ingkar janji..");
//   }
// });

// janji1.then((response) => console.log("OK! : " + response)).catch((response) => console.log("NOT OK! : " + response));

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu!");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve("Tidak ditepati setelah beberapa waktu!");
//     }, 2000);
//   }
// });

// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));
// console.log("selesai");
function alert(string) {
  console.log(string);
}
alert("Dicoding Indonesia");
