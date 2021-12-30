<div align="center">

# Places Sharer App

</div>

- This app allows users to share places with each other. Every place has an image, title and other details such location.
- The visitor is able to view the list of users and check shared places for a specific user.
- **This is a dummy app for learning Node and Express, so some things may not work properly**. If you want to check out all my dummy projects, please email me for private repository access.

## Table of Contents

- [Frontend](#Frontend)
- [Backend](#backend)

## Frontend

### Structure

Creating a common split of components into folders `components` and `pages` makes it difficult to find individual parts of the app. Instead of creating two main folders and then subfolders, I **splitted logic by feature**. It means that I have place related components in a `places` folder, user related components in a `user` folder and so on. `Shared` folder contains common components.

### Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v8/commands/npm-install) to install and run.

```bash
npm install

npm start
```

## Backend

### Structure

MVC pattern

### Installation

Same like in frontend part.
