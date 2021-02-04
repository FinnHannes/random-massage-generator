// Object with a property for every sencence part and a method to create a random sentence
const taskMessage = {
    verb: ['rescue', 'help'],
    article: ['the', 'a'],
    adjective: ['small', 'black'],
    // noun whom to help
    helpNoun: ['cat', 'lady'],
    preposition: ['from', 'on'],
    // noun with the location where to help plus the corresponding article
    theLocationNoun: ['a tree', 'the street'],
    // creates the random generated task with a word from every property
    createRandomTask () {
        // array for the random generated task
        let randomtask = [];
        // Object.values returns the entries from each property, which can then be further processed with forEach
        Object.values(taskMessage).forEach(element => {
            randomtask.push(element[Math.floor(Math.random() * element.length)]);
        });
        // returns a string with the values from the array, each concatenated with a space character
        return randomtask.join(' ');
    }
}

// generates a random number between 1 and 100
const getCharmaPoints = () => {
    const charmaPoints = Math.ceil(Math.random() * 100);
    return charmaPoints;
}

console.log(getCharmaPoints());