/*
	JavaScript

	objectsEqual.js

	Checks if two objects are 'equal' by
	iterating through all key-value pairs
	of both and checking if they're equal.

	In addition to that, when comparing
	NaN with NaN or 'new String("something")'
	with '"something"', '===' operator will
	return false, but this function will
	return true.

*/

function objectsEqual(obj1, obj2) {
	const t1 = typeof obj1, t2 = typeof obj2;
	if(Object.is(obj1, obj2) || (obj1 === obj2) || ((t1 === "string" || obj1 instanceof String) && (t2 === "string" || obj2 instanceof String) && (String(obj1) === String(obj2))) || ((t1 === "number" || obj1 instanceof Number) && (t2 === "number" || obj2 instanceof Number) && (Number(obj1) === Number(obj2))) || ((t1 === "boolean" || obj1 instanceof Boolean) && (t2 === "boolean" || obj2 instanceof Boolean) && (Boolean(obj1) === Boolean(obj2)))) return true;
	if((t1 !== t2) || (t1 !== "object" && t1 === t2 && obj1 !== obj2)) return false;
	const equal = {};
	for(const key in obj1) if(!((typeof obj1[key] === "object" ? objectsEqual(obj1[key], obj2[key]) : (typeof obj1[key] === "number" && Number.isNaN(obj1[key]) && Number.isNaN(obj2[key]) || obj1[key] === obj2[key])) && (equal[key] = true))) return false;
	for(const key in obj2) if(!equal[key]) return false;
	return true;
}