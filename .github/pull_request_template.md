## Description
<!-- 
Please provide a clear and concise description of your changes here. 
Explain what the PR does, why it's needed, and any relevant context.
Include links to related issues or tickets if applicable.
-->

- Modify the env variables.
- Modify the auth.controller.js file.
- Implement the router and post with /login, /register, and /profile, each maintaining a trycatch structure.
- Modify the user migration, adding two columns (first name and last name).
- Modify the user model, adding first name and last name.
- Modify the index.js file by adding what I did in the auth controller.
- Modify the login and register components by implementing fetch.
- connection to Postgres database


## How to QA this?
<!--
Please provide simple step-by-step instructions to test the contents of this pull request.
Feel free to include screenshots, GIFs, or videos to illustrate the steps and expected results.
Images can help reviewers understand the changes more quickly!

Example:
1. Navigate to the login page
2. Enter credentials: user@example.com / password123
3. Click "Login" button
4. Verify that you're redirected to the dashboard
-->
Command to delete migrations from the backend if a table is missing:npx sequelize-cli db:migrate:undo
Command to update backend migrations: npx sequelize-cli db:migrate
