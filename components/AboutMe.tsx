import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";
import SkillsSection from "./SkillsSection";

function AboutMe() {
  return (
    <article className="animated-element container py-6 prose dark:prose-invert max-w-2xl mx-auto">
      <h1 className="font-semibold text-3xl md:text-4xl tracking-tight">
        Hi, I'm Alfarizi Dwi Prasetyo 👋
      </h1>

      <p className="tracking-tight text-md md:text-lg">
        I'm junior software engineer from indonesia.
      </p>
      <p className="tracking-tight text-md md:text-lg">
        Lost in melodies 🎵 with a cup of coffee ☕ is my routine activity.
      </p>
      <p className="tracking-tight text-md md:text-lg">
        I also love to watch anime or TV series in the middle of the night 🌙.
        (if there is no{" "}
        <span className="text-pink-700 font-medium">Manchester United</span>{" "}
        match)
      </p>
      <p className="tracking-tight text-md md:text-lg">
        <span className="font-bold text-pink-700">#GGMU</span>
      </p>

      <div className="flex space-x-2">
        <Link
          aria-label="my facebook link"
          href={"https://www.facebook.com/shirookam/"}
        >
          <Button aria-label="facebook button" variant={"ghost"}>
            <FaFacebookF size={20} />
          </Button>
        </Link>
        <Link
          aria-label="my instagram link"
          href={"https://www.instagram.com/alfariziiprasetyo/"}
        >
          <Button aria-label="instagram button" variant={"ghost"}>
            <FaInstagram size={20} />
          </Button>
        </Link>
        <Link
          aria-label="my linkedin link"
          href={"https://www.linkedin.com/in/al-farizi-dwi-prasetyo-29a310197/"}
        >
          <Button aria-label="linkedin button" variant={"ghost"}>
            <FaLinkedinIn size={20} />
          </Button>
        </Link>
        <Link
          aria-label="my github link"
          href={"https://github.com/AlfariziDwiPrasetyo"}
        >
          <Button aria-label="github button" variant={"ghost"}>
            <FaGithub size={20} />
          </Button>
        </Link>
      </div>

      <SkillsSection />
    </article>
  );
}

export default AboutMe;
