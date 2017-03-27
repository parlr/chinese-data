import jsonfile from "jsonfile";

export default {
  save: async (filepath, content = []) =>
    jsonfile.writeFileSync(filepath, content, { spaces: 2 }, err =>
      console.log(err))
};
