// Source: https://stackoverflow.com/questions/32888728/correct-way-to-share-functions-between-components-in-react

export const parameterize = (string) => {
   return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
};

export const inGroupsOf = (array, number, fillWith) => {
  fillWith = fillWith || null;
  let index = -number, slices = [];

  if (number < 1) {
    return array;
  }

  while ((index += number) < array.length) {
      let s = array.slice(index, index + number);

      while(s.length < number) {
        s.push(fillWith);
      }

      slices.push(s);
  }
  return slices;
};

export const writeParagraphs = (resourceName, paragraphs) => {
  return paragraphs.map((paragraph, paragraphIndex) => {
    return <p key={`paragraph-${parameterize(resourceName)}-${paragraphIndex}`} dangerouslySetInnerHTML={{__html: paragraph}}></p>
  })
};
