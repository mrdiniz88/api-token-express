# api-token-express
Building an API on nodejs with registration system, authentication, CRUD of projects and tasks.

## API endpoints
```
POST 
{
  "username": "username",
  "password": "password"
}
https://mrdiniz-api-express-two.herokuapp.com/auth/register
```
```
POST 
{
  "username": "username",
  "password": "password"
}
https://mrdiniz-api-express-two.herokuapp.com/auth/authenticate
```
```
POST 
{
  "title": "Project title", 
  "description": "Project description", 
  "tasks":[
              {
                "title": "Task title", 
                "assignedTo": "User ID"
              }
          ]
}
Authorization: Bearer token
https://mrdiniz-api-express-two.herokuapp.com/projects/
```
```
GET 
Authorization: Bearer token
https://mrdiniz-api-express-two.herokuapp.com/projects/
```
```
GET 
Authorization: Bearer token
https://mrdiniz-api-express-two.herokuapp.com/projects/:projectId
```
```
GET 
Authorization: Bearer token
https://mrdiniz-api-express-two.herokuapp.com/projects/:projectId
```
```
PUT
{
  "title": "Title of the changed project", 
  "description": "Description of the changed project, 
  "tasks":[
              {
                "title": "Title of the changed task", 
                "assignedTo": "User ID"
              }
          ]
}
Authorization: Bearer token
https://mrdiniz-api-express-two.herokuapp.com/projects/:projectId
```
```
DELETE
Authorization: Bearer token
https://mrdiniz-api-express-two.herokuapp.com/projects/:projectId
```
