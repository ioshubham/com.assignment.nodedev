# com.assignment.nodedev

#### In this repository an API call is made to https://api.postalpincode.in/pincode/380061 and the response returned is kept in mongoDB. When user request for a pincode than if the data is stored in redis , it will get reture else from DB itself.

Installation
```
npm i
```

Setup Environment files 
create two files in environments directory
```
.env.development
.env.production

populate them with below variables

ENVIRONMENT=Development
PORT=5454
MONGO_URI="yours mongoDB URI"
DB_NAME=assignment
REDIS_URI=redis://localhost:6379

```

Run
```bash
npm run dev
npm run prod