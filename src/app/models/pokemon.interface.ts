export interface Pokemon{
  id?: number;
  name?: string;
  imageDefault?: string;
  types?: Types[];
}
export interface Pokedex{
  name?: string;
  sprite?: string
}

export interface Types{
  slot?: number;
  type?: [
    name?: string,
    url?: string
  ]
}
