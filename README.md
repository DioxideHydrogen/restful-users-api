# User Restful API

![Node](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
) ![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white
) ![MongoDb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
) ![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=Mocha&logoColor=white
)

A simple restful api for user management.

## Table of Contents
- [User Restful API](#user-restful-api)
	- [Table of Contents](#table-of-contents)
	- [Installation](#installation)
	- [Testing](#testing)
	- [Usage](#usage)
		- [Endpoints](#endpoints)
		- [Example](#example)

## Installation
1. Clone the repository:
```bash
git clone https://github.com/DioxideHydrogen/restful-users-api.git
```
2. Install dependencies:
```bash
npm install
```
3. Create your own .env file:
```bash
cp .env.example .env
```
4. Configure the database connection:
```bash
APP_PORT=3000
MONGO_URI= <Place here your mongodb connection uri>
```

## Testing
To run tests of project, use the following command:
```bash
npm test
```

## Usage
To run this project, use the following command:
```bash
npm start
```

### Endpoints

|Method|Request Body|Response Body|
|-|-|-|
| ![GET](https://img.shields.io/badge/GET-\/users-a?color=purple)|`null`| `Array<User>`|
| ![GET](https://img.shields.io/badge/GET-\/users/removeds-a?color=purple)|`null`| `Array<User>`|
| ![GET](https://img.shields.io/badge/GET-\/users/:id-a?color=purple)|`null`| `Object<User>`|
| ![POST](https://img.shields.io/badge/POST-\/users-a?color=whitegreen)|`{name,email,password,age,phone}`| `Object<User>`|
| ![PUT](https://img.shields.io/badge/PUT-\/users/:id-a?color=orange)|`{name}`| `Object<User>`|
| ![DELETE](https://img.shields.io/badge/DELETE-\/users/:id-a?color=red)|`null`| `Object<User>`|
| ![DELETE](https://img.shields.io/badge/DELETE-\/users/all-a?color=red)|`null`| `Object`|

### Example

<script src="https://gist.github.com/DioxideHydrogen/c9c1fd2e4177dbe845f80a3d62814d57.js"></script>