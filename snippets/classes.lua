--[[
	
	Lua

	classes

	Simple class constructor.
	Accepts a table of class methods
	(can be invoked on class instances)
	as the first argument, static
	methods (can be invoked on class
	itself) as the second argument
	and the constructor function
	(will be called each time a class
	instance is created) as the third
	argument. Returns a table that can
	be called (like a function) to create
	a new intance of the class, or indexed
	to access static methods. Also will
	have an '.instance(tab)' method to check
	if given table is an instance of this
	class.

	Example usage: https://repl.it/@Ia_grib/ClassesLuaExample

]]

function Class(methods, static, constructor)
	methods = methods or {}
	static = static or {}
	constructor = constructor or function() end

	local cmt = {__index = methods}

	return setmetatable(static, {
		__call = function(...)
			local new = setmetatable({}, cmt)
			constructor(new, select(2, ...))
			return new
		end,
		__index = {
			instance = function(tab)
				return getmetatable(tab) == cmt
			end
		}
	})
end