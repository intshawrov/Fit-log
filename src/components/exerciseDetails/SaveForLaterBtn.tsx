"use client";

import { IExercise } from "@/types/exercise-type";
import { useContext } from "react";
import ExerciseContext from "../context/ExerciseContext";
import { FiBookmark } from "react-icons/fi";
import { toast } from "react-toastify";

const SaveForLaterBtn = ({ exercise }: { exercise: IExercise }) => {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error("SaveForLaterBtn must be used inside ExerciseProvider");
  }

  const { saveToExercise, setSaveToExercise } = context;

  const handleSaveToExercise = () => {
    console.log("Save exercise trigger btn:", exercise);

    setSaveToExercise((prev) => [...prev, exercise]);

    toast.success(`You have saved ${exercise.name}`);
  };

  return (
    <button
      type="button"
      onClick={handleSaveToExercise}
      className="flex items-center gap-2 rounded-lg border border-[#374151] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b8ed00] hover:text-black cursor-pointer"
    >
      <FiBookmark />
      Save for later
    </button>
  );
};

export default SaveForLaterBtn;