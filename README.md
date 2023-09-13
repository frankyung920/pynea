
# Pynea Backend-Hiring-Challenge-NestJS

## Start project 

```
docker-compose up --build
``` 


## Graph Playground
Access to http://localhost:3000/graphql

```
// getUser
query {
  getUser(id: "6e919dc3-f62a-4d30-981f-fd3a438e34c3") {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
  }
}

```
```
// listUsers
query {
  listUsers {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
  }
}
```
```
// createUser
mutation {
  createUser(createUserData: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
  }) {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
  }
}

```
```
// updateUser
mutation {
  updateUser(id: "some-uuid", updateUserData: {
    lastName: "Smith"
  }) {
    id
    firstName
    lastName
    email
    createdAt
    updatedAt
  }
}

```