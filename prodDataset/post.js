const axios = require('axios')
const fs = require('fs')
const moment = require('moment')
// const url = 'https://randomuser.me/api/?format=json';

      
async function getData(filePath){

  const jsonString = await fs.promises.readFile( filePath, 'utf8')

  const data =  JSON.parse(jsonString);

//  console.log(data.length);

  for(let i in data) {
    let temp = new Date(2022, Math.floor(Math.random() * 11), Math.floor(Math.random() * 30) + 1).toISOString();
    while(!moment(temp).isValid()) {
     temp = new Date(2022, Math.floor(Math.random() * 11), Math.floor(Math.random() * 30) + 1).toISOString();
    }

    // let temp = new Date(2022, 0, 1).toISOString();

    data[i].createdAt = temp;
    data[i].updatedAt = temp;

    axios.post('http://localhost:3030/transactions/add', data[i]);
  }

}
             
async function hello() {
  await getData('data/transTest.json');
}

hello();
