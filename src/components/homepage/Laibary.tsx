import React from 'react';
import Exercise from '../shared/Exercises';
import { IExercise } from '@/types/exercise-type';


const getExerciseLaibary = async (): Promise<IExercise[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const data = await res.json();
    return data;
};

const Laibary = async () => {
    const exerciseData = await getExerciseLaibary();

    return (
        <section className="container mx-auto py-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {exerciseData.map((exercise:IExercise) => (
                    <Exercise key={exercise.id} exercise={exercise} />
                ))}
            </div>
        </section>
    );
};

export default Laibary;