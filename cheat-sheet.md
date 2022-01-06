### Querying data from the navigator graphiql

When we want to query two elements of same type, with different ids, we do the folowing steps:

```graphql
{
    apple: company(id: "2"){
        ...companyDetails
    }
    google: company(id: "2"){
        ...companyDetails
    }
}

fragment companyDetails on Company{
    id
    name
    description
}
```

### Querying a mutation data means adding a data browser side

```graphql
mutation{
    addUser(firstName: "Jhon", age: 33, companyId: "2"){
        id
        firstName
        age
    }
}
```