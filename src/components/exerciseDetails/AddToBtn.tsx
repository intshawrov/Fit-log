"use client";

import { IExercise } from "@/types/exercise-type";
import { useContext } from "react";
import ExerciseContext from "../context/ExerciseContext";
import { FiCalendar } from "react-icons/fi";
import { toast } from "react-toastify";

const AddToBtn = ({ exercise }: { exercise: IExercise }) => {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error("AddToBtn must be used inside ExerciseProvider");
  }

  const { addToExercise, setAddToExercise } = context;

  const handleAddToExercise = () => {
    console.log("Add exercise trigger btn:", exercise);

    setAddToExercise((prev) => [...prev, exercise]);

    toast.success(`You have added ${exercise.name}`);
  };

  return (
    <button
      type="button"
      onClick={handleAddToExercise}
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#c8ff00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#b8ed00]"
    >
      <FiCalendar />
      Add to today's plan
    </button>
  );
};

export default AddToBtn;