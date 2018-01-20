/*
	JavaScript

	objectsEqual.js

	Checks if two objects are 'equal' by
	iterating through all key-value pairs
	of both and checking if they're equal.
*/

function objectsEqual(obj1, obj2) {
	if(obj1 === obj2) return true;
	if(typeof obj1 !== typeof obj2) return false;
	const equal = {};
	for(const key in obj1) if(!((typeof obj1[key] === "object" ? objectsEqual(obj1[key], obj2[key]) : (typeof obj1[key] === "number" && Number.isNaN(obj1[key]) && Number.isNaN(obj2[key]) || obj1[key] === obj2[key])) && (equal[key] = true))) return false;
	for(const key in obj2) if(!equal[key]) return false;
	return true;
}