export interface Pokemon{
  id: number;
  name: string;
  sprites: {
    normal: string,
    shiny: string,
    menu: string
  }
  types?: {
    type_1: string,
    type_2?: string
  }
  teraType? :{
    type: string
  }
  forms?: {
    mega_default?: string,
    mega_shiny?: string,
    giMax_default?: string,
    giMax_shiny?: string
    others?:{
      name: string,
      images:{
        name: string,
        url: string
      }
    }
  }
}

// export interface Game{
//   id: number,
//   name: string,
//   gen: number,
//   region: string,
//   pokemonIds: number[]
// }

export interface Type{
  id: number,
  name: string,
  icon?: string,
  color: string
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
