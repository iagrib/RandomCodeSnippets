/*

	JavaScript

	propChangeCallback

	A wrapper around functionality of
	getters/setters that allows you to
	easily add callback functions that will
	be called when an object's property is
	reassigned. First argument is the object,
	second argument is the property name
	(string) and the third argument is the
	callback function you want to add.
	There can be as many callbacks per
	property as you need. Can also be used
	on global variables by passing
	the global object as the first argument
	(`global` in node and `window` in browsers).

*/

const callbacks = Symbol("Property change callbacks");
const values = Symbol("Property values");

function propChangeCallback(obj, prop, fn) {
	if(!obj[callbacks]) {
		Object.defineProperty(obj, callbacks, {value: {}});
		Object.defineProperty(obj, values, {value: {}});
	}
	if(!obj[callbacks][prop]) {
		obj[callbacks][prop] = [];
		obj[values][prop] = obj[prop];
		Object.defineProperty(obj, prop, {
			get: () => obj[values][prop],
			set: v => {
				for(const cb of obj[callbacks][prop]) cb(obj[values][prop], v);
				obj[values][prop] = v;
			}
		});
	}
	obj[callbacks][prop].push(fn);
}