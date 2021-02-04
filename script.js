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
        let randomtask = [];
        Object.values(taskMessage).forEach(element => {
            randomtask.push(element[Math.floor(Math.random() * element.length)]);
        });
        return randomtask.join(' ');
    }
}

console.log(taskMessage.createRandomTask());