# Budget Buddy Application

#### An application to help you keep track of your budgets
![budget-buddy logo](/logo/image.png)


## Description
Budget Buddy is a group project completed by 3 developers; Zebastian, Gerol, and Nataliia. This project proved to be huge challenge for all of us. As learning developers this project served as a great experience for collaborating with other devs, and the challenges that may come with. In the end developing Budget Buddy proved invaluable in teaching the importance of clear communication, teamwork, and ability to adapt on the fly. Our group brainstormed many ideas in the planning phase, however a budget app really seemed to speak to all 3 of us. For this group, Budget Buddy was our first full stack React Application and I think we can all say that we surprised ourselves with our ability to complete this one as a team. 

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
* For the design of the application we took a look at various different budgeting applications and drew inspiration from many different areas. We decided for our design to implement a dashboard of sorts for the users to see their budgets with the ability to view a different page for more information. Within this show page the user can see a chart of the budget as well as a table of their expenses which is also where they can add and delete expenses. In terms of styling Gerol created an amazing "Buddy" for our budget buddy app which we planned to implement throughout the application. For future plans we hope to implement this buddy even more into the app. Ideas for this include having the buddy offer help with budgeting tips or having the buddy pop up when an action such as changing a budget is completed (kind of like an alert).


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
[BudgetBuddy]()

## <a name="Zebastian Rodriguez"></a>About The Group
* Zebastian- Scrum Lead 
* Gerol- Lead Front-end
* Nataliia- Lead Back-end 

We are all developers looking to improve our abilities within the development world! This project was a great learning experience for all of us. Working as a group on different time zones and on different schedules, it was a challenge we had to learn to adapt to and deal with. Previously our projects were all solo, so this time around being able to communicate clearly when we were not all available made a huge difference for our group and the time we were commiting to this project. I think I can speak for all of us in saying this was quite a different challenge, but one that we all rose to the occasion and overcame it together. Completing this project only makes us more excited to continue to dive into the world of tech! Working in a small dev team and being able to accomplish an application like this only makes us dream of what else we can achieve throughout our coding careers!

    
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

