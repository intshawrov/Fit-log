"use client";

import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

import { IExercise } from "@/types/exercise-type";


type ExerciseContextType = {
  addToExercise: IExercise[];
  setAddToExercise: Dispatch<SetStateAction<IExercise[]>>;
  saveToExercise: IExercise[];
  setSaveToExercise: Dispatch<SetStateAction<IExercise[]>>;
  removeFromExercise: (id: number) => void;
  // removeFromSavedExercise: (id: number)=> void;
};

const ExerciseContext = createContext<ExerciseContextType | undefined>(
  undefined
);

export const ExerciseProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [addToExercise, setAddToExercise] = useState<IExercise[]>([]);
  const [saveToExercise, setSaveToExercise] = useState<IExercise[]>([]);
  const removeFromExercise = (index: number) => {
    setAddToExercise((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };
// const removeFromSavedExercise = (id: number) => {
//     setSaveToExercise((prev) => prev.filter((item) => item.id !== id));
//   };


  return (
    <ExerciseContext.Provider
      value={{
        addToExercise,
        setAddToExercise,
        saveToExercise,
        setSaveToExercise,
        removeFromExercise,
        // removeFromSavedExercise
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContext;