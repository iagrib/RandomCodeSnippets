/*
	JavaScript

	objectElements.js

	Accepts an object, returns an array of strings
	that represent every element in the object and
	its 'child' objects (objects that are elements of
	this object).
	Optional second argument is object name to be
	used instead of 'this'.
	Third argument is an array of objects that should
	not be treated as such by this function. It's used
	by the function to prevent infinite loops with
	circular references, you may find a different usage
	for it too.

	Example:
	objectElements({
		a: 1,
		b: true,
		c: [1, 2, 3],
		d: {
			one: 1,
			two: 2,
			"some fancy name": undefined
		},
		e: "a string"
	})

	Outputs:	
	['this.a', 'this.b', 'this.c', 'this.d.one', 'this.d.two', 'this.d["some fancy name"]', 'this.e']

*/

function objectElements(obj, name = "this", objects = []) {
	if(!objects.includes(obj)) objects.push(obj);
	let collected = [];
	for(const prop in obj) (typeof obj[prop] === "object" && !Array.isArray(obj[prop]) && !objects.includes(obj[prop])) ? (objects.push(obj[prop]), collected = collected.concat(objectElements(obj[prop], `${name}${/^[A-Za-z]\w*$/.test(prop) ? `.${prop}` : `["${prop.replace("\"", "\\\"")}"]`}`, objects))) : collected.push(`${name}${/^[A-Za-z]\w*$/.test(prop) ? `.${prop}` : `["${prop.replace("\"", "\\\"")}"]`}`);
	return collected;
}