# chinese-data

Extract data from unihan

## Usage

Filter codepoint from raw database

	echo $'glyph\truby' > src/codepoint-ruby.tsv
	awk '/U+/ && /kMandarin/{print $1"\t"$3}' src/Unihan_Readings.txt >> src/codepoint-ruby.tsv
	./node_modules/.bin/csv2json --tsv ./src/codepoint-ruby.{tsv,json}
