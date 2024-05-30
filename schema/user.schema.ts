export const userSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/user",
  "title": "User",
  "description": "A user in the system",
  "type": "object",
  "properties": {
    "username": {
      "description": "Username of the user",
      "type": "string"
    },
    "password": {
      "description": "Password of the user",
      "type": "string"
    },
    "email": {
      "description": "Email of the user",
      "type": "string",
      "format": "email"
    },
    "staff": {
      "description": "Staff status of the user",
      "type": "string",
      "enum": ["T", "F"]
    }
  },
  "required": ["username", "password", "email", "staff"]
};