declare module 'host/store' {
  interface Store {
    name: string;
    selectedPokemon: Pokemon | null;
    setName: (name: string) => void;
    setSelectedPokemon: (pokemon: Pokemon | null) => void;
  }

  const useUserStore: {
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
