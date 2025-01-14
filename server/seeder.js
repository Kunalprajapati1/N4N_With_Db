const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors');
const connectDB = require('./config/config');
const NGO = require('./modals/ngoModal');
const NGOs = require('./data/ngo-data');
const Admin = require('./modals/adminModal');
const Admins = require('./data/admin-data');
//config dotenv and mongodb conn file
dotenv.config();
connectDB();

//import data
const importData = async () => {
     try {
        await NGO.deleteMany();
        const sampleData = NGOs.map(ngo => {return{...ngo}});
        await NGO.insertMany(sampleData);
        console.log('Data Imported Of NGO'.bgblue.white);
        process.exit();
     } catch (error) {
        console.log(`${error}`.bgRed.white);
        process.exit(1);
     }
}

const importAdminData = async () => {
    try {
       await Admin.deleteMany();
       const sampleData = Admins.map(admin => {return{...admin}});
       await Admin.insertMany(sampleData);
       console.log('Data Imported Of Admin'.bgblue.white);
       process.exit();
    } catch (error) {
       console.log(`${error}`.bgRed.white);
       process.exit(1);
    }
}


const dataDestroy = () => {};

if(process.argv[2] === '-d'){
    dataDestroy();
}else{
    importData();
}

if(process.argv[2] === '-d'){
    dataDestroy();
}else{
    importAdminData();
}