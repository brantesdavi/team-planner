export interface Pokemon{
  id?: number;
  name?: string;
  imageDefault?: string;
  types?: Type[];
}
export interface Pokedex{
  name?: string;
  sprite?: string
}

export interface Type{
  slot?: number;
  name?: string;
}
