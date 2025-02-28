declare module 'host/pokemonStore' {
  interface Store {
    selectedPokemon: Pokemon | null;
    listSelectedPokemon: Pokemon[];
    setSelectedPokemon: (pokemon: Pokemon) => void;
    setListSelectedPokemon: (pokemon: PokemonDetails) => void;
  }

  const usePokemonStore: {
    (): Store;
    <T>(selector: (state: Store) => T): T;
  };

  export default useUserStore;
}

declare module 'host/pokemonServices' {
  export const pokemonServices: {
    getPokemonDetails: (url: string) => Promise<PokemonDetails | null>;
  };

  export default pokemonServices;
}
