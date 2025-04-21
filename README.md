# Budget Buddy Application

#### An application to help you keep track of your budgets
![budget-buddy logo](/logo/image.png)


## Description
Budget Buddy was a collaborative group project developed by three aspiring developers: Zebastian, Gerol, and Nataliia. This project pushed us outside of our comfort zones and presented a number of challenges that ultimately helped us grow as developers. As one of our first real experiences working as a team, it taught us valuable lessons in communication, collaboration, and adaptability.

During the planning phase, we explored several ideas, but a budgeting app resonated with all of us. It felt practical, relevant, and meaningful. Budget Buddy became our first full-stack application built with React, and despite the hurdles, we were proud to see it through. In the end, not only did we gain hands-on experience, but we also walked away with a deeper understanding of what it takes to work effectively as a development team. 

## Table of Contents
* [Technologies Used](#technologiesused)
* [Features](#features)
* [Design](#design)
* [Project Next Steps](#nextsteps)
* [Deployed App](#deployment)
* [About the Author](#Author)

## <a name="technologiesused"></a>Technologies Used 
* JavaScript
* HTML5
* CSS3
* mongoose 
* react 
* react-router
* react-dom
* react-icons
* react-chartjs-2
* react-toastify
* dotenv
* bcrypt
* express
* express-session
* method-override
* morgan 
* cors 
* jsonwebtoken



## Features
* User Authentication
* Database storage
* Navigation bar 
* Buttons for submission of forms
* Icons instead of "edit" "delete" buttons
* Chart of budget breakdown
* Custom Budget Buddy mascot 
* Toastify notifications 


## Wireframe Link
* https://lucid.app/lucidspark/ad50d0cd-fce5-4053-864e-9bf6bd4ef2c1/edit?invitationId=inv_85bd9a92-9ae7-484f-b5bd-7b5081a39405&page=0_0#
## Trello Planning
* https://trello.com/b/PTVVOlD9/project-3-budget-buddy-react-app

## <a name="design"></a>Design
* For the design of Budget Buddy, we drew inspiration from a variety of budgeting applications, combining elements we liked to create something both user-friendly and visually engaging. We decided on a dashboard-style layout to give users a clear overview of their budgets, with the option to navigate to a detailed view for more in-depth information.

On the budget "show" page, users can view a visual chart of their budget alongside a table of expenses. This section also allows them to easily add or delete expenses, making the app both informative and interactive.

A fun and unique touch to our app was the introduction of the “Buddy” character—designed by Gerol—who we envisioned as a friendly guide for users. While the Buddy is currently integrated into the visual theme, we have future plans to expand its role. Some ideas include having the Buddy offer budgeting tips, provide helpful feedback, or even pop up as a playful alert when actions like updating a budget are completed.


## <a name="nextsteps"></a>Project Next Steps
#### List of Future Features
* Allow users to set a savings goal and have that displayed
* Allow users to select their own avatar and change it at will 
* Include more information for budgets such as the option for a yearly or montly breakdown
* Inclusion of the buddy mascot more 
* Add multiple lighting modes (light/dark etc.)


## Github repository
* You can view the front-end repository:
[Github.com](https://github.com/gerol-r/budget-buddy-front-end)
* If unable to view please go live locally through VS Code
* You can view the back-end repository: 
[Github.com](https://github.com/gerol-r/budget-buddy-backend-2)
* If unable to view please go live locally through VS Code
* You can view the app deployed live here:
[BudgetBuddy](https://the-budget-buddy-app.netlify.app/)

## <a name="Zebastian Rodriguez"></a>The Team Behind Budget Buddy
* Zebastian- Scrum Lead [GitHub](https://github.com/Zebyrod)
* Gerol- Lead Front-end [GitHub](https://github.com/gerol-r)
* Nataliia- Lead Back-end [GitHub](https://github.com/nhalko09)

We’re a team of passionate developers, all focused on growing our skills and making our mark in the tech world. Budget Buddy was a major milestone for us—not only as our first full-stack group project, but also as a valuable lesson in teamwork, time management, and adaptability.

With each of us working across different time zones and juggling varied schedules, communication quickly became the backbone of our collaboration. Up until this point, our projects had all been solo efforts, so learning how to coordinate, share responsibilities, and stay aligned despite not always being online together was a new and rewarding challenge.

We can confidently say that we rose to the occasion. This experience strengthened our confidence in working as a team, and reminded us of just how much can be achieved when collaboration and commitment come together. Completing this project has only fueled our excitement to keep learning, keep building, and keep pushing forward in our tech journeys. If this is what we can create now, we can't wait to see what the future holds.



    
## Works Cited:
* React Icons: 
In this project we used react icons to replace the edit and delete buttons. Implementing this was relatively simple with the react-icons package. This made it super easy to import these icons from the package and use the components in place of edit/delete
- https://www.geeksforgeeks.org/reactjs-icons/
* React Chart: 
Using Chart.js and react-chart-js-2 wrapper lets you bind chart data and configurations to React state, ensuring the charts automatically re-render when the state changes. This makes it easy to visualize data in real-time with minimal effort. It’s the most popular data visualization library for React applications. In this project we implemented a donut chart that showcases the budget versus expenes breakdown. As the expenses fill up the chart more and more the user can see how much of their budget is being used up. At certain points the color of the chart will change to indicate the budget is being used up more and more. In order to implement this we used the package react chart and referenced plenty of videos/question-boards to fully understand how to add this feature. One particulary helpful source was this channel PedroTech on youtube.
- https://www.youtube.com/@PedroTechnologies
- https://www.chartjs.org/docs/latest/
* Back-end get route: 
While developing this project we encoutered a bug enabling a user signed in to being seeing all other user budgets and expenes rather than just their own. We took a look at a stackoverflow question thread to assist us in solving this bug. The fix for this included only finding the specific user Id on the get route by making this change we ensured that the user can only see their specific data. We also had an issue was the data getting cached, but not returned from the database. We had to include a line of code to disable this behavior enabling the front end and back end to send data back and forth effectively.
- https://stackoverflow.com/questions/61033910/mern-stack-application-same-data-appearing-in-other-users-dashboard
* JSON Web Tokens: 
For this application we ran across some issues with the username and avatar staying visible across multiple pages. In order to solve this we had to include them within our authentication method. As we authenticated we were sending the user password and name, but not this additional data causing the user to still be signed in, but not reflected on the front-end page. This meant we had to not only send the user token, but this additonal user data within our routes to ensure the user data did not magically change upon a new page being loaded. 
- https://auth0.com/docs/secure/security-guidance/data-security/token-storage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
- https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage
- https://datatracker.ietf.org/doc/html/rfc7519#section-4.1
* React Toastify:
While developing Budget Buddy we came across this package called react-toastify. This package was super simple and easy to implement into our code. By adding this we were able to have a pop up notification appear upon the user completing actions like submitting a form or deleting an expense. The docs were super easy to follow and videos were also very easy to follow along with. 
- https://www.youtube.com/watch?v=mapbus0I6X8&list=PL4cUxeGkcC9iNnY07bh_UPaRIQZcJfARY&index=4
- https://fkhadra.github.io/react-toastify/installation

