# EmailClientNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Client server

Run `npm i` to install node dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Backend server

This project utilizes a local SQL database. Be sure to have a local SQL instance running.

Navigate to `./server`.

Run `npm i` to install node dependencies.

Create a `.env` file that contains HOST, USER, and PASSWORD variables for MySql server.

```
HOST=127.0.0.1
USER=yourusername
PASSWORD=yoursupersecretpassword
```

Run `npm run start` to launch the api server.

## Live Project Features (Happy path only)

- Sign up/in authentication
- Sign out
- Protected routes
- Add contacts to people page
- Search contacts by name or email
- WYSIWYG Editor for creating broadcasts

## Features still in development

- Send broadcasts to people list
- Receive responses
- Update contact information
- Display previously sent broadcasts

## Available Routes

### Public

- / - Homepage
- /login - Login page
- /signup - Sign up page
- /404 - Dynamically rendered 404 if no routes are found

### Private (Available once authenticated)

- /broadcasts - Displays previously sent broadcasts
- /broadcasts/create - Create new broadcast page
- /broadcasts/:id - Displays indivdual broadcasts
- /people - Displays all contacts
- people/add - Form to create new contacts
- people/:id - Form to update selected contact
- responses - Displays all responses
