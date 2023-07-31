export const getExercises = async () => {
  const url =
    "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.EXERCISE_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch exercises");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getExercise = async (name: string) => {
  const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?name=${name}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.EXERCISE_RAPID_API_KEY || "",
      "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Failed to fetch exercise");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
