# NodePHPMailerContact


## Overview
This project implements a contact form that uses PHP with PHPMailer for handling form submissions and sending emails securely. The project is built using Node.js for the server-side logic, Express for routing, and integrates with a PHP backend to handle email dispatch.

## Technologies Used
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework that provides robust features for web and mobile applications.
- **PHP**: A popular general-purpose scripting language that is especially suited to web development.
- **PHPMailer**: A full-featured email creation and transfer class for PHP.
- **HTML/CSS**: For structuring and styling the web page.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **jQuery**: A fast, small, and feature-rich JavaScript library.

## Features
- **Contact Form**: Users can fill out the contact form, which includes name, email, and message fields.
- **Email Sending**: Submissions are sent to a specified email address using SMTP settings configured via environment variables.
- **Environment Configuration**: Sensitive data like SMTP credentials are stored in a `.env` file, which is not tracked in version control.


## Setup Instructions

### Prerequisites
- Node.js and npm installed
- PHP and Composer installed
- Local server environment like XAMPP for PHP execution

### Installation
1. **Clone the repository**
   ```bash
   git clone https://yourrepositorylink.com
   cd your-project-directory
2. **Install Node.js dependencies**
   ```bash
   npm install
3. **Install PHP dependencies**
   ```bash
     composer install
4. **Configure environment variables**
   Rename .env.example to .env.
   Update the .env file with your SMTP credentials and other configuration settings.
5. **Start your local development server (XAMPP or similar)**
   Ensure that the Apache server is running.
6. **Run the application**
   ```bash
    npm run dev
## Running the Application
  Open your web browser and navigate to http://localhost:3000 to view the application.
  Fill out the form and submit to test email functionality.
