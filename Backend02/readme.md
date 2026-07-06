1. GET all users
GET /users

2. GET users by role (query param)
GET /users?role=admin

3. GET user by ID (route param)
GET /users/1

4. Create user
POST /users
Content-Type: application/json
{
  "name": "Bob",
  "email": "bob@example.com",
  "role": "user"
}