1)
```
db.restaurants.find(); // add ".pretty()" at end to display better
```

2)
```
db.restaurants.find({}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1});
//OR
db.restaurants.find({}, {address: 0, grades: 0});
```

3)
db.restaurants.find({}, {address: 0, grades: 0, _id: 0});

4)
db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, district: 1, "address.zipcode": 1});

5)
db.restaurants.find({district: "Bronx"});

6)
db.restaurants.find({"district": "Bronx"}).limit(5).pretty();

7)
db.restaurants.find({district: "Bronx"}, {restaurant_id:1}).skip(5).limit(5);
//OR coz it works in order of sort, skip and limit
db.restaurants.find({district: "Bronx"}, {restaurant_id:1}).limit(5).skip(5);  

8) .....
db.restaurants.find({"address.coord": {$lt: -95.754168}}).pretty();

9)
db.restaurants.find({$and: [ {$not: {cuisine: 'American'}}, {grades: {score: {$gt: 70}}}, {"address.coord": {$lt: -65.754168}} ]});
// OR
db.restaurants.find({$and: [ {cuisine: {$ne: 'American'}}, {grades: {score: {$gt: 70}}}, {"address.coord": {$lt: -65.754168}} ]});
// OR
db.restaurants.find({cuisine: {$ne: 'American'}, grades: {score: {$gt: 70}}, "address.coord": {$lt: -65.754168}});

10)
db.restaurants.find({name: {$regex: "^Wil"}}, {restaurant_id: 1, name: 1, district: 1, cuisine: 1, _id: 0}).pretty()

11)
db.restaurants.find({name: {$regex: "ces$"}}, {grades: 0, address: 0, _id: 0})

12)
db.restaurants.find({name: {$regex: "Reg"}}, {grades: 0, address: 0, _id: 0})

13)
db.restaurants.find({district: 'Bronx', cuisine: {$in: ['American ', 'Chinese']}}).pretty();
// OR
db.restaurants.find({district: 'Bronx', $or: [{cuisine: 'American '}, {cuisine: 'Chinese'}]});

14)
db.restaurants.find({'district': {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {grades: 0, address: 0, _id: 0});    //Found 1889 documents

15)
db.restaurants.find({'district': {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {grades: 0, address: 0, _id: 0});    //Found 1883 documents

16)
db.restaurants.find({"grades.score": {$lte: 10}}, {grades: 0, address: 0, _id: 0});    //Found 3529 documents

17)
db.restaurants.find({'address.coord.1': {$gt: 42, $lte: 52}}, {grades: 0, district: 0, cuisine: 0, _id: 0}).count();    //Found 7 documents

18)
db.restaurants.find().sort({name: 1}).pretty();

19)
db.restaurants.find({},{}).sort({name: -1});

20)
db.restaurants.find({}, {cuisine: 1, district: 1, _id: 0}).sort({cuisine: 1, district: -1}).pretty();

21)
db.restaurants.find({"address.street": {$exists: true}}).count();

22)
db.restaurants.find({"address.coord": {$type: 1}}).pretty();
// OR
db.restaurants.find({"address.coord": {$type: "double"}}).pretty();    //Found 3772 (i.e all) documents

23)
db.restaurants.find({name: {$regex: "^Mad"}}, {name: 1, district: 1, cuisine: 1, "address.coord": 1, _id: 0}).pretty();    //Found 8 documents
