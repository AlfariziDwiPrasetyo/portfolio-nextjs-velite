import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Button } from "./ui/button";
import Link from "next/link";

function AboutMe() {
  return (
    <div className="space-y-5 animated-element pattern-bg">
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight">
        Alfarizi Dwi Prasetyo
      </h1>
      <h2 className="text-xl md:text-2xl tracking-tighter font-semibold">
        Web Developer
      </h2>
      <p className="tracking-tight text-md md:text-lg">
        Hi there, I'm Tiyo a college student with a growing passion for
        programming, coffee, and music. As a dedicated Manchester United fan, I
        appreciate loyalty and perseverance, both on and off the field. As I
        develop my programming skills, I love exploring innovative solutions and
        staying current in the ever-evolving tech industry. Eager to learn and
        grow, I infuse{" "}
        <Link href={"/work"}>
          <span className="underline font-bold decoration-sky-500">
            my work
          </span>
        </Link>{" "}
        with a unique blend of creativity, technical knowledge.
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
    </div>
  );
}

export default AboutMe;
