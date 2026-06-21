# Habibi Restaurant Menu App

A Node.js, Express, MongoDB, and EJS web app for browsing a restaurant menu. The app renders a home page, lists all menu items, supports menu search, and sorts items by price.

## Features

- Home page with menu search
- Full menu listing from MongoDB
- Search menu items by food name
- Sort menu items by price in ascending or descending order
- Request logging middleware that writes request details to `logs/data.txt`

## Tech Stack

- Node.js
- Express
- EJS
- MongoDB with Mongoose
- dotenv

## Project Structure

```text
.
├── app.js
├── config/
│   └── db.js
├── controllers/
│   └── menuController.js
├── middleware/
│   └── logger.js
├── models/
│   └── menuSchema.js
├── routes/
│   └── menuRoutes.js
├── views/
│   ├── Food.ejs
│   ├── home.ejs
│   └── searchResults.ejs
├── package.json
└── package-lock.json
```

## Prerequisites

- Node.js installed
- MongoDB connection string
- A MongoDB collection named `Food`

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

3. Create the log directory used by the logger:

```bash
mkdir -p logs
```

4. Start the app:

```bash
node app.js
```

The app will be available at:

```text
http://localhost:3000
```

Note: `package.json` currently uses `node server.js` for `npm start`, but this project contains `app.js` as the server entry file. Use `node app.js`, or update the start script to `node app.js`.

## Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Render the home page |
| GET | `/getMenu` | Display all food items |
| GET | `/search?q=item` | Search food items by `FoodName` |
| GET | `/sort/price?order=asc` | Sort food items from low to high price |
| GET | `/sort/price?order=desc` | Sort food items from high to low price |

## Database Model

Menu items are read from the `Food` collection with this schema:

```js
{
  FoodName: String,
  Category: String,
  Price: Number,
  Quantity: Number,
  Rating: Number
}
```

Example document:

```json
{
  "FoodName": "Chicken Biryani",
  "Category": "Rice",
  "Price": 12,
  "Quantity": 20,
  "Rating": 4.5
}
```

## Notes

- Menu item images are generated in the EJS views using Unsplash image URLs.
- The logger appends request details to `logs/data.txt`.
- No automated tests are currently configured.
