
---

# Blog Post REST API

This is a REST API for blogging posts. It allows users to create blog posts through HTTP requests. The API is built using the MVC (Model-View-Controller) framework for better organization and maintainability.

## Setup Instructions

Before running the project, follow these steps:

1. **Install Dependencies**: Navigate to the project directory and run `npm install` in your terminal to install the required dependencies.

2. **Create .env File**: Create a `.env` file at the root of the project directory. Set the following environment variables in the `.env` file:
   ```
   CONNECTION_STRING=<your MongoDB connection string>
   PORT=<desired port number>
   ```

   Example:
   ```
   CONNECTION_STRING=mongodb://localhost:27017/mydatabase
   PORT=3000
   ```

3. **Run the Project**: After setting up the `.env` file, run the project using the command `npm run start` in your terminal.

## Schema Strict Mode

To prevent automatic type casting by Mongoose and enforce strict schema validation, the blog post schema is configured with cast: false. This setting ensures that the schema fields are validated without any automatic type conversions.


---
