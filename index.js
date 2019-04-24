
/***POSTS */

let theId = 1; 
axios.patch(`https://ih-crud-api.herokuapp.com/characters/${2}`, { name : "Bo Bo Fett"})
    .then(response => {
          console.log('update successful: ', response);
          document.getElementById("update-form").reset();
    })
    .catch(error => {
        console.log(error);
})



// axios.get('https://ih-crud-api.herokuapp.com/characters').then(characters=>{
//     console.log(characters)
//     let html = ''
//     characters.data.forEach(character=>{
//         html+= `<li>${character.name }</li>`
//     })
//     document.querySelector('#characters-list').innerHTML = html
// })

// const theNames = document.getElementsByClassName("the-name");
// const theOccupations = document.getElementsByClassName("the-occupation");
// const theWeapons = document.getElementsByClassName("the-weapon");

// document.getElementById("character-form").onsubmit = function(event) {
//     event.preventDefault();
  
//    const characterInfo = {
//       name: theNames[0].value,
//       occupation: theOccupations[0].value,
//       weapon: theWeapons[0].value
//    };
  
//     axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
//       .then(response => {
//          console.log("You just created this character: ", response.data);

//       })
//       .catch(error => {
//           console.log("Error is: ", error);
//       })
// }




// // // index.js

// // const restCountriesApi = axios.create({
// //     baseURL: 'https://restcountries.eu/rest/v2/name/'
// // });

// // function getCountryInfo(theName) {
// //     restCountriesApi.get(theName)
// //     .then(responseFromAPI => {
// //         console.log('Response from API is: ', responseFromAPI.data);           
// // })
// // .catch(err => {
// //     console.log('Error is: ', err);
// //     })
// // }

// // document.getElementById("theButton").onclick = function(){
// //     const country = document.getElementById("theInput").value;       
// //     getCountryInfo(country);
// // }

// //fetch 

// //$.get( )  

// axios.get('https://api.punkapi.com/v2/beers').then(country=>{
//     console.log(country.data)
//     printTheChart(country.data)

// }).catch(err=>{
//     alert(err)
// })


// // const stockInfo  = axios.create({
// //     baseURL: 'https://api.iextrading.com/1.0/stock/',
// //   });
  
//   const stockTicket = "amzn";
  

  

//   axios.get(`https://api.iextrading.com/1.0/stock/${stockTicket}/chart`)
//     .then(response => {
//       console.log(response);
//       //printTheChart(response.data)
//     })
//     .catch(error => {
//       console.log(error);
//   });
  

//   const printTheChart = (stockData => {
//     const stockLabels = stockData.map( element => element.tagline);
//     const stockPrice = stockData.map( element => element.abv);
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const chart = new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: stockLabels,
//         datasets: [{
//           label: "Stock Chart",
//           backgroundColor: 'rgb(255, 99, 132)',
//           borderColor: 'rgb(255, 99, 132)',
//           data: stockPrice,
//         }]
//       }
//     });
//   });
  