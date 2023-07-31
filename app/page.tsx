import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home</h1>
      <Link href={"/exercises"}>Go to Exercise Page</Link>
    </main>
  );
};

export default Home;
