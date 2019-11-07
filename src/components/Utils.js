// Source: https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react

export const parameterize = (string) => {
   return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};
