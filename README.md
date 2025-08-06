# Blog App

A simple, content-focused blog application built with Node.js, Express and EJS.  


## Table of Contents

- [Blog App](#blog-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)

## Features

- Create, read, update and delete blog posts  
- Clean, server-side rendered templates with EJS  
- Modular Express routes  
- Simple styling with your favorite CSS framework (or plain CSS)  

## Tech Stack

- Node.js (>=14)  
- Express ≥4.x  
- EJS templating engine  

## Prerequisites

- [Node.js](https://nodejs.org) v14 or higher  
- npm (comes with Node.js)  

## Installation

1. Clone the repo  
```
    git clone https://github.com/ado1d/blog-app.git
    cd blog-app
```

2. Install dependencies  
``` 
    npm install
```
## Running the App

Start the development server:

```
    nodemon index.js    
```
Open a browser and enter the address
```
    http://localhost:3000
```

## Project Structure
```
Blog App
├─ index.js
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ public
│  ├─ Image
│  │  ├─ logo.png
│  │  └─ window-content.svg
│  └─ styles
│     └─ main.css
├─ README.md
└─ views
   ├─ allposts.ejs
   ├─ contact.ejs
   ├─ create.ejs
   ├─ index.ejs
   ├─ partials
   │  ├─ footer.ejs
   │  └─ header.ejs
   └─ post.ejs

```


## Contributing

1. Fork this repository  
2. Create a feature branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m "Add some feature"`)  
4. Push to the branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

Please ensure your code follows existing style patterns

