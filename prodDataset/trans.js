const fs = require('fs')
const axios = require('axios');
accountID = []
trans = []
balance = []
const range = 100;

async function getBal(){
  const filePath = 'Balance.json';
    
     const jsonString = await fs.promises.readFile( filePath, 'utf8')

    const data =  JSON.parse(jsonString);

  //  console.log(data.length);
  
   for(let i in data) {
     balance[i] = data[i].Balance.substring(1);
   }
  //  console.log(balance);
}
async function getAccountID(){

  const jsonString = await axios.get('http://localhost:3030/accounts')

  let data = jsonString.data;
  
   for(let i in data) {
     accountID.push(data[i]._id)
   }

}


async function hello() {

  await getBal();
  await getAccountID();
  console.log(balance.length);
  console.log(accountID.length);
  const AccIDLen = accountID.length
  for ( let i = 0; i < range; ++i) {
    var acc1 = Math.floor(Math.random() * accountID.length);
    var acc2 = Math.floor(Math.random() * accountID.length);
    while( acc1 == acc2) {
      acc2 = Math.floor(Math.random() * accountID.length);
    }

    var obj = {
      senderID: accountID[acc1],
      receiverID : accountID[acc2],
      amount : balance[Math.random() * balance.length]
    }

    trans.push(obj);

    if( i == (range - 1) ) {
      console.log(trans.length);
      const data = JSON.stringify(trans);
        fs.writeFile('transTest.json', data,  err => { 
          if(err) { 
            throw err; 
        } 
      });
    }
  }
}

hello();