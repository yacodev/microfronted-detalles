import { SkillsProps } from './interface';

export const Skills = ({ pokemonDetails }: SkillsProps) => {
  return (
    <div className='mt-6 flex flex-col gap-4'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
        Habilidades
      </h2>
      <div className='flex flex-col gap-4 mt-4'>
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
  );
};
