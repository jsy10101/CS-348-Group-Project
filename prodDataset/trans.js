const fs = require('fs')
<<<<<<< Updated upstream
accountID = []
trans = []
balance = []

async function getBal(){
  const filePath = 'Anoushka.json';
=======
const axios = require('axios');
accountID = []
trans = []
balance = []
const range = 1000;

async function getBal(){
  const filePath = 'transBal.json';
>>>>>>> Stashed changes
    
     const jsonString = await fs.promises.readFile( filePath, 'utf8')

    const data =  JSON.parse(jsonString);

  //  console.log(data.length);
  
   for(let i in data) {
     balance[i] = data[i].balance.substring(1);
   }
  //  console.log(balance);
}
async function getAccountID(){
<<<<<<< Updated upstream
  const filePath = 'accountID.json';
    
     const jsonString = await fs.promises.readFile( filePath, 'utf8')

    const data =  JSON.parse(jsonString);

  //  console.log(data.length);
  
   for(let i in data) {
    //  console.log(data[i]);
     accountID.push(data[i])
   }
  //  console.log(balance);
=======

  const jsonString = await axios.get('http://localhost:3030/accounts')

  let data = jsonString.data;
  
   for(let i in data) {
     accountID.push(data[i]._id)
   }

>>>>>>> Stashed changes
}


async function hello() {

  await getBal();
  await getAccountID();
  console.log(balance.length);
  console.log(accountID.length);
<<<<<<< Updated upstream
  
  
  for ( let i = 0; i < 1000; ++i) {
    var acc1 = Math.floor(Math.random() * 205);
    var acc2 = Math.floor(Math.random() * 205);
    while( acc1 == acc2) {
      acc2 = Math.floor(Math.random() * 205);
=======
  const AccIDLen = accountID.length
  for ( let i = 0; i < range; ++i) {
    var acc1 = Math.floor(Math.random() * accountID.length);
    var acc2 = Math.floor(Math.random() * accountID.length);
    while( acc1 == acc2) {
      acc2 = Math.floor(Math.random() * accountID.length);
>>>>>>> Stashed changes
    }

    var obj = {
      senderID: accountID[acc1],
      receiverID : accountID[acc2],
      amount : balance[i]
    }

    trans.push(obj);

<<<<<<< Updated upstream
  if( i == 999 ) {
    console.log(trans.length);
  //  setTimeout(() => {
  //    console.log(accounts.length);

 const data = JSON.stringify(trans);

 fs.writeFile('trans.json', data,  err=> { 
 if(err) { 
 throw err; 
 } 
 });
   
//   }


}
}
=======
    if( i == (range - 1) ) {
      console.log(trans.length);
      const data = JSON.stringify(trans);
        fs.writeFile('trans.json', data,  err => { 
          if(err) { 
            throw err; 
        } 
      });
    }
  }
>>>>>>> Stashed changes
}

hello();