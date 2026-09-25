import React from 'react';
import Image from 'next/image';
import { FiClock, FiStar } from 'react-icons/fi';
import { FaFire } from 'react-icons/fa6';
import { Oswald } from 'next/font/google';
import { IExercise } from '@/types/exercise-type';

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

interface IExerciseProps{
    exercise:IExercise;
}

const Excercises = ({exercise}: IExerciseProps) => {
    return (
        <div>
            <div
                
                className="flex flex-col overflow-hidden rounded-2xl border border-[#23272f] bg-[#16181d] shadow-lg transition-all duration-300 hover:border-gray-700"
            >
                <div className="relative h-48 w-full bg-gray-800">
                    <Image
                        src={exercise.image}
                        alt={exercise.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                </div>

                <div className="flex grow flex-col justify-between p-5">
                    <div>
                        <div className="mb-3 flex flex-wrap gap-2">
                            {exercise.muscleGroups?.map((muscle: string, idx: number) => (
                                <span
                                    key={idx}
                                    className="rounded-[999px] bg-[#ccff00] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-black"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        <h3 className={`${oswald.className} mb-1 line-clamp-1 text-lg font-black uppercase tracking-wide text-white`}>
                            {exercise.name}
                        </h3>

                        <p className="mb-6 text-xs text-gray-400">
                            {exercise.equipment}
                        </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-[#23272f] pt-3 text-xs font-semibold text-gray-400">
                        <div className="flex items-center space-x-1.5">
                            <FiClock className="h-4 w-4 text-gray-400" />
                            <span>{exercise.duration} min</span>
                        </div>

                        <div className="flex items-center space-x-1.5">
                            <FaFire className="h-4 w-4 text-gray-400" />
                            <span>{exercise.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center space-x-1.5">
                            <FiStar className="h-4 w-4 text-gray-400" />
                            <span>{exercise.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Excercises;