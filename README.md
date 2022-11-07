# Pre-requisites

| Binaries   | Version   |
| ---------- | --------- |
| NodeJS     | >= LTS    |
| NPM        | >= 8.15.0 |
| PostgreSQL | >= 15.0   |

# Structure

├── node_modules
├── src
| |── components
│ │ ├── User
| │ │ ├── Controller
| │ │ ├── Interfaces
| │ │ └── Models
| │ │ ├── Request
| │ │ └── Services
│ ├── configs
│ │ ├── db.js
│ ├── constants
│ │ ├── messages
│ │ │ ├── index.js
│ │ └── index.js
│ ├── helpers
│ │ ├── index.js
│ │ └── upload.js
│ ├── middlewares
│ │ ├── check_auth.js
│ ├── routes
│ │ ├── user
│ │ │ ├── index.js
│ │ │ └── schema.js
│ │ └── index.ts
├── .env
├── .gitignore
├── index.js
├── package-lock.json.js
├── .package.json
└── README.md

````

# SetUp & Install?

```sh
# Clone the repository
git clone

# Create the .env file from the .env.sample file
# create src/db_pool/connection.js => example are given below;

 ''''sh
{
require('dotenv').config()

const Connection = {
	username: process.env.DB_USER || 'db_username',
	password: process.env.DB_PASSWORD || 'db_password',
	database: process.env.DB_NAME || 'db_dbname',
	host: process.env.DB_HOST || 'db_host',
};

module.exports = Connection
}
''''

# Add your database details
 user: 'db_username',
 password: 'db_password',
 database: 'db_dbname',
 host: 'db_host',

# Install NPM dependencies
npm install;

````

# How to Run?

### Development Environment

```sh
cd node-ecomm-dashboard-backend
npm run dev;
```
