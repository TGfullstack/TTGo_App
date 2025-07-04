// /lib/fakeData.js
export const fakeProjects = [
  {
    _id: 'proj-1',
    name: 'Build Portfolio',
    description: 'Personal branding site using Next.js and Sanity',
  },
  {
    _id: 'proj-2',
    name: 'TTGo App',
    description: 'Task manager for tracking tasks, todos and projects',
  },
];

export const fakeTasks = [
  {
    _id: 'task-1',
    title: 'Design logo',
    description: 'Create a sleek, techy icon for TTGo',
    status: 'in-progress',
    attachment: '/uploads/1747218153427-801532179-InterviewTips.docx',
  },
  {
    _id: 'task-2',
    title: 'Setup MongoDB models',
    description: 'Create User, Task, Project, and Todo models',
    status: 'done',
    attachment: '/uploads/1747218153427-801532179-InterviewTips.docx',
  },
];

export const fakeUsers = [
  {
    _id: 1,
    username: 'mvick7',
    first_name: 'Mike',
    last_name: 'Vick',
    password: 'password1234',
    image:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1323&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date_of_birth: '2013-01-12T05:00:00.000Z',
    primary_email: 'mikevick@example.com',
    secondary_email: 'mvick@example.com',
    phone_number: '5407446534',
  },
  {
    _id: 2,
    username: 'johnboot',
    first_name: 'John',
    last_name: 'Bootlegger',
    password: '1234password',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date_of_birth: '1993-01-12T05:00:00.000Z',
    primary_email: 'johnboot@example.com',
    secondary_email: 'jboot@example.com',
    phone_number: '1234567890',
  },
];

export const fakeTodos = [
  {
    title: 'Todo 1',
    completed: false,
    description: 'Todo description for Todo 1',
    project: 'proj-1',
    tasks: ['task-1', 'task-2'],
    user: '',
  },
  {
    title: 'Todo 1',
    completed: false,
    description: 'Todo description for Todo 1',
    project: '',
    tasks: [],
    user: 2,
  },
];
