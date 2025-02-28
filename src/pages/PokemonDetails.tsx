import React, { useEffect, useState } from 'react';
import usePokemonStore from 'host/pokemonStore';
import pokemonServices from 'host/pokemonServices';
import { PokemonDetails as IPokemonDetails } from '../interface/pokemon.interface';
import { FaArrowLeft } from 'react-icons/fa';
import {
  BasicInformation,
  PhysicalCharacteristics,
  Skills,
} from '../components';

const PokemonDetails: React.FC = () => {
  const { selectedPokemon, setListSelectedPokemon } = usePokemonStore();
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
            setListSelectedPokemon(details);
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

  const handleGoBack = () => {
    window.history.pushState({}, '', '/pokemons');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

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
      <div className='max-w-4xl mx-auto mb-4'>
        <button
          onClick={handleGoBack}
          className='flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors'
        >
          <FaArrowLeft />
          <span>Volver</span>
        </button>
      </div>

      <div className='max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'>
        <div className='md:flex'>
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

          <div className='md:w-1/2 p-8'>
            {pokemonDetails && (
              <>
                <BasicInformation pokemonDetails={pokemonDetails} />

                <hr className='border-t border-gray-200 dark:border-gray-700 my-6 mt-6' />

                <PhysicalCharacteristics pokemonDetails={pokemonDetails} />

                <hr className='border-t border-gray-200 dark:border-gray-700 my-6 mt-6' />

                <Skills pokemonDetails={pokemonDetails} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
