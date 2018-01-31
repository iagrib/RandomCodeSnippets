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

function propChangeCallback(obj, prop, fn) {
	obj["_CC-changeCallbacks"] = obj["_CC-changeCallbacks"] || {};
	obj["_CC-values"] = obj["_CC-values"] || {};
	if(!obj["_CC-changeCallbacks"][prop]) {
		obj["_CC-changeCallbacks"][prop] = [];
		obj["_CC-values"][prop] = obj[prop];
		Object.defineProperty(obj, prop, {
			get: () => obj["_CC-values"][prop],
			set: v => {
				for(const cb of obj["_CC-changeCallbacks"][prop]) cb(obj["_CC-values"][prop], v);
				obj["_CC-values"][prop] = v;
			}
		});
	}
	obj["_CC-changeCallbacks"][prop].push(fn);
}