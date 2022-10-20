# CS-348-Group-Project

### Overview

This application aims simulate a bank. I will provide a comprehensive summary of a user’s finances, include summaries of the balance in each of their accounts, the total aggregated balance over all of a user’s accounts, the amount spent by a user over a given period, and filters for transactions with more features soon to be added!

### Running the application:

- Clone the GitHub repository to your local machine.

- Install NodeJS v18.10.0 (installation instructions can be found (here)[https://nodejs.org/en/download/]).

- Install the yarn package manager (installation instructions can be found (here)[https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable]).

- Navigate to the root directory of the project and run the following commands:
`yarn install`
`yarn start`


### Creating and Loading the Database for Testing purposes:

#### Method 1 - Running queries and testing locally with psql

 - Install PostgreSQL on the platform you are using for testing. Instructions can be found (here)[https://www.postgresql.org/download/].

 - Set up a Postges user with username and password of your liking.

 - Run the folloing commands in the project root directory:
  `psql < createDB.sql` 
  `psql -f db-creation/createtDB.sql`
  `psql -f db-creation/createTables.sql`
  `psql -f db-creation/populateTables.sql`

 - Test the raw SQL queries found in the queries folder and compare with the expected output files under queries/expectedOut.

 - To remove all tables from SQL, run:
 `psql -f db-creation/dropTables.sql`

### Members

- Anoushka Gupta
- Jaskirat Chawla
- Maanav Rajesh
- Preeti Valunjkar
- Tanvi Ohri

### Architecture

- CS348/dev (dev branch)
- CS348/prod (main branch)

Refrain from pushing directly to prod
Always pull from dev branch
Create feature branches from dev and then push the feautre branch for review
