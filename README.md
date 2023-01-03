# Assignment 2 - Web API.
​
Name: Cillian Murphy (20094972)
​
## Features.
​
- Added the APIs created from the Lab
- Integrated the APIs into the first assignment 
​
## Installation Requirements
​
- No extra installation required.
​
​
## API Design
Give an overview of your web API design, perhaps similar to the following: 
​
- | /api/movies |Gets a list of movies | N/A | N/A |
- | /api/genres |Gets a list of genres | N/A | N/A |
- | /api/users |Gets a list of users | N/A | N/A |
- | /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A

​
​
## Security and Authentication
- N/A 
## Integrating with React App

 - Added the script below to replace the TMDB and refigured the pages
 - Made two other APIs similar to the code below.
 - Added the Different labs to the assignment, was able to get POST and GET API data from this assignement when 
 - instead of the react-scripts start, I used the node JS start instead like the labs explained.

 ![ ](./images/Screenshot_99.png)

​
~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
​
~~~
​

## Independent learning.

- Although I didn't get them working, got to learn alot more about Node.JS, Postman, APIs and MongoDB working alongside this
- assignment that I would've had known or learned about otherwise. 
