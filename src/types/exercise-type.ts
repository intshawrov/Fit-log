
export interface IExercise {
  id:  number;
  image: string;
  name: string;
  equipment: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  muscleGroups: string[];
}