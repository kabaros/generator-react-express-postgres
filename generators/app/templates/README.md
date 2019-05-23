# <%= title %>

## Get started

> Both Server and Client dependencies should be installed. However, you can run `npm install` on the root folder to install the dependencies for both the server and the client.

1. Startup the database using the `docker-compose up` command.

   > If you prefer to use your own DB instance, skip this step. Make sure to update the `.env` to set the database connection information if needed.

2. Run the migrations on the `server` directory. There are 3 scripts available to run the migrations.

   2.1 `npm run migrate-seed`: Run the migrations and seed the database

   2.2 `npm run migrate`: Run the migrations without seeding the database.

   2.3 `npm run seed`: Only seed the database.

3. Start the Server by running `npm run server` from the root or `npm run dev` from the server directory

4. Start the client by running `npm run client` from the root directory or `npm start` from the client directory
