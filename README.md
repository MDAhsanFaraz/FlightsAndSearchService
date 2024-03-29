<!-- role base file system -->
<!-- /
    -src/
        index.js// server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repositiory/
    -tests/ [later]
    -static/
    -temp/ -->

# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`<br>
`npx sequelize db:seed:all`
### then in then main index.js uncommnent    
` //     if (process.env.SYNC_DB) 
 {         db.sequelize.sync({ alter: true });
       }`
this line of code start the server by `npm start` then again comment it out 
#### this the only way to create the association mentioned int the model where airport belongs to many city and on deleting a city all airports also get delted Because of onDelete casade
```


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City 

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport
  
## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, created_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city (one to many)
```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```

