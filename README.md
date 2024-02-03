# beer_microbiome
This repo is for my master thesis on beer microbiome

## To run the backend

Since the backend will use mongodb, we can use [atals](https://www.mongodb.com/atlas/database) which is a free and easy-to-use cloud database and there's no need to manaully deploy it urself.

After setting up a mongodb instance, we need to create a file `.env` in the backend folder

And add 2 variables about the database to the file, for exmaple

```
PORT=4001
MONGO_URI=mongodb+srv://***:***@***
```

Then by using `npm start`, you should be good to go

