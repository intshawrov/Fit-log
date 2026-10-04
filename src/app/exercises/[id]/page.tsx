import { IExercise } from '@/types/exercise-type';
import Image from 'next/image';
import React from 'react';
import { Oswald } from 'next/font/google';
import { FiBookmark, FiCalendar, FiClock } from 'react-icons/fi';
import { FaFire, FaStar } from 'react-icons/fa6';
import AddToBtn from '@/components/exerciseDetails/AddToBtn';
import SaveForLaterBtn from '@/components/exerciseDetails/SaveForLaterBtn';

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});



interface IExerciseDetailsPage {
    params: {
        id: string;
    }
}

const getExerciseDetails = async (
    id: string
): Promise<IExercise> => {
    // const res = await fetch(
    //     `https://api.api-store.workers.dev/api/fitlog/${id}`
    // );
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch exercise details");
    }

    const data = await res.json();

    return data;
};

const ExerciseDetailsPage = async ({
    params,
}: IExerciseDetailsPage) => {
    const { id } = await params;

    const exercise = await getExerciseDetails(id);

    return (
        <main className="min-h-screen bg-[#0c0d10] px-4 py-10 lg:px-6">
            <div className="container mx-auto">
                <div className="border border-[#222630] bg-[#0f1014] p-5 sm:p-8 lg:p-10">

                    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">

                        <div className="overflow-hidden rounded-xl">
                            <Image
                                src={exercise.image}
                                alt={exercise.name}
                                width={700}
                                height={700}
                                className="h-full min-h-[400px] w-full object-cover lg:min-h-[590px]"
                                priority
                            />
                        </div>

                        <div className="flex flex-col">

                            <h1
                                className={`${oswald.className} text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl`}
                            >
                                {exercise.name}
                            </h1>

                            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                                A powerful exercise designed to help you build strength,
                                improve performance, and train your target muscle groups.
                            </p>

                            {/* Muscle Groups */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {exercise.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#c8ff00] px-4 py-1.5 text-xs font-semibold capitalize text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            {/* Information Box */}
                            <div className="mt-6 overflow-hidden rounded-xl border border-[#252933] bg-[#16181f]">

                                {/* Equipment */}
                                <div className="flex items-center justify-between border-b border-[#252933] px-5 py-4">
                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                        Equipment
                                    </span>

                                    <span className="text-sm text-gray-200">
                                        {exercise.equipment}
                                    </span>
                                </div>

                                {/* Duration */}
                                <div className="flex items-center justify-between border-b border-[#252933] px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <FiClock className="text-gray-400" />

                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                            Duration
                                        </span>
                                    </div>

                                    <span className="text-sm text-gray-200">
                                        {exercise.duration} min
                                    </span>
                                </div>

                                {/* Calories */}
                                <div className="flex items-center justify-between border-b border-[#252933] px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <FaFire className="text-gray-400" />

                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                            Calories
                                        </span>
                                    </div>

                                    <span className="text-sm text-gray-200">
                                        {exercise.caloriesBurned} kcal
                                    </span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between px-5 py-4">
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-gray-400" />

                                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                            Rating
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-[#c8ff00]" />

                                        <span className="text-sm text-gray-200">
                                            {exercise.rating}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Muscle Groups */}
                            <div className="mt-7">
                                <h2
                                    className={`${oswald.className} text-xl font-bold uppercase text-white`}
                                >
                                    Target Muscles
                                </h2>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {exercise.muscleGroups.map((muscle) => (
                                        <span
                                            key={muscle}
                                            className="border border-[#30343d] rounded-xl px-3 py-2 text-sm capitalize text-gray-300"
                                        >
                                            {muscle}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            <div className="mt-7">
                                <h2
                                    className={`${oswald.className} text-xl font-bold uppercase tracking-wide text-white`}
                                >
                                    Instructions
                                </h2>

                                <ol className="mt-4 space-y-4">
                                    {exercise.instructions.map(
                                        (instruction, index) => (
                                            <li
                                                key={index}
                                                className="flex gap-3 text-sm leading-6 text-gray-400"
                                            >
                                                <span className="shrink-0 text-gray-500">
                                                    {index + 1}.
                                                </span>

                                                <span>{instruction}</span>
                                            </li>
                                        )
                                    )}
                                </ol>
                            </div>
                            {/* Buttons */}

                            <div className="mt-auto flex flex-wrap gap-3 pt-8">

                                <AddToBtn exercise={exercise} />
                                <SaveForLaterBtn exercise={exercise} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default ExerciseDetailsPage;




