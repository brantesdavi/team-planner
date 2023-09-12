export interface Pokemon{
  id: number;
  name: string;
  sprites: {
    normal: string,
    shiny: string,
    menu: string
  }
  type: {
    type_1: string,
    type_2?: string
  }
}
// export interface Pokemon{
//   id?: number;
//   name?: string;
//   imageDefault?: string;
//   imageShiny?: string;
//   types?: Type[];
// }
// export interface Pokedex{
//   name?: string;
//   sprite?: string
// }

// export interface Type{
//   slot?: number;
//   name?: string;
// }

// export interface Select{
//   text: string;
//   value: string;
// }
