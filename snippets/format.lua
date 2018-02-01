--[[

	Lua

	format

	A very simple script that formats
	a string. It accepts a string and
	a table and replaces all instances
	of "{key}" in the string with values
	in the table associated with that key.
	Third argument is default replacement
	value for keys that don't exist in
	the table. If it's not provided,
	those instances of replacement
	pattern will not be replaced.

	Example:
	format("{name} scored {points} points!", {name = "John", points = 10})

	Returns:
	"John scored 10 points!"

]]

function format(str, tab, default)
	local function replace(k)
		if tab[k] == nil then
			if default == nil then return "{"..k.."}" end
			return default
		end
		return tostring(tab[k])
	end
	return (str:gsub("{([^}]-)}", replace))
end