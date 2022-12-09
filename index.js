// data types

// primitive types
let nyNum = 1; // number
let myStr = 'this is a string'; // string
let nul = null; // absecense of a value
let bool = true; //boolean (on/off, true/false, yse/no, etc.)

// complex data types
const myListOfFriends = ['Daphne', 'Kevin', 'Liz', 'Otis']; // arrays are just lists that start at 0 & can consist of all the other different data types

const userObject = {
	// objects that consist of properties (or "keys") that have a value that can be any other data type
	id: 1,
	name: 'bleek42',
	friends: [...myListOfFriends],
	showFriend(friend) {
		console.log(friend);
	},
};

const logMessageNumTimes = (msg = 'hello', num = 2) => {
	console.log();
};

userObject.isAdmin = true;

userObject.deleteFriend = () => console.log('I deleted u');

const me = new User(1, 'bleek', 'bleek@bcs.com', 'my-secret-pw-42')

console.log(userObject);
