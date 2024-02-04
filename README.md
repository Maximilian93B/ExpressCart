
# ExpressCart

## Live Demo
[Live Demo Link]()

## Table of Contents
- [Live Demo](#live-demo)
- [Description](#description)
- [Built With](#built-with)
- [Features](#features)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)


## Description
This project focuses on creating a robust back end for an e-commerce platform, designed to offer a suite of features essential for online retail stores. Utilizing Express.js for the server framework and Sequelize as the ORM to streamline the  MySQL interactions, this back end supports a range of e-commerce activities for product cataloging. By employing Node.js, Express, and Sequelize, ExpressCart ensures efficient handling of data and provides a scalable API for front-end applications to interact with.

## Built With
Mention the frameworks, libraries, and tools used.

## Features
What makes your project stand out?

## Getting Started
Instructions on setting up the project locally.
## Installation

Follow these steps to set up and run ExpressCart locally:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/ExpressCart.git
    cd ExpressCart
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory and provide your MySQL credentials and database name:

    ```
    DB_NAME='ecommerce_db'
    DB_USER='your_mysql_username'
    DB_PW='your_mysql_password'
    ```

4. **Initialize Database**

    Log into MySQL and create your database:

    ```sql
    CREATE DATABASE IF NOT EXISTS ecommerce_db;
    ```

    Then, exit MySQL shell and run the schema file:

    ```bash
    mysql -u your_mysql_username -p your_mysql_password < db/schema.sql
    ```

5. **Seed Database (Optional)**

    To seed the database with initial data:

    ```bash
    npm run seed
    ```

6. **Start the Server**

    ```bash
    node server.js
    ```

    The server will start, making the API accessible via the defined port.

## Usage

Use API testing tools like Postman or Insomnia to interact with the available endpoints. The API supports CRUD operations for managing products, categories, and tags, detailed as follows:

- `GET /api/products`: Fetch all products
- `POST /api/products`: Add a new product
- `PUT /api/products/:id`: Update a product by ID
- `DELETE /api/products/:id`: Delete a product by ID

## Contributing
Not at the momment. ExpressCart is not a Open Source project. 

## Contact
- GitHub: [Maximilian93B](https://github.com/Maximilian93B)
- Email: [max.md.bosch@gmail.com](mailto:max.md.bosch@gmail.com)

## License
This project is licensed under the MIT license.

## Notes
Happy Coding!
