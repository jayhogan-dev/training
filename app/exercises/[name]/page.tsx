import { getExercise } from "@/utils";

const ExercisePage = async ({ params: { name } }: any) => {
  const exerciseData = await getExercise(name);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <>
        <h2>{exerciseData[0].name}</h2>
        <p>{exerciseData[0].type}</p>
      </>
    </main>
  );
};

export default ExercisePage;
