export const applicationSchema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/application",
  "title": "Application",
  "description": "An application in the system",
  "type": "object",
  "properties": {
    "username": {
      "description": "Username of the applicant",
      "type": "string"
    },
    "email": {
      "description": "Email of the applicant",
      "type": "string",
      "format": "email"
    },
    "dogId": {
      "description": "ID of the dog being applied for",
      "type": "string"
    },
    "applicationDate": {
      "description": "Date of the application",
      "type": "string",
      "format": "date"
    },
    "message": {
      "description": "Message from the applicant",
      "type": "string"
    }
  },
  "required": ["username", "email", "dogId", "applicationDate"]
};