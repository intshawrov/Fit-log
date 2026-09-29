// "use client";

// import {
//   createContext,
//   useState,
//   type ReactNode,
//   type Dispatch,
//   type SetStateAction,
// } from "react";

// import { IExercise } from "@/types/exercise-type";

// type ExerciseContextType = {
//   addToExercise: IExercise[];
//   setAddToExercise: Dispatch<SetStateAction<IExercise[]>>;
// };

// const ExerciseContext = createContext<ExerciseContextType | undefined>(
//   undefined
// );

// export const ExerciseProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   const [addToExercise, setAddToExercise] = useState<IExercise[]>([]);

//   return (
//     <ExerciseContext.Provider
//       value={{
//         addToExercise,
//         setAddToExercise,
//       }}
//     >
//       {children}
//     </ExerciseContext.Provider>
//   );
// };

// export default ExerciseContext;


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

  return (
    <ExerciseContext.Provider
      value={{
        addToExercise,
        setAddToExercise,
        saveToExercise,
        setSaveToExercise
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContext;