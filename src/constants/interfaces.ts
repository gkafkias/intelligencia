interface DefinitionCitation {
  definition?: string;
}

export interface Term {
  id: string;
  label: string;
  description?: string[];
  definition_citation?: DefinitionCitation[];
  synonyms?: string[];
}

export interface TermDTO {
  description?: string[];
  hasChildren?: boolean;
  in_subset?: boolean;
  iri?: string;
  is_defining_ontology?: boolean;
  is_obsolete?: boolean;
  is_preferred_root?: boolean;
  is_root?: boolean;
  label?: string;
  lang?: string;
  obo_id: string;
  ontology_iri?: string;
  ontology_name?: string;
  ontology_prefix?: string;
  short_form?: string;
  synonyms?: string[];
  term_replaced_by?: string;
  obo_definition_citation: DefinitionCitation[];
}
