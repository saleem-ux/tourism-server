# Tourism-server

### Deployment Test


* ##### [Github](https://github.com/saleem-ux/tourism-server)
* ##### [Pull Request](https://github.com/saleem-ux/tourism-server/pull/3)
* ##### [Heroku](https://tourismdb.herokuapp.com/api/v1/tourism)

---

**Team member**

##### Dena Kofahi.
##### Saleem Diab.
##### Laith Hayajneh.

---

#### Environment 
* PORT: 3000
* NODE_ENV= postgres://localhost:5432/tourism.
* DATABASE_URL= postgres://dzxzjicm:tNuL9r0S3I1vKsKPeb0WE6eW7Mj6sbNY@chunee.db.elephantsql.com/dzxzjicm.

---



###### Running the app:

* ####  `npm start` , `nodemon`

* #### Endpoint: POST ==> */signup*
* **Returns Object**

```javascript
{
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbGltIiwiaWF0IjoxNjI5OTI5MjY5fQ.bSNgMNBXvzVK4wn4of8jmrOrynWXyaQuLISJkdtmFHU",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": 5,
        "username": "salim",
        "password": "$2b$10$BOGO9S9o8wJSUYIGdL.SPunhRVuxTrdTjvLocOMSo2.71RasH.oPi",
        "role": "admin",
        "updatedAt": "2021-08-25T22:07:48.643Z",
        "createdAt": "2021-08-25T22:07:48.643Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbGltIiwiaWF0IjoxNjI5OTI5MjY5fQ.bSNgMNBXvzVK4wn4of8jmrOrynWXyaQuLISJkdtmFHU"
}
```

* #### Endpoint: POST ==> */signin*
    * **Returns Object**

```javascript
{
    "user": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbGltIiwiaWF0IjoxNjI5OTI5MzIxfQ.SQb4Lc41g_Zi7ZGfHhkM-B-0-iYQ8aILvB9_UePpgKg",
        "capabilities": [
            "read",
            "create",
            "update",
            "delete"
        ],
        "id": 5,
        "username": "salim",
        "password": "$2b$10$BOGO9S9o8wJSUYIGdL.SPunhRVuxTrdTjvLocOMSo2.71RasH.oPi",
        "role": "admin",
        "createdAt": "2021-08-25T22:07:48.643Z",
        "updatedAt": "2021-08-25T22:07:48.643Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNhbGltIiwiaWF0IjoxNjI5OTI5MzIxfQ.SQb4Lc41g_Zi7ZGfHhkM-B-0-iYQ8aILvB9_UePpgKg"
}
```
* #### Endpoint: DELETE ==> */delete/:id*
    * **Returns Object**

```javascript

"1"

```

* #### Endpoint: */users*
    * **Returns Object**

```javascript
{
    "Dena",
    "Laith",
    "Saleem",
    "salim"
}
```

* #### Endpoint: */secret*
* **Returns Object**

```javascript

 "Welcome to the secret area!"

```

* #### Endpoint: GET ==> */api/v1/tourism*
* **Returns Object**

```javascript
[
    {
        "id": 1,
        "trip": "Aqapa",
        "date": "26-8-2021",
        "transportation": "walking",
        "createdAt": "2021-08-25T13:38:00.991Z",
        "updatedAt": "2021-08-25T13:38:00.991Z"
    },
    {
        "id": 2,
        "trip": "istanbul",
        "date": "28-8-2021",
        "transportation": "airplane",
        "createdAt": "2021-08-25T13:39:14.589Z",
        "updatedAt": "2021-08-25T13:39:14.589Z"
    },
    {
        "id": 3,
        "trip": "bali",
        "date": "28-9-2021",
        "transportation": "airplane",
        "createdAt": "2021-08-25T13:40:03.272Z",
        "updatedAt": "2021-08-25T13:40:03.272Z"
    }
]
```

* #### Endpoint: GET ==> */api/v1/tourism/:id*
* **Returns Object**

```javascript
{
    "id": 1,
    "trip": "Aqapa",
    "date": "26-8-2021",
    "transportation": "walking",
    "createdAt": "2021-08-25T13:38:00.991Z",
    "updatedAt": "2021-08-25T13:38:00.991Z"
}
```
* #### Endpoint: POST ==> */api/v1/tourism*
* **Returns Object**

```javascript
{
    "id": 4,
    "trip": "amman",
    "date": "30-8-2021",
    "transportation": "private car",
    "updatedAt": "2021-08-25T22:18:01.157Z",
    "createdAt": "2021-08-25T22:18:01.157Z"
}
```
* #### Endpoint: PUT ==> */api/v1/tourism/:id*
* **Returns Object**

```javascript
{
    "id": 4,
    "trip": "amman",
    "date": "28-8-2021",
    "transportation": "private car",
    "createdAt": "2021-08-25T22:18:01.157Z",
    "updatedAt": "2021-08-25T22:19:06.579Z"
}
```
* #### Endpoint: DELETE ==> */api/v1/tourism/:id*
* **Returns Object**

```javascript

"1"
```

