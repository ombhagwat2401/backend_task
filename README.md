# Backend Task
 Develop RESTful APIs that allow users to register, login, and create events. After registering an account, users can create an event with name, date, address (along with location link) and description. Only logged in users should be able to view the events they have created.

## Deployment Link
https://backend-task-xmvu.onrender.com


## Created Using
<ul>
  <li>Node JS</li>
  <li>Express JS</li>
  <li>MongoDB</li>
  <li>Rest API's</li>
</ul>

## API Endpoints

### User Registration:
Endpoint: /api/register <br />
Method: POST <br />
Request Body: JSON containing email and password <br />
Response: Success or failure message

### User Login:
Endpoint: /api/login <br />
Method: POST <br />
Request Body: JSON containing email and password <br />
Response: JWT Token on successful login

### Create Event:
Endpoint: /api/events <br />
Method: POST <br />
Request Header: Authorization: Bearer JWT Token <br />
Request Body: JSON containing name, date, address (along with location link) and description <br />
Response: Success or failure message

### View Events:
Endpoint: /api/events <br />
Method: GET <br />
Request Header: Authorization: Bearer `< JWT token >` <br />
Response: List of events created by the logged in user
