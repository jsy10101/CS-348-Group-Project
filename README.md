# WatBank 🏦

## Overview 🌐
This application aims to simulate a bank 🏦. I will provide a comprehensive summary of a user’s finances 💵, include summaries of the balance in each of their accounts 💳, the total aggregated balance over all of a user’s accounts 💰, the amount spent by a user over a given period 📅, and filters for transactions with more features soon to be added 🚀!

## Running the application 🚀
- Clone the GitHub repository to your local machine 🖥️.
- Install NodeJS v18.10.0 (installation instructions can be found [here 🔗](https://nodejs.org/en/download/)).
- Install the yarn package manager ([installation instructions can be found [here 🔗](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable%5D)).
- Install PostgreSQL on the platform you are using for testing. (Instructions can be found [here 🔗](https://www.postgresql.org/download/)).
- Make sure you can use the `psql` command in your shell 🐚.
- Run the following commands in your shell: `sudo -i -u postgres psql ALTER USER postgres WITH PASSWORD '<password>';` 🔑
- Following this, log out as the postgres user 🚪.
- Run `createdb <database> -U postgres` 📚
- Navigate to the `.env` file and replace the `DEV_DATABASE_URL` provided with `postgres://postgres:<password>@127.0.0.1:5432/<database>` 🔗
- Please note: the above steps from postgres installation onwards are a stop-gap solution, and will be more streamlined before the next milestone ⚙️.
- Navigate to the root directory of the project and run the following commands: `yarn install` `yarn start` 🎉

## Creating and Loading the Database for Testing purposes 🧪
- Running queries and testing locally with `psql` 🖥️
- Install PostgreSQL on the platform you are using for testing. (Instructions can be found [here 🔗](https://www.postgresql.org/download/)).
- Make sure you can run the `psql` command on your shell 🐚.
- Run the following commands in the `queries/creation` directory: `psql < createDB.sql` `psql < populateUsers.sql` `psql < populateAccounts.sql` `psql < populateTransactions.sql` 🗄️
- Test the SQL queries found in the `queries` folder with `psql` and compare with the expected output files under `queries/expectedOut` ✔️.
- To remove all tables, from the `queries` folder, run: `psql < creation/dropDB.sql` 🗑️

## Members 👥
- Anoushka Gupta
- Jaskirat Chawla
- Maanav Rajesh
- Preeti Valunjkar
- Tanvi Ohri

## Notes 📝
- References for mock-up frontend - MDN, https://reactjs.org/docs/getting-started.html 🌐
- References for setting up sequelize ORM - https://dev.to/nedsoft/getting-started-with-sequelize-and-postgres-emp 🔧
- References for uploading data into MongoDB - https://www.mongodb.com/docs/guides/crud/insert/ 📦
