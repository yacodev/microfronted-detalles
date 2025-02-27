import React, { useEffect, useState } from 'react';
import usePokemonStore from 'host/pokemonStore';
import pokemonServices from 'host/pokemonServices';
import { PokemonDetails as IPokemonDetails } from '../interface/pokemon.interface';

const PokemonDetails: React.FC = () => {
  const { selectedPokemon, listSelectedPokemon } = usePokemonStore();
  console.log('selectedPokemon', selectedPokemon);
  console.log('selectedPokemon', listSelectedPokemon);
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (selectedPokemon?.url) {
        try {
          const details: IPokemonDetails =
            await pokemonServices.getPokemonDetails(selectedPokemon.url!);
          if (details) {
            setPokemonDetails(details);
          }
        } catch (error) {
          console.error('Error fetching pokemon details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPokemonDetails();
  }, [selectedPokemon]);

  if (!selectedPokemon || loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900'>
        <p className='text-xl text-gray-800 dark:text-white'>
          {!selectedPokemon ? 'No hay Pokémon seleccionado' : 'Cargando...'}
        </p>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 p-8'>
      <div className='max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
        <div className='md:flex'>
          {/* Imagen y detalles básicos */}
          <div className='md:w-1/2 p-8 bg-gray-50 dark:bg-gray-700'>
            <img
              src={selectedPokemon.sprites.front_default}
              alt={selectedPokemon.name}
              className='w-64 h-64 mx-auto object-contain'
            />
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white capitalize text-center mt-4'>
              {selectedPokemon.name}
            </h1>
            <p className='text-center text-gray-600 dark:text-gray-300'>
              #{String(selectedPokemon.id).padStart(3, '0')}
            </p>
          </div>

          {/* Estadísticas y detalles */}
          <div className='md:w-1/2 p-8'>
            {pokemonDetails && (
              <>
                {/* Tipos */}
                {/* <div className='mb-6'>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                    Tipos
                  </h2>
                  <div className='flex gap-2'>
                    {pokemonDetails.abilities ?.map((ability) => (
                      <span
                        key={ability.ability.name}
                        className='px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100'
                      >
                        {ability.ability.name}
                      </span>
                    ))}
                  </div>
                </div> */}

                {/* Estadísticas */}
                {/* <div className='mb-6'>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                    Estadísticas
                  </h2>
                  <div className='space-y-2'>
                    {pokemonDetails.stats?.map((stat) => (
                      <div key={stat.stat.name}>
                        <div className='flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1'>
                          <span className='capitalize'>{stat.stat.name}</span>
                          <span>{stat.base_stat}</span>
                        </div>
                        <div className='w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2'>
                          <div
                            className='bg-blue-500 h-2 rounded-full'
                            style={{
                              width: `${(stat.base_stat / 255) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                {/* Habilidades */}
                <div>
                  <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                    Habilidades
                  </h2>
                  <div className='flex flex-wrap gap-2'>
                    {pokemonDetails.abilities?.map((ability) => (
                      <span
                        key={ability.ability.name}
                        className='px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      >
                        {ability.ability.name}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
