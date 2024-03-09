import React from "react";
import EmailForm from "./components/Emailform";

function App() {
  return (
    <main className="bg-[url(/images/mobile/image-host.jpg)] bg-no-repeat bg-cover min-h-screen bg-blend-multiply bg-black flex flex-col items-center px-6 py-14">
      <div>
        <img src="/images/desktop/logo.svg" />
      </div>
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-light-green">
          Publish your podcasts <span className="text-white">everywhere.</span>
        </h1>
        <p className="text-light-gray">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </header>
      <section className="flex gap-6">
        <img src="/images/desktop/spotify.svg" />
        <img src="/images/desktop/apple-podcast.svg" />
        <img src="/images/desktop/google-podcasts.svg" />
        <img src="/images/desktop/pocket-casts.svg" />
      </section>
      <div className="w-full sm:w-auto">
        <EmailForm />
      </div>
    </main>
  );
}

export default App;
