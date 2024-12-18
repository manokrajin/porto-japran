"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { GlareCard } from "@/components/ui/glare-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/moving-border";
import { GithubGlobe } from "./components/github_globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { BentoGridSecondDemo } from "./components/bento_grid";

export default function Home() {
  const [headerVisible, setHeaderVisible] = useState(true);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // e.preventDefault();
    // document
    //   .getElementById("first-section")
    //   ?.scrollIntoView({ behavior: "smooth" });

    setHeaderVisible(false);
  };

  const header = (
    <div className="rounded-md h-screen flex flex-col items-center justify-center relative w-full text-white">
      <h2 className="relative flex-col md:flex-row z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8 animate-slide-up">
        <TextGenerateEffect
          words="Hi, I'm Zhafran, a deep learning enthusiast"
          className=""
        />
      </h2>
      <ShootingStars />
      <StarsBackground />

      <div className="my-2">
        <a href="#first-section" className="" onClick={handleButtonClick}>
          <Button>Click to know me</Button>
        </a>
      </div>
      {/* <div className="mt-5 h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

    
        <div className="absolute inset-0 w-full h-full bg-slate-950 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
    </div>
  );

  const firstSection = (
    <div
      id="first-section"
      className="w-full flex items-center flex-col h-max"
    >
      <div
        id="title"
        className="text-xl w-3/4 flex text-center justify-center mt-16  flex-col "
      >
        <span>
          Hi, I'm Zhafran Ramadhan, a passionate Machine Learning enthusiast
          based in Indonesia. I thrive on exploring innovative AI solutions and
          bringing data-driven ideas to life. With a keen interest in
          cutting-edge technologies, I aim to contribute to impactful projects
          and the growth of the AI community.
        </span>
        <div className="m-5">
          <BentoGridSecondDemo />
        </div>
      </div>
    </div>
  );

  const secondSection = (
    <div className="w-full flex flex-col">
      <span className="text-3xl text-center">Projects</span>
      <div className="flex">
        <HoverBorderGradient
          containerClassName="rounded-full "
          as="button"
          className="w-1/2"
        >
          <div>
            <img
              src="https://i.ibb.co.com/tm6M77n/japran.jpg"
              alt=""
              className="w-1/2"
            />
            <div className="text-center">
              <h2 className="text-2xl">Project Title</h2>
              <p className="text-lg">Project Description</p>
            </div>
          </div>
        </HoverBorderGradient>
      </div>
    </div>
  );

  return (
    <div>
      <div className="bg-slate-950 w-full text-white">
        {headerVisible && header}
        {firstSection}
        {secondSection}
      </div>
    </div>
  );
}
