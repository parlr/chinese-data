import fs from "fs";
import path from "path";
import test from "ava";
import jsonfile from "jsonfile";
import dataminer from "../src/dataminer";

test("should save data to JSON file", async t => {
  const data = [
    { glyph: "西", phonetic: "xī" },
    { glyph: "中", phonetic: "zong1" },
    { glyph: "火", phonetic: "huǒ" },
    { glyph: "山", phonetic: "shān" }
  ];

  const filepath = "./test/data.json";
  await dataminer.save(filepath, data);

  t.true(fs.statSync(filepath).size > 0);
  const content = jsonfile.readFileSync(filepath);
  t.is(content.length, 4);
});

test("convertToJson()", t => {
  const filepath = path.resolve("./src/codepoint-ruby.tsv");
  let data = [];
  data = dataminer.convertToJson(filepath, {
    headers: ["codepoint", "ruby"],
    separator: "\t"
  });
  t.true(data.length > 0);
  t.is(data[0].codepoint, "U+3400");
});
