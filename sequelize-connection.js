const Sequelize = require('sequelize')

const isProduction = process.env.NODE_ENV === "production";

console.log("process.env.PGHOST",process.env.PGHOST);
const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER,process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    dialect: 'postgres',
    ssl: isProduction
    
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
