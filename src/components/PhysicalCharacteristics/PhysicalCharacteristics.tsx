import { PhysicalCharacteristicsProps } from './interdace';

export const PhysicalCharacteristics = ({
  pokemonDetails,
}: PhysicalCharacteristicsProps) => {
  return (
    <div className='flex flex-col gap-4 mb-3'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
        Caracteristicas fisicas
      </h2>
      <div className='flex flex-col gap-4'>
        <h5 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
          Altura
        </h5>
        <p className='text-gray-600 dark:text-gray-300'>
          {pokemonDetails.height / 10} m
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
          Peso
        </h2>
        <p className='text-gray-600 dark:text-gray-300'>
          {pokemonDetails.weight / 10} kg
        </p>
      </div>
    </div>
  );
};
