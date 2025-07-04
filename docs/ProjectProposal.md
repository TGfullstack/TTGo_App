# TTGo(Taylor'D Todo Go on) list/tasks application

## Application Definition Statement

*A clear high-level summary should be used to introduce the concept. This should be similar to an elevator pitch or a conversational reply to "What are you building?”. You will explore the audience and their demographics, the problem they are having, and your solution in subsequent sections in more detail but touch on them here.*

*Clarity over quantity should be the focus, to that end, creating visuals/charts to explain the more complex data or logical points could help to reinforce your Application’s Definition Statement.*

A todo list is one of the many tools one can use to manage tasks. With a busy schedule, due dates, meetings, or managing screen time, Creating a to-do list application to ease your load, meant to share with the family. Create task with a few clicks! Edit or delete tasks. Offering a way to categorize your tasks to better prioritize as the list may grow. Mark tasks as completed.

## Target Market

*Using Primary and Secondary research, describe the people most likely to be utilizing your application. What are their ages, education level, employment sector, income level, hobbies, or any other defining characteristics that set them apart from other groups of people? Identifying specific groups will help drive application design choices.*

*Primary Research is research that you have conducted yourself and is not based on secondary sources. Examples of Primary Research include surveys, interviews, and focus groups. This doesn't have to be formal in nature and can include discussions you have with individuals that are likely users of your application. Secondary Research is research that has been conducted by others and is based on their findings. Examples of Secondary Research include market research reports, industry publications, and news articles.*

In a previous class, I had to come up with a App Idea. Within a lecture someone expressed how calender and to-do apps lacked a user-friendly design that allowed family sharing. Taking that into consideration, a goal is to make tasks accessible from multiple devices.

According to LinkedIn, To-do list apps leave the door open for developers to offer unique features tailored for students, family's, project managers, and work. Creating a to-do app that will help a user be more productive. Able to stay connected and on task using a smartphone, tablet, desktop, and watch.
Offering a app to manage task, packed with features with customization based on a users needs.

## User Profile / Persona

*User profiles are a snapshot of an actual person and helps to open a window into the mind of an actual user and will provide insight while tailoring and refining interaction details to best fit your ideal users within your Target Market.*

Name: John Smith
Age: 32
Role: Store Manager
Education: Graduate

### Personal

- Married, one child
- 3 siblings

### Work

- Promoted 2 months ago
- Employed for 3 months

### Goals

- Further his education
- Make money and provide
- Good family man

### Usage

- Phone
- Tablet
- Desktop

### Issues

- overwhelmed with tasks
- uncompleted assignments
- miss due dates

## Use Cases

*A 'Use Case' describes how a user may interact with your application. It provides a series of steps to reach a desired result. If a user wants to listen to some music during a workout, how many clicks would it take to do that? Begin with a simple question like that and then map out the different steps to reach the desired goal. Use cases help us think through how our application will be used.*

*Use Cases help drive design decisions as well as testing procedures. During development we regularly test and confirm the work in progress matches up with our Use Cases. This provides valuable insight into how our application is addressing the needs of the user and allows us to correct missteps early. This [article](https://www.softwaretestinghelp.com/use-case-testing/) gives additional background Use Cases and Use Case Testing.*

### Create a Task

- Hit "New Task +" button to create a task
- Module popup, enter task information
- Hit "Add Task" button
- Optional "Cancel" button to cancel creating a task

#### Change Layout

- Hit "Settings" button to open a module
- Module popup, opt
- Hit "Add Task" button
- Optional "Cancel" button to cancel creating a task

## Problem Statement

*In a few sentences explain the problem your target market is seeing that requires this project to be built. This will identify why is your application needed and needs to be supported by Primary Research.*

Making a todo application that will stand out from competitors?!
Building a todo application, with tons of features, able to be customized to fit your life, share list/task with other users, and set reminders, for FREE?

- Updating up with new features to keep users engaged.

- Application advertisement

## Pain Points

*Explain your audience’s pain points that are contributing to their defined problem and their impact on the user. Primary Research should support your explanations.*

[ Replace this text with a description of the Pain Points your audience is experiencing. Include any Research that supports your Pain Points. ]

## Solution Statement

*How is your project going to solve the problem outlined above? Consider the competing products in your market space. What makes your solution different from other’s attempts to solve the problem? How are you able to better solve the defined problem for your audience than your competition?*

Looking for a to-do list application, look no further. The TimeTODO list application can be used as a productivity tool that aims to assist with time-management by focusing on prioritizing lists. Able to stay on tasks from any device. Family sharing so the family can stay connected!

## Competition

*What competing products exist to solve this or a similar problem? Identify and summarize competing products and how their approach to solving your identified problem differ from your own.*

The market is overloaded with todo applications. My application will have features to set itself apart from other todo list applications. To name a few competitors [Meister Task](https://www.meistertask.com/), or [Atlassian Trello](https://trello.com/)
TimeTODO will shine with features like family sharing, easy to prioritizing of tasks by categories, and customizable colors for  tasks urgency.  

## Features & Functionality

*Define key features and functionality intended to provide solutions to specific problems and pain points you have identified. These key items should be specifically defined in response to problems / pain points.*

*A good way to identify a Key Feature is to use the phrase 'In order to [solve this problem] I need to [do this]'. For example, 'In order to listen to music while I workout I need to be able to create a playlist'.*

*Features and functionality should be prioritized based on their importance to the user. This will help you focus on the most important features first and then add additional features as time allows.*

- Categorize - A user can better manage a hectic schedule with prioritizing task that will fall under 4 category types: Important, Important w/ NO DATE, Urgent, and Non-Urgent

- Color Code Task - Block task based on time, urgency, and due date

- Set reminders allowing a user to switch between multiple task

- Different View options - User can chose between two views, a List View and Kandad Board View

- Calendar Page with different layout options

## Integrations

*Use of an API is expected. This can be 3rd party APIs, your own API, or a combination of data sets. Identify which integrations are planned for and outline how you will use them transformatively. For 3rd party APIs provide links to their respective documentation and verify that your intended use complies with their Terms of Service.*

TimeToGo api will integrate with MongoDB Atlas, a schema-less NoSQL document database and can store BSON documents. A document is a Javascript object and groups documents in collections. MongoDB databases offer sample data that we will interact with at first to make sure we are pulling appropriate data into our application.

- JSON placeholder for dummy data for tasks
  - [Free fake and reliable API for testing](https://jsonplaceholder.typicode.com/)

- Connection string will look something like:
  - "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority"
  - Add credentials

- Authentication
  - NextAuth for user authentication
    - [NextAuth.js](https://next-auth.js.org)

- CRUD operations that will interact with my MongoDB database hosted on MongoDB Atlas
  - Create
    - A user
    - A project
    - A list
    - A task
  - Read
    - A user
    - A project
    - A list
    - A task
  - Update
    - A user
    - A project
    - A list
    - A task
  - Delete
    - A user
    - A project
    - A list
    - A task

- Prisma/Mongoose
  - Models - consist of Schema definitions.
    - User
    - List
    - Task
    - Project

### Routes

[add list of all routes in your api, with data that will be sent and received]

Example:

- /api/tasks

  - GET /
    - **Request Body**: N/A
    - **Response Data**: array of taskss [{id: '', title: '', description: '', dueDate: '', userId: '', listId: '', projectId: '', createdAt: '', updatedAt: '', type: 'private|public'}]
  - POST /tasks
    - **Request Body**: id , title, type, description, dueDate, userId, listId, projectId, createdAt, updatedAt
    - **Response Data**: id
  - PUT /tasks/:id
    - **Request Body**: id, title
    - **Response Data**: id
  - DELETE /tasks/:id
    - **Request Body**: id, title
    - **Response Data**: id

- /api/lists
  - GET /
    - **Request Body**: N/A
    - **Response Data**: array of lists [{name: '', description: '', dueDate: '', priority: '', task: '', userId: '', taskId: '', projectId: '', createdAt: '', updatedAt: '', type: 'private|public'}]
  - POST /list
    - **Request Body**: id ,name, type, description, dueDate, priority, task, userId, projectId, createdAt, updatedAt
    - **Response Data**: id
  - PUT /list/:id
    - **Request Body**: id ,name, type, description, dueDate, priority, task, userId, projectId, updatedAt
    - **Response Data**: id
  - DELETE /list/:id
    - **Request Body**: id, name
    - **Response Data**: id

- /api/users
  - GET /
    - **Request Body**: N/A
    - **Response Data**: array of users [{id: '', firstName: '', lastName: '', dateOfBirth: '', country: '', city: '', zipcode: '', phoneNumber: '', primaryEmail: '', secondaryEmail: '', createdAt: '', updatedAt: '', type: 'private|public'}]
  - POST /users
    - **Request Body**: id, firstName, lastName, dateOfBirth, country, city, zipcode, phoneNumber, primaryEmail, secondaryEmail, createdAt, updatedAt type
    - **Response Data**: id
  - PUT /users/:id
    - **Request Body**: id, firstName, lastName, dateOfBirth, country, city, zipcode, phoneNumber, primaryEmail, secondaryEmail, updatedAt
    - **Response Data**: id
  - DELETE /users/:id
    - **Request Body**: id, firstName
    - **Response Data**: id

- /api/projects
  - GET /
    - **Request Body**: N/A
    - **Response Data**: array of projects [{id: '', title: '', description: '', priority: '', completed: '', dueDate: '', createdAt: '', updatedAt: '', type: 'private|public'}]
  - POST /projects
    - **Request Body**: id, title, description, priority, completed, dueDate, createdAt, updatedAt, userId
    - **Response Data**: id
  - PUT /projects/:id
    - **Request Body**: id, title
    - **Response Data**: id
  - DELETE /projects/:id
    - **Request Body**: id, title
    - **Response Data**: id
