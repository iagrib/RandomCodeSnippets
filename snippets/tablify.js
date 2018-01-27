/*

	JavaScript

	tablify.js

	Formats a table, returns a string.
	'Table' is an array of rows.
	'Row' is an array of values.
	Second argument is a separator for row values (string).


	Example:
	tablify([
		["Position", "Player", "Points"],
		["1", "Ia_grib", "10"],
		["2", "CoolNickname", "5"]
	], "|")

	Outputs:
	Position|      Player|Points
	       1|     Ia_grib|    10
	       2|CoolNickname|     5

*/

function tablify(tab, sep = " ") {
	const len = [];
	for(const row of tab) {
		for(const i in row) {
			row[i] = typeof[row[i]] == "undefined" ? "" : row[i].toString();
			const length = row[i].length;
			if((len[i] = len[i] || 0) < length) {
				len[i] = length;
				for(const nr of tab) {
					nr[i] = nr[i] || "";
					nr[i] = " ".repeat(Math.max(0, length - nr[i].length)) + nr[i];
				}
			} else row[i] = " ".repeat(len[i] - row[i].length) + row[i];
		}
	}

	return tab.map(row => row.join(sep)).join("\n");
}