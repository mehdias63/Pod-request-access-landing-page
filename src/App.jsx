import React from "react";
import EmailForm from "./components/Emailform";

function App() {
  return (
    <div className="bg-[url(/images/mobile/image-host.jpg)] bg-no-repeat bg-cover sm:bg-none h-[55rem] lg:h-[50rem] min-h-screen bg-blend-multiply bg-black flex flex-col items-center px-6 py-14 font-chivo sm:p-0 max-w-[90rem] mx-auto relative">
      <header className="sm:flex sm:items-start sm:gap-10 md:gap-[12rem] lg:gap-[10rem]">
        <img
          src="/images/desktop/logo.svg"
          className="sm:pl-8 sm:pt-12 md:ml-12 lg:ml-36"
          alt="logo"
        />
        <div className="sm:bg-[url(/images/tablet/image-host.jpg)] lg:bg-[url(/images/desktop/image-host.jpg)] bg-no-repeat bg-cover hidden sm:block h-[30rem] w-[32rem] lg:ml-auto xl:ml-24 lg:w-[55rem] lg:h-[40rem] z-10"></div>
      </header>
      <main className="absolute flex flex-col justify-center p-6 items-center sm:items-start sm:mt-12 sm:w-[35rem] md:w-[40rem] lg:w-[45rem] sm:h-[32rem] sm:bg-black left-4 sm:top-[10rem] lg:top-[8rem] z-20 h-full">
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
          <img src="/images/desktop/spotify.svg" alt="spotify" />
          <img src="/images/desktop/apple-podcast.svg" alt="apple-podcast" />
          <img
            src="/images/desktop/google-podcasts.svg"
            alt="google-podcasts"
          />
          <img src="/images/desktop/pocket-casts.svg" alt="pocket-casts" />
        </section>
        <div className="w-full sm:w-auto">
          <EmailForm />
        </div>
      </main>
      <footer className="absolute bottom-0 left-4 md:right-auto order-last ml-8 hidden self-start sm:block lg:-bottom-[3rem] lg:left-auto lg:right-0 lg:top-[36rem] z-30">
        <img src="/images/desktop/bg-pattern-dots.svg" alt="pattern" />
      </footer>
    </div>
  );
}

export default App;
