import jsonfile from "jsonfile";
import fs from "fs";

export default {
  convertToJson: (filepath, options) =>
    String(fs.readFileSync(filepath)).split("\n").map(line => {
      const [codepoint, ruby] = line.split(options.separator);
      return { codepoint, ruby };
    }),
  save: async (filepath, content = []) =>
    jsonfile.writeFileSync(filepath, content, { spaces: 2 }, err =>
      console.log(err))
};
