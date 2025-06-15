
const findTheOldest = function(arr) {
    return arr.reduce(function(accumulator, person) {
        
        if (accumulator == "")
        {
            if (!("yearOfDeath" in person))
        {
            const date = new Date()
            person.yearOfDeath = date.getFullYear();
        }
            return person;
        }
        if (!("yearOfDeath" in person))
        {
            const date = new Date()
            person.yearOfDeath = date.getFullYear();
        }
        let currentAge = person.yearOfDeath - person.yearOfBirth;
        let oldestAge = accumulator.yearOfDeath - accumulator.yearOfBirth
        if (currentAge > oldestAge)
        {
            return person;
        }
        else{
            return accumulator;
        }

    }, "")
};

// Do not edit below this line
module.exports = findTheOldest;
