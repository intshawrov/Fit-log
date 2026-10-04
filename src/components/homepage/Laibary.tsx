import React from 'react';
import Exercise from '../shared/ExerciseCard';
import { IExercise } from '@/types/exercise-type';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});


const getExerciseLaibary = async (): Promise<IExercise[]> => {
    // const res = await fetch('https://api.api-store.workers.dev/api/fitlog');
    const res = await fetch(
  process.env.NEXT_PUBLIC_API_URL!
);
    const data = await res.json();
    return data;
};

const Laibary = async () => {
    const exerciseData = await getExerciseLaibary();

    return (
        <section className="container mx-auto py-16">
            <h2 className={`${oswald.className} text-white text-[24px] sm:text-[28px] lg:text-[30px] font-bold uppercase tracking-tight leading-tight mb-2 max-w-2xl`}>THE LIBRARY</h2>
            <p className='text-[#9CA3AF] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl'>Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {exerciseData.map((exercise:IExercise) => (
                    <Exercise key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </section>
    );
};

export default Laibary;