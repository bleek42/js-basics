// * data types

// ? primitive types
let nyNum = 1; // * number
let myStr = 'this is a string'; // * string
let nul = null; // * absecense of a value
let bool = true; // * boolean (on/off, true/false, yse/no, etc.)
let undef = undefined;
// Symbol()

// * complex data types
const myListOfFriends = ['Daphne', 'Kevin', 'Liz', 'Otis']; // ? arrays are just lists that start at 0 & can consist of all the other different data types

console.log(myListOfFriends[0]);

const userObject = {
	// * objects that consist of properties (or "keys") that have a value that can be any other data type
	id: 1,
	name: 'bleek42',
	friends: [...myListOfFriends],
	addFriend(list = [], friend = '') {
		console.log(friends);

		for (let index = 0; index < friends.length; index++) {
			// ? log the friend
			console.log(friends[index]);
			result.push(friends[index]);
		}

		return result;
	},
};

// ? loosely typed means we can play fast & loose with our types but if we dont properly handle them it may throw an error

console.log(userObject.copyFriends(myListOfFriends, 'joycell'));

const logMessageNumTimes = (msg = 'hello', num = 2) => {
	// * void function has no return statement
	return msg * num;
};

const myMessageLogger = logMessageNumTimes();
