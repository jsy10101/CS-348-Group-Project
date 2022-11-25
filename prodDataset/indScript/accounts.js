const fs = require('fs')
accounts = []
balance = []
types = ['Chequing', 'Saving', 'Credit']

async function getBal(){
  const filePath = 'balance.json';
    
     const jsonString = await fs.promises.readFile( filePath, 'utf8')

    const data =  JSON.parse(jsonString);

  //  console.log(data.length);
  
   for(let i in data) {
     balance[i] = data[i].Balance.substring(1);
   }
  //  console.log(balance);
}


async function hello() {

  await getBal();
  // console.log(balance.length)
  let j = 0;

  for ( let i = 0 ; i < 100 ; ++i)  {


    var rnd = Math.floor(Math.random() * 2);


    var obj = {
      userID : i,
      balance: balance[j++],
      type: 'Chequing'
    }
  
    accounts.push(obj)

    if(rnd) {
      var obj2 = {
        userID : i,
        balance: balance[j++],
        type: 'Saving'
      }
      accounts.push(obj2)
    }

   rnd = Math.floor(Math.random() * 2);

   if(rnd) {
    var obj3 = {
      userID : i,
      balance: balance[j++],
      type: 'Credit'
    }

    accounts.push(obj3)
  }

  

  if( i == 99 ) {
    console.log(accounts.length);
  //  setTimeout(() => {
  //    console.log(accounts.length);

 const data = JSON.stringify(accounts);

 fs.writeFile('accounts.json', data,  err=> { 
 if(err) { 
 throw err; 
 } 
 });
   
  }

}
}

hello();