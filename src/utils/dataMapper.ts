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
