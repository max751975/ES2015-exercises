//1. Same keys and values
function createInstructor(firstName, lastName){
    return {
        [firstName] : lastName,
        [lastName] : firstName
    };
}

//2. Computed property names

let favoriteNumber = 42;
const instructor = {
    firstName : 'Colt',
    [favoriteNumber] : 'That is my favorite'
}

// 3. object methods

const newInstructor = {
    firstName : 'Colt',
    sayHi() {
        return 'Hi';
    },
    sayBye(){
        return this.firstName + 'says bye!';
    }     
}

// 4. create animal function

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}