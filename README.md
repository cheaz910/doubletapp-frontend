# Тестовое задание Doubletapp[Frontend]
Развернуто на heroku

    https://doubletapp-cheaz910.herokuapp.com/
    
Использовано:
* ReactJS
* Express
* MongoDB
## Start:
Запуск:
```
    npm install
    npm run start
```
Можно развернуть в докере:
```
    npm run docker
```
## API
### GET /api/students
#### Success response:
**Code** : `200 OK`

**Content example**

```json
[
    {
        "_id": 1234,
        "name": "Hello",
        "img": "https://google.com",
        "email": "world@example.com",
        "color": "green",
        "group": "KN-101",
        "age": 20,
        "rating": 123,
        "spec": "KN"
    }
]
```

### POST /api/students
#### Success Response

**Code** : `201 CREATED`

**Content example**

```json
{
    "message": "User registered successfully!",
    "userCreated": {
        "_id": "1234"
    }
}
```
#### Error Responses

**Condition** : во всех остальных случаях)

**Code** : `500`

### DELETE /api/students/:id
#### Success Response

**Condition** : если такой профиль существует.

**Code** : `204 NO CONTENT`

#### Error Responses

**Condition** : если такого профиля не существует.

**Code** : `404 NOT FOUND`