import { ExerciseProps } from "@/types";
import { getExercises } from "@/utils";
import Link from "next/link";

const ExercisePage = async () => {
  const exercises = await getExercises();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Exercises</h1>
      {exercises.map((exercise: ExerciseProps) => (
        <Link href={`/exercises/${exercise.name}`}>
          <p key={exercise.name}>{exercise.name}</p>
        </Link>
      ))}
    </main>
  );
};

export default ExercisePage;
