import { Term, TermDTO } from "../constants/interfaces";

export const mapTermData = (data: TermDTO[]): Term[] => {
  if (!data) return [];

  return data.map((term) => ({
    id: term.obo_id,
    label: term?.label || "",
    description: term?.description || [],
    definition_citation: term?.obo_definition_citation || [],
    synonyms: term?.synonyms,
    url: term?.iri,
  }));
};

export const getLabelFrequency = (data: TermDTO[]): any => {
  const labels = data.map((term) => term?.label || "");
  let frequencyMap = new Map();

  for (let string of labels) {
    let words = string.split(" ");

    for (let word of words) {
      // Remove any punctuation and convert to lowercase.
      word = word.replace(/[^\w\s]/gi, "").toLowerCase();

      // If the word is not in the frequency map, add it and set its frequency to 1.
      if (!frequencyMap.has(word)) {
        frequencyMap.set(word, 1);
      }
      // If the word is already in the frequency map, increase the frequency.
      else {
        frequencyMap.set(word, frequencyMap.get(word) + 1);
      }
    }
  }

  return frequencyMap;
};
