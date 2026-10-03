"use client";

import { Oswald } from "next/font/google";
import React, { useContext, useState } from "react";

import ExerciseContext from "@/components/context/ExerciseContext";
import TodaysPlanCard from "@/components/shared/TodaysPlanCard";
import SaveExerciseCard from "@/components/shared/SaveExerciseCard";
import { IExercise } from "@/types/exercise-type";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const MyPlanPage = () => {
  const context = useContext(ExerciseContext);

  if (!context) {
    return null;
  }

  const { addToExercise, saveToExercise } = context;

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const currentList: IExercise[] = activeTab === "today" ? addToExercise : saveToExercise;

  const totalExercises = currentList?.length || 0;

      const totalMinutes = currentList.reduce(
        (total, item) => total + item.duration,
        0
      );

      const totalCalories = currentList.reduce(
        (total, item) => total + item.caloriesBurned,
        0
      );

  return (
    <div className="container mx-auto py-12">
      <h1
        className={`${oswald.className} text-white text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight mb-4 max-w-2xl`}
      >
        My Plan
      </h1>

      <p className="text-slate-300 mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="bg-[#121622] border border-slate-800/80 rounded-2xl p-6 mb-8 grid grid-cols-3 divide-x divide-slate-800/80">

        <div className="flex flex-col gap-2 px-2 sm:px-6">
          <span className="text-slate-400 text-xs sm:text-sm font-medium">
            Exercises
          </span>
          <span className={`${oswald.className} text-lime-400 text-3xl sm:text-5xl font-bold`}>
            {totalExercises}
          </span>
        </div>

        <div className="flex flex-col gap-2 px-4 sm:px-8">
          <span className="text-slate-400 text-xs sm:text-sm font-medium">
            Minutes
          </span>
          <span className={`${oswald.className} text-white text-3xl sm:text-5xl font-bold`}>
            {totalMinutes}
          </span>
        </div>

        <div className="flex flex-col gap-2 px-4 sm:px-8">
          <span className="text-slate-400 text-xs sm:text-sm font-medium">
            Calories
          </span>
          <span className={`${oswald.className} text-white text-3xl sm:text-5xl font-bold`}>
            {totalCalories}
          </span>
        </div>

      </div>

      <div className="flex my-6">
        <div className="bg-[#181d28] p-1.5 rounded-2xl flex items-center gap-1 border border-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 border ${activeTab === "today"
              ? "bg-[#202838] text-white font-bold shadow-md border-slate-700/60"
              : "text-slate-400 border-transparent"
              }`}
          >
            Today's Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 border ${activeTab === "saved"
              ? "bg-[#202838] text-white font-bold shadow-md border-slate-700/60"
              : "text-slate-400 border-transparent"
              }`}
          >
            Saved
          </button>
        </div>
      </div>

      {activeTab === "today" && (
        <div className="border-base-300 bg-base-100 p-10 space-y-5 rounded-xl">
          {addToExercise?.length > 0 ? (
            addToExercise.map((exercise: IExercise) => (
              <TodaysPlanCard key={exercise.exerciseId} exercise={exercise} />
            ))
          ) : (
            <p className="text-white text-xl font-semibold text-center">
              No Exercise Details
            </p>
          )}
        </div>
      )}

      {activeTab === "saved" && (
        <div className="border-base-300 bg-base-100 p-10 space-y-5 rounded-xl">
          {saveToExercise?.length > 0 ? (
            saveToExercise.map((exercise: IExercise) => (
              <SaveExerciseCard key={exercise.exerciseId} exercise={exercise} />
            ))
          ) : (
            <p className="text-white text-xl font-semibold text-center">
              No Saved Exercise Details
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;