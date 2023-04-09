const fs = require('fs');
const Sample = require('../models/Sample')
const path = require('path');
require('dotenv').config()
const mongoose = require('mongoose')

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("db connected")
        fs.readFile(path.join(__dirname, '/db_ready.json'), async (err, data) => {
            if (err) throw err;
            const jsonArray = JSON.parse(data);
            for (const jsonObject of jsonArray) {
                const myData = new Sample(jsonObject);
                try {
                    const savedData = await myData.save();
                    console.log(`Data saved successfully! ID: ${savedData._id}`);
                } catch (error) {
                    console.error(error);
                }
            }
        });
        console.log("All data saved successfully")
        return;
    })
    .catch((error) => {
        console.log(error)
    })

