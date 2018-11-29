function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay();

    //one way
    dayObject = {
        '0': 'Weekend',
        '6': `Weekend`,
        'weekday': "Weekday"
    };

    const dayString = dayObject[day] || dayObject['weekday']; // or dayObject.day || dayObject.weekday. But dayObject.day does not seem to work?
    console.log(`Today is a ${dayString}!`);

    //alternatively
    const dayArray = ['Weekend', 'Weekday', 'Weekday', 'Weekday', 'Weekday', 'Weekday', 'Weekend'];
    console.log(`Today is a ${dayArray[day]}!`);
}

isWeekend();
