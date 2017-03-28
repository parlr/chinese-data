# chinese-data

Extract data from unihan

## Usage

Filter codepoint from raw database

	awk '/U+/ && /kMandarin/{print $1"\t"$3}' src/Unihan_Readings.txt > src/codepoint-ruby.tsv
	./node_modules/.bin/csv2json --tsv ./src/codepoint-ruby.{tsv,json}
