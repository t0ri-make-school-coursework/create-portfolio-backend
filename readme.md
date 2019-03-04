# Create-Portfolio-API Documentation
## Intro
[VIEW DOCUMENTATION HERE](http://victoriamurray.me/create-portfolio-backend/#/)
Create-Portfolio-API works alongside [Create-Portfolio](https://github.com/t0ri/create-portfolio-frontend) to fill your portfolio’s data.  

## Resources
### Users
Each user has an `email`, `password`, `fName`, `lName`, and `slug` (for a personalized URL).

### Projects
Each project has a `title`, `shortDesc`, `longDesc`, `class`, `repo`, `live`, `tech`, and `img`.

## Endpoints
### User Endpoints
#### Sign Up User
``` javascript
fetch('https://www.create-portfolio.com/api/auth/sign-up')
```

#### Sign In User
``` javascript
fetch('https://www.create-portfolio.com/api/auth/sign-in')
```

#### Sign Out User
``` javascript
fetch('https://www.create-portfolio.com/api/auth/sign-out')
```

### Projects Endpoints
#### Create Project
``` javascript
fetch('https://www.create-portfolio.com/api/project/new')
```

#### Read Project
``` javascript
fetch('https://www.create-portfolio.com/api/project/:id')
```

#### Update Project
``` javascript
fetch('https://www.create-portfolio.com/api/project/:id/edit')
```

#### Delete Project
``` javascript
fetch('https://www.create-portfolio.com/api/project/:id')
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
