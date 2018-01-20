/*
	JavaScript

	objectElements.js

	Accepts an object, returns an array of strings
	that represent every element in the object and
	its 'child' objects (objects that are elements of
	this object).
	Optional second parameter is object name to be
	used instead of 'this'.

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

function objectElements(obj, name = "this") {
    let collected = [];
    for(let prop in obj) (typeof obj[prop] == "object" && !Array.isArray(obj[prop])) ? collected = collected.concat(objectElements(obj[prop], `${name}${/^[A-Za-z]\w*$/.test(prop) ? `.${prop}` : `["${prop.replace("\"", "\\\"")}"]`}`)) : collected.push(`${name}${/^[A-Za-z]\w*$/.test(prop) ? `.${prop}` : `["${prop.replace("\"", "\\\"")}"]`}`);
    return collected;
}