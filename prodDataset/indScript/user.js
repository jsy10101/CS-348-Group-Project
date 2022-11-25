var users = [];
var url = 'https://randomuser.me/api/?format=json';


async function fetchUser(i){
  const response = await fetch( url)
  .then(result => result.json())
  .then( data => {
    // from 0 to 15
    var rnd = Math.floor(Math.random() * 15) + 1;
    var phoneNum = '';
    let temp = data.results[0].phone;
    for(let i in temp){
      if( temp[i].match(/\d/) ) {
        phoneNum += temp[i];
      }
    }
   
    var obj = {
      _id: i,
      username: data.results[0].login.username,
      password: data.results[0].login.password,
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      mobileNo: phoneNum,
      emailID: data.results[0].email,
      address: { 
        line1 : data.results[0].location.street.number + ' ' + data.results[0].location.street.name,
        line2: data.results[0].location.country,
        pin: data.results[0].location.postcode
      },
      admin: rnd == 7 ? true : false
  }
  // console.log(obj)
  users.push(obj)
})

  .catch(errorMsg => console.log(errorMsg));
}

async function hello () {


for( let i = 0 ; i < 100; ++i ) {

  await fetchUser(i);

 if( i == 99 ) {
   console.log(users.length);
  setTimeout(() => {
    console.log(users.length);
  const fs = require('fs'); 
const data = JSON.stringify(users);
fs.writeFile('file.json', data,  err=> { 
if(err) { 
throw err; 
} 
}); 
  }, 60000);
 }
}

}


hello();




// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(users)
//     }, 10000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();









