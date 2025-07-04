# 🚀 M.E.R.N. Tech Stack

Fill out the headings below with your Tech Stack information. List the tools and technology you would like to use for your final project. Explain your reasoning for this as well. For example, how does the proposed tool or technology provide value to your overall portfolio of work?

## Application Design

What tool(s) will you use to create click-through designs of the application? List any UI kits you would like to utilize as well.

- Figma will be used to display wireframes, color palette, brand ideas, and a interactive prototype of my final project

- Ant Design UI Kit

- Simple Design System UI Kit

- Lookscout Low-Fi Dashboard Wireframe Kit

- Tailwind CSS

- Custom CSS color palette created using

- [ui Colors](uicolors.app/create)

## Front End Framework

The front-end development will provide a pleasing and great user experience. The TODO app will include the following technologies:

- NextJS

- Cascading Style Sheets(CSS)

- Hypertext Markup Language(HTML)

- JavaScript(JS)

- Tailwind CSS

- Redux

## State Management

What is your proposed solution for managing data? This could mean utilizing a database, local-storage, and in general state management libraries for the application (e.g. Redux).

React State Management is crucial in helping share states between multiple React components. Utilizing MongoDB to add tasks. This will be my first time using a State Management Library and I believe Redux is the library for me by centralizing the state repository using a 'Store' to hold the applications state.

## Node

Node will be used to serve up and API and the front-end will render pages using React best practice (Functional Components). A NodeJS Project will be initialized using npm.

## Express

Express is a popular framework to power an API. Describe your idea for building similar functionality offered by express: e.g. middleware, routes, controllers, sending and receiving JSON data.

Express will serve up an API and connect to my MongoDB database using prisma library. A user can interact with API routes allowing full CRUD operations. "/getAllToDoList" route will fetch all task from the database. "/deleteToDoList" route will delete task from the database. "/updateToDoList" API allows updates to be made to a ToDO List. "/addToDoList" API lets a user create ToDo list.

## MongoDB/DynoDB

MongoDB is a document-oriented NOSQL database that stores data in JSON-like format called BSON (Binary JSON). MongoDB handles large amounts of unstructured data, promising high performance. MongoDB stores data in collections of documents, which allows flexible and schema-less data modules. Data will be fetched from a MongoDB Atlas database.

## Prisma/Mongoose

Prisma is a ORM used to manage our interactions with the MongoDB database. Mongoose library will help structure my model(s) for a User, List that include tasks with information like title, description, due date, time.
