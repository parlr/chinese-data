import fs from "fs";
import jsonfile from "jsonfile";
import punycode from "punycode";

export default {
  convertToJson(filepath, options) {
    return String(fs.readFileSync(filepath))
      .split("\n")
      .filter(line => line.substr(0, 2) === "U+")
      .map(line => this.getGlyph(line, options));
  },
  getGlyph(line, options) {
    const [codepoint, ruby] = line.split(options.separator);
    const unicodeCodepoint = codepoint.split("+")[1];
    const hexCodepoint = parseInt(unicodeCodepoint, 16);
    const glyph = punycode.ucs2.encode([hexCodepoint]);
    return { codepoint, ruby, glyph };
  },
  async save(filepath, content = []) {
    return jsonfile.writeFileSync(filepath, content, { spaces: 2 }, err =>
      console.log(err));
  }
};
