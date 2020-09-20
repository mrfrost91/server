## Available Scripts

In the project directory, you can run:

### `node .\http_db.js`

This will start the http and db servers needed for the React app

For the correct operation of the app the database dump from /dump folder must be imported into mongo db.

More detaled description of how it can be done described here: https://docs.mongodb.com/database-tools/mongorestore/

### `node .\app.js`

This will start simple http server which is not using React framework. It can be accessed via the localhost:8080 link.
