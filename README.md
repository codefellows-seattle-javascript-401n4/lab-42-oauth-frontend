401 JS --  Lab 42 OAUTH FRONTEND
===

### Setup

1. In one terminal `cd server` from starter dir and run an `npm i` then run `npm run watch`
In this dir, create a .env file that contains the following: 

PORT=3000

API_URL=http://localhost:3000

NODE_ENV=dev

CLIENT_URL=http://localhost:8080

SECRET='Iamheasyouaremeandwearealltogether'

GOOGLE_CLIENT_ID=your Client ID here

GOOGLE_CLIENT_SECRET=your client Secret here

MONGODB_URI=mongodb://localhost/talktome

2. In a 2nd terminal `cd client` from starter dir and run `npm i`. 
3. Create a .env file and add the following to it: 

NODE_ENV=dev-server

API_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your Client ID here

GOOGLE_CLIENT_SECRET=your client Secret here

CLIENT_URL=http://localhost:8080

CORS_ORIGINS=*

4. Then run `npm run watch` from this dir
5. In a 3rd terminal `cd server` and make a 'db' directory, and start mongo.

### Usage

1. Click the link to 'Login with Google'
2. Select a google account
3. Click Profile tab to update your username