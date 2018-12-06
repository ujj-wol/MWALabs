Homework07:
Creating a NoSQL design model for an apllication to manage a library, taking into consideration the following requirements:
    
    a. Books have an ISBN number and are categorized by author and tagged by keywords to facilitate search

    b. Books can be borrowed by students, so the librarian will be able to check all borrowed books and their return date so he may contact students who are late returning their books.

// Books Collection
```

{
    _id: ObjectId(),
    ISBN: '',
    authors: [],
    keywords: [],
    student: '',
    returnDate: ''
}

```

Revisit Homework07 and write down your suggestiong to tune your Library application performance. (Indexes).

My Suggestions:

- Create index on student (i.e. burrowing person)
- Create index on returnDate
- Create index on book keywords
