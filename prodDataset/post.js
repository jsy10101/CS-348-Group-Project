const axios = require('axios')
const fs = require('fs')
// const url = 'https://randomuser.me/api/?format=json';
      
async function getData(filePath){

  const jsonString = await fs.promises.readFile( filePath, 'utf8')

  const data =  JSON.parse(jsonString);

//  console.log(data.length);

  for(let i in data) {
    axios.post('http://localhost:3030/accounts/add', data[i]);
  }
}
             
async function hello() {
  await getData('accounts.json');
}

hello();