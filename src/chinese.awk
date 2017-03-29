#!/usr/bin/env awk

BEGIN {
	split(toggleValues, boundaries, ",")
	start=0
	end=start+1
}

/U\+/ && /kMandarin/ {
	row = codepointToDec($1);
	if (codepointToDec(boundaries[start]) <= row && row <= codepointToDec(boundaries[end])) print $1"\t"$3
	if (row >= codepointToDec(boundaries[end])) {start+=2; end=start+1}
}
function codepointToDec(field) { return strtonum("0x" substr(field, 3)) };
