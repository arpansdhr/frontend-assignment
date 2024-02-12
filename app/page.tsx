import RandomCatsClient from "./components/RandomCatsClient";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to our Cat Gallery!</h1>
      <RandomCatsClient />
      <p className="text-lg text-center">Discover cute and random cat images every time you visit.</p>
    </main>
  );
}
