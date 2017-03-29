import path from "path";
import dataminer from "./src/dataminer";

function start() {
  const filepath = path.resolve("./src/codepoint-ruby.tsv");
  let data = [];
  data = dataminer.convertToJson(filepath, {
    headers: ["codepoint", "ruby"],
    separator: "\t"
  });
  dataminer.save("./src/codepoint-ruby.json", data);
}

start();
