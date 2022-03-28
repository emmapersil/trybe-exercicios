const connection = require('./connection');

// const serialize = (userData) => ({
//    id, 
//    firstName: userData,first_Name,
//    lastName: userData.last_Name,
//    email,
//    password,    
// });

const userValidation = (firstName, lastName, email, password) => {
   if (!firstName || typeof firstName !== 'string') return false;
   if (!lastName || typeof lastName !== 'string') return false;
   if (!email || typeof email !== 'string') return false;
   if (!password || password.length < 6 || typeof password !== 'string') return false;

   return true;
};

const createUser = async ({ firstName, lastName, email, password}) => {
   const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)'

   const newUser =  connection.execute(query, [firstName, lastName, email, password]);

   return newUser;
};

module.exports = {
   createUser,
   userValidation,
};