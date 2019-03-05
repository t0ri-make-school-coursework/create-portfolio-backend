# Create-Portfolio-API Documentation
## Introduction
This is the documentation for the RESTful Create-Portfolio-API, which is intended to work alongside [Create-Portfolio](https://github.com/t0ri/create-portfolio-frontend) to fill your portfolio’s data. 

The Create-Portfolio-API currently serves authorized access to a user's `project` data.

**Base URL**:  `create-portfolio.herokuapp.com/api`

## Projects
### Project Resource
Each project resource is returned in the following JSON format:
``` json
{
	"_id": "5c7c83ffa9f82238dcf7b23e",
	"title": "Project Name",
	"madeFor": "Class Name",
	"shortDesc": "This is my short description.",
	"longDesc": "This is my longer description.",
	"repo": "https://www.link.com",
	"live": "https://www.link.com",
	"img": "https://www.link.com",
	"__v": 0
},
```

### Project Endpoints
Each endpoint not expected to read a response will return a 200 if OK.
#### Get All Projects
You can read all projects you're authorized to view with the `GET /projects` endpoints.
```
https://www.create-portfolio.herokuapp.com/api/projects
```

#### Create Project
You can create a new project with the `POST /project/new` endpoint.
```
https://www.create-portfolio.herokuapp.com/api/project/new
```

#### Read Project
You can read a project with the `GET /project/:id` endpoint.
```
https://www.create-portfolio.herokuapp.com/api/project/:id
```

``` json
{
    "project": {
        "_id": "id",
        "title": "title",
        "madeFor": "madeFor",
        "shortDesc": "shortDesc",
        "longDesc": "longDesc",
        "repo": "repo",
        "live": "live",
        "img": "img",
        "__v": 0
    }
}
```

#### Update Project
You can update a project with the `PUT /project/:id/edit` endpoint.
``` 
https://www.create-portfolio.herokuapp.com/api/project/:id/edit
```

#### Delete Project
You can delete a project with the `DELETE /project/:id` endpoint.
```
https://www.create-portfolio.herokuapp.com/api/project/:id
```

## Users
### Resource
Each user creates their account with an `email`, `password`, `fName`, `lName`, and `slug` (for a personalized URL) when signing up.

### Requests
#### Sign Up User
```
https://www.create-portfolio.com/api/auth/sign-up
```

#### Sign In User
```
https://www.create-portfolio.com/api/auth/sign-in
```

#### Sign Out User
```
https://www.create-portfolio.com/api/auth/sign-out
```


## STRETCH (Intensive) Data
### User Account
email
password
fName
lName
slug
### Professional Details
title
introduction
about
skills
skill
languages
language
interests
interest
### Contact
resume
links
each link:
* title
* URL
### Articles
each article:
* title
* URL
* desc
* img
### Projects
each project:
* title
* shortDesc
* longDesc
* class
* repo
* live
* tech
* img
