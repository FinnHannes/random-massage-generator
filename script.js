// Object with a property for every sencence part and a method to create a random sentence
const taskMessage = {
    verb: ['rescue', 'help', 'safe', 'attack'],
    article: ['the', 'a'],
    adjective: ['small', 'tiny', 'big', ],
    // noun whom to help
    helpNoun: ['cat', 'lady', 'grandpa', 'child', 'worm'],
    preposition: ['from', 'on', 'off', 'under'],
    // noun with the location where to help plus the corresponding article
    theLocationNoun: ['a tree', 'the street', 'the earth', 'the underground'],
    // creates the random generated task with a word from every property
    createRandomTask () {
        // array for the random generated task
        let randomtask = [];
        let randomString = '';
        // Object.values returns the entries from each property, which can then be further processed with forEach
        Object.values(taskMessage).forEach(element => {
            randomtask.push(element[Math.floor(Math.random() * element.length)]);
        });
        // returns a string with the values from the array, each concatenated with a space character
        randomString = randomtask.join(' ');
        return randomString.slice(0, -1);
    }
};

// generates a random number between 1 and 100
function getCharmaPoints() {
    const charmaPoints = Math.ceil(Math.random() * 100);
    return charmaPoints;
}

// Array with the recommendations for the charma points 
const recommendationsUsePoints = ['use a bad word', " don't say thank you", "don't greet the neighbors"];

// creates the three final sentences with the randomly created content
function createRandomMessage() {
    const sentence1 = `Your task for today is: ${taskMessage.createRandomTask()}. `;
    const sentence2 = `For this you will get ${getCharmaPoints()} charma points. `;
    const sentence3 = `You could use them the next time you ${recommendationsUsePoints[Math.floor(Math.random() * recommendationsUsePoints.length)]}.`;
    return sentence1 + sentence2 + sentence3;
}

console.log(createRandomMessage());
