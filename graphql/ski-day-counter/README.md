
# Learning GraphQL

Data-driven applications depend on remote queries that run through APIs. GraphQL—a query language for APIs that was originally built by Facebook—allows developers to choose the kinds of requests they want to make and to receive information on multiple facets of that query in one request. The GraphQL approach to querying across networks can address a wide variety of large-scale development problems.

In this course, learn how to get started with GraphQL. Eve Porcello introduces the basics of this query language, then walks through queries, variables, and operation names. Eve explains how to work with mutations and subscriptions, as well as how to create and enhance schema. She covers topics like creating a custom object, adding an enumeration type, writing schema documentation, and much more.

Note: This course was created by Moon Highway. We are pleased to host this training in our library.
Skills covered

**GraphQL**

[LinkedIn Course](%5Bhttps://www.linkedin.com/learning/learning-graphql-11292553/sending-input-types-to-mutations%5D)

## Tech dependencies
```
npm install graphql apollo-server nodemon
```
## Running
```
npn start
```

## Query Examples

### totalDays
```
query ExampleQuery {
  totalDays
}
```

### Custom object
```
query ExampleQuery {
  totalDays
  allDays {
    id
    date
    mountain
  }
}

``` 

### Enum Type
```
query ExampleQuery {
  totalDays
  allDays {
    id
    date
    mountain
    conditions
  }
}

```

### Mutation
```
mutation($removeDayId: ID!){
  removeDay(id: $removeDayId) {
    date
    id
    mountain
  }
}

#variables

{
  "removeDayId": "3"
}
```
#### Inline
```
mutation{
  removeDay(id: "1") {
    id
    mountain
  }
}

```
### Input Types
```
mutation($addDayInput: AddDayInput!){
  addDay(input: $addDayInput) {
    date
    mountain
    conditions
  }
}

#variables
{
  "addDayInput": {
    "date": "1/2/2025",
    "mountain": "Alpine Meadows",
    "conditions": "ICE"
  }
}

```

#### Inline
```
mutation{
  addDay(input: {
    date: "1/2/2025"
    mountain: "Alpine Meadows"
    conditions: ICE
  }) {
    date
    mountain
    conditions
  }
}

```

### Custom Object
```
mutation{
  removeDay(id: "2") {
    day {
      mountain
      date
    }
    totalBefore
    totalAfter
  }
}

```

###  Schema mocks
```
query ExampleQuery {
  allDays {
    date
    mountain
    conditions
  }
}
```

### Subscription
```
subscription{
  newDay {
    conditions
  }
}
```


## Language Support
https://graphql.org/code/