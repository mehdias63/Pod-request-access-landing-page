import React from "react";
import EmailForm from "./components/Emailform";

function App() {
  return (
    <main className="bg-[url(/images/mobile/image-host.jpg)] bg-no-repeat bg-cover sm:bg-none min-h-screen bg-blend-multiply bg-black flex flex-col items-center px-6 py-14 font-chivo">
      <div>
        <img src="/images/desktop/logo.svg" />
      </div>
      <header className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-light-green uppercase text-[1.625rem] md:text-[3rem] lg:text-[3.25rem] font-light leading-[2.375rem] md:leading-[3.5rem] lg:leading-[3.875rem] text-center sm:text-left">
          Publish your podcasts
          <br /> <span className="text-white">everywhere.</span>
        </h1>
        <p className="text-light-gray text-[0.9375rem] md:text-lg font-light leading-[1.5625rem] md:leading-[1.75rem] my-4 mx-12 text-center sm:text-left">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </header>
      <section className="flex gap-3 my-8">
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
