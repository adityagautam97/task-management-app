<h1>Task Management App</h1>

<p>This project is a task management application built with a <strong>NestJS</strong> backend and a <strong>React</strong> frontend. It allows users to manage tasks by performing CRUD operations such as creating, viewing, and deleting tasks.</p>

<h2>Project Structure</h2>
<ul>
  <li><strong>task-management-backend</strong>: The backend of the application built using NestJS, TypeORM, and MS SQL.</li>
  <li><strong>task-management-frontend</strong>: The frontend of the application built using React and Tailwind CSS.</li>
</ul>

<h2>Prerequisites</h2>
<p>Before you begin, ensure you have the following installed on your local machine:</p>
<ul>
  <li>Node.js (v14 or later)</li>
  <li>MS SQL Server</li>
  <li>Git</li>
</ul>

<h2>Getting Started</h2>

<h3>Clone the Repository</h3>
<pre><code>git clone [https://github.com/your-username/task-management-app.git](https://github.com/adityagautam97/task-management-app.git)
cd task-management-app
</code></pre>

<h3>Backend Setup</h3>

<ol>
  <li>Navigate to the <code>task-management-backend</code> folder:
  <pre><code>cd task-management-backend</code></pre></li>

  <li>Install backend dependencies:
  <pre><code>npm install</code></pre></li>

  <li>Create a new MS SQL database named <code>TaskManagmentDB</code> or update the database settings in the <code>src/app.module.ts</code> file if you prefer a different name:
  <pre><code>TypeOrmModule.forRoot({
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'your_username',
  password: 'your_password',
  database: 'TaskManagmentDB',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  options: {
    encrypt: false,
  },
}),
</code></pre></li>

  <li>Run the backend development server:
  <pre><code>npm run start:dev</code></pre>
  The backend will be running on <code>http://localhost:3000</code>.</li>
</ol>

<h3>Frontend Setup</h3>

<ol>
  <li>Navigate to the <code>task-management-frontend</code> folder:
  <pre><code>cd ../task-management-frontend</code></pre></li>

  <li>Install frontend dependencies:
  <pre><code>npm install</code></pre></li>

  <li>Start the frontend development server:
  <pre><code>npm start</code></pre>
  The frontend will be running on <code>http://localhost:3001</code>.</li>
</ol>

<h3>CORS Configuration</h3>
<p>Since the backend and frontend run on different ports, CORS must be enabled in the backend. In <code>task-management-backend</code>, CORS is configured like this:</p>

<pre><code>app.enableCors({
  origin: 'http://localhost:3001',
  methods: 'GET,POST,DELETE',
  credentials: true,
});
</code></pre>

<h3>API Endpoints</h3>
<ul>
  <li><strong>GET</strong> <code>/tasks</code>: Retrieve all tasks.</li>
  <li><strong>POST</strong> <code>/tasks</code>: Create a new task.</li>
  <li><strong>DELETE</strong> <code>/tasks/:id</code>: Delete a task by ID.</li>
</ul>

<h3>Task Management App Features</h3>
<ul>
  <li><strong>Add Tasks</strong>: Users can add new tasks with a description.</li>
  <li><strong>View Tasks</strong>: The app displays a list of all tasks.</li>
  <li><strong>Delete Tasks</strong>: Users can remove tasks from the list.</li>
</ul>

<h3>NestJS</h3>
<p>NestJS is a framework for building scalable and efficient server-side applications using TypeScript and Node.js. It uses Express under the hood and allows for a modular architecture that supports dependency injection and TypeORM integration for database management.</p>

