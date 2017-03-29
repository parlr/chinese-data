import fs from "fs";
import path from "path";
import test from "ava";
import jsonfile from "jsonfile";
import dataminer from "../src/dataminer";

test("should save data to JSON file", async t => {
  const data = [
    { codepoint: "U+3400", ruby: "qiū", glyph: "㐀" },
    { codepoint: "U+3401", ruby: "tiàn", glyph: "㐁" },
    { codepoint: "U+3404", ruby: "kuà", glyph: "㐄" },
    { codepoint: "U+3405", ruby: "wǔ", glyph: "㐅" }
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

test("getGlyph()", t => {
  const line = "U+9FC3\tshǎn";

  const glyph = dataminer.getGlyph(line, { separator: "\t" });

  t.deepEqual(glyph, { codepoint: "U+9FC3", ruby: "shǎn", glyph: "鿃" });
});
