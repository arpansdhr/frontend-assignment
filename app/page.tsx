import RandomCatsClient from "./components/RandomCatsClient";

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to our Cat Gallery!</h1>
      <RandomCatsClient />
      <p className="text-lg text-center">Discover cute and random cat images every time you visit.</p>
      <footer className="text-center text-black py-1 bg-white">Made with &#10084; by Arpan Sutradhar</footer>
    </main>
  );
}
