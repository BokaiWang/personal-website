import React from "react";

const Home = () => {
  return (
    <section id="home" className="mx-auto w-full sm:w-3/5">
      <h1 className="text-6xl mt-6 mb-12">Welcome to my playground!</h1>
      <article>
        <p className="text-3xl leading-loose">
          Hello, fellow coders and curious minds! I'm{" "}
          <span className="font-bold italic">Bo-Kai Wang</span>, a{" "}
          <span className="font-bold italic">frontend developer</span> fueled by
          a passion for turning lines of code into captivating user experiences
          and specializing in React. I enjoy building websites and web apps.
        </p>
      </article>
    </section>
  );
};

export default Home;
