Use the Aggregation Framework to:

1. Find all the zip codes in Iowa State
```
db.lab9.aggregate([
    { $match: {state: "IA"} },
    { $group: {_id: "$state", 
                zips: {$addToSet: "$_id"},
                count: {$sum: 1} } }
])
```

2. Find all the zip codes with a population more than 1000.
```
db.lab9.aggregate([
    { $match: {pop: {$gt: 1000}} },
    { $project: {_id: 0,
                    zips: "$_id"}
    }
])

```

3. Find all cities that have more than one zip code, sort the result based by state and city name.
```
db.lab9.aggregate([
    { $group: {_id: {state: "$state", city: "$city"},
                zipCount: {$sum: 1}} },
    { $match: {zipCount: {$gt: 1}} },
    { $sort: {"_id.state": 1, "_id.city": 1}}
])
```

4. Display the least populated city in each state
```
db.lab9.aggregate([
    { $group: {_id: {state: "$state", city: "$city"},
                population: {$sum: "$pop"}} },
    { $sort: {"population" : 1}},
    { $group: {_id: "$_id.state",
                    city: {$first: "$_id.city"},
                    pop: {$first: "$population"}} }
])
```
