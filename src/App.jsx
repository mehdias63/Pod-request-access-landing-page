import React from "react";
import EmailForm from "./components/Emailform";

function App() {
  return (
    <main className="bg-[url(/images/mobile/image-host.jpg)] bg-no-repeat bg-cover sm:bg-none min-h-screen bg-blend-multiply bg-black flex flex-col items-center px-6 py-14 font-chivo sm:p-0">
      <div className="sm:flex sm:items-start sm:gap-10">
        <img src="/images/desktop/logo.svg" className="sm:pl-8 sm:pt-12" />
        <div className="sm:bg-[url(/images/tablet/image-host.jpg)] lg:bg-[url(/images/desktop/image-host.jpg)] bg-no-repeat bg-cover hidden sm:block h-[30rem] w-[32rem] sm">
          1
        </div>
      </div>
      <header className="flex flex-col justify-center items-center mt-12 sm:w-[35rem] sm:h-[32rem] sm:bg-black sm:mt-[-15rem] lg:w-[45rem] md:mr-[10rem] lg:mr-[20rem] sm:items-start sm:p-4">
        <h1 className="text-light-green uppercase text-[1.625rem] md:text-[3rem] lg:text-[3.25rem] font-light leading-[2.375rem] md:leading-[3.5rem] lg:leading-[3.875rem] text-center sm:text-left">
          Publish your podcasts
          <br /> <span className="text-white">everywhere.</span>
        </h1>
        <p className="text-light-gray text-[0.9375rem] md:text-lg font-light leading-[1.5625rem] md:leading-[1.75rem] my-4 mx-12 sm:mx-0 sm:pr-[13rem] text-center sm:text-left">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
        <section className="flex gap-3 my-8 sm:order-1 lg:gap-14">
          <img src="/images/desktop/spotify.svg" />
          <img src="/images/desktop/apple-podcast.svg" />
          <img src="/images/desktop/google-podcasts.svg" />
          <img src="/images/desktop/pocket-casts.svg" />
        </section>
        <div className="w-full sm:w-auto">
          <EmailForm />
        </div>
      </header>
    </main>
  );
}

export default App;
