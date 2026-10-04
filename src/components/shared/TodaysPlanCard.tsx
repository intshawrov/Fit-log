"use client";
import { IExercise } from '@/types/exercise-type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { BiStar, BiX } from 'react-icons/bi';
import { FaCheck, FaClock } from 'react-icons/fa6';
import { GiFlame } from 'react-icons/gi';
import ExerciseContext from '../context/ExerciseContext';
import { toast } from 'react-toastify';

interface ITodaysPlanCardProps {
  exercise: IExercise;
   index: number;
}

const TodaysPlanCard = ({ exercise , index }: ITodaysPlanCardProps) => {

  const context = useContext(ExerciseContext);

  const handleRemove = () => {
    context?.removeFromExercise(index);
    toast.success(`${exercise.name} removed successfully!`);
  };

  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-[#111319] border border-gray-800/80 rounded-2xl mb-3 text-white gap-4 sm:gap-0"
    >
      <div className="flex items-center gap-4">
        <Image
          src={exercise.image}
          alt={exercise.name}
          width={96}
          height={64}
          className="w-20 h-16 sm:w-24 sm:h-16 object-cover rounded-xl shrink-0"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-extrabold text-sm sm:text-base tracking-wide uppercase text-white truncate">
            {exercise.name}
          </h3>
          <p className="text-xs text-gray-400 font-medium">
            {exercise.equipment}
          </p>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-medium text-gray-300 mt-1">
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

      <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto pt-2 sm:pt-0 border-t border-gray-800/60 sm:border-t-0">

        <Link href={`/exercises/${exercise.id}`}>
          <button
            className="px-4 py-2 border border-gray-700/80 rounded-full text-xs font-semibold cursor-pointer text-gray-200 hover:bg-gray-800/50 transition"
          >
            View Details
          </button>

        </Link>

        <button
          type="button"
           onClick={handleRemove}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs rounded-full transition cursor-pointer"
        >
          <FaCheck className="w-4 h-4 stroke-[3]" />
          Mark as Done
        </button>

        <button
          type="button"
          onClick={handleRemove}
          className="p-1 text-gray-500 hover:text-gray-300 transition ml-1 cursor-pointer"
          aria-label="Remove"
        >
          <BiX className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TodaysPlanCard;