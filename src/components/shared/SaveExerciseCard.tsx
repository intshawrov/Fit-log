
import { IExercise } from '@/types/exercise-type';
import Image from 'next/image';
import React from 'react';
import { BiStar, BiX } from 'react-icons/bi';
import { FaClock } from 'react-icons/fa6';
import { GiFlame } from 'react-icons/gi';

interface ISaveExerciseCArdProps{
    exercise: IExercise;
}

const SaveExerciseCard = ({exercise}: ISaveExerciseCArdProps) => {
    return (
        <div
  key={exercise.id}
  className="flex items-center justify-between p-4 bg-[#111319] border border-gray-800/80 rounded-2xl mb-3 text-white"
>
  {/* Bam pasher image ebong info */}
  <div className="flex items-center gap-4">
    <Image
      src={exercise.image}
      alt={exercise.name}
      width={96}
      height={64}
      className="w-24 h-16 object-cover rounded-xl"
    />
    <div className="flex flex-col gap-1">
      <h3 className="font-extrabold text-base tracking-wide uppercase text-white">
        {exercise.name}
      </h3>
      <p className="text-xs text-gray-400 font-medium">
        {exercise.equipment}
      </p>

      {/* Time, Calorie & Rating row */}
      <div className="flex items-center gap-3 text-xs font-medium text-gray-300 mt-1">
        <div className="flex items-center gap-1.5 text-[#ccff00]">
          <FaClock className="w-3.5 h-3.5 stroke-[2.5]" />
          <span className="text-gray-300">{exercise.duration} min</span>
        </div>

        <div className="flex items-center gap-1.5 text-[#ccff00]">
          <GiFlame className="w-3.5 h-3.5 fill-[#ccff00] stroke-none" />
          <span className="text-gray-300">{exercise.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5 text-[#ccff00]">
          <BiStar className="w-3.5 h-3.5 fill-[#ccff00] stroke-none" />
          <span className="text-gray-300">{exercise.rating}</span>
        </div>
      </div>
    </div>
  </div>

  {/* Dan pasher Action Buttons (Image onusare shudhu View Details & X icon) */}
  <div className="flex items-center gap-3">
    <button
      type="button"
      onClick={() => {
        /* View details handler */
      }}
      className="px-5 py-2 border border-gray-700/80 rounded-full text-xs font-semibold text-gray-200 hover:bg-gray-800/50 transition"
    >
      View Details
    </button>

    <button
      type="button"
      onClick={() => {
        /* Remove handler */
      }}
      className="p-1 text-gray-500 hover:text-gray-300 transition"
      aria-label="Remove"
    >
      <BiX className="w-4 h-4" />
    </button>
  </div>
</div>
    );
};

export default SaveExerciseCard;