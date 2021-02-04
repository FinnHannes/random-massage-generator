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
        // get random number for each array
        const randNumVerb = Math.floor(Math.random() * this.verb.length); 
        const randNumArticle = Math.floor(Math.random() * this.article.length);
        const randNumAdjective = Math.floor(Math.random() * this.adjective.length);
        const randNumHelpNoun = Math.floor(Math.random() * this.helpNoun.length);
        const randNumPrep = Math.floor(Math.random() * this.preposition.length);
        const randNumTheLocation = Math.floor(Math.random() * this.theLocationNoun.length);
    }
}