import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Me from "../assets/me.png";
import NavIcons from "../components/NavIcons";
import Sun from "../components/Sun";
import Nigth from "../components/Nigth";

export default function Home() {
  const [isDark, setIsDark] = useState();

  function changeTheme(event) {
    event.preventDefault();
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("ligth");
      document.documentElement.classList.remove("dark");
      localStorage.theme = "ligth";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("ligth");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  }

  useEffect(() => {
    (() => {
      console.log(localStorage.theme);
      if (!localStorage.theme) {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        setIsDark(true);
      }
      console.log(localStorage.theme);

      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>
          Jose Luiz Rodrigues | I teach people web development through video
          tutorials and in my school www.inmmerce.com
        </title>
        <meta
          name="description"
          content="Hi, I`m Jose! I teach people web development through video tutorials and in my school www.inmmerce.com"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container max-w-4xl">
        <nav className="flex justify-between items-center mb-40 pt-8">
          <Link href="/">
            <a className=" dark:text-yellow-950 text-blue-950 text-4xl">
              Jose Luiz Rodrigues
            </a>
          </Link>
          <div className="flex justify-between items-center dark:text-white text-black">
            <Link href="https://inmmerce.academy">
              <a target="_blank" className="px-4 text-lg">
                School
              </a>
            </Link>
            <Link href="https://www.youtube.com/zeluizr">
              <a target="_blank" className="px-4 text-lg">
                Videos
              </a>
            </Link>
            <button
              className="px-4 cursor-pointer dark:text-white text-blue-950"
              onClick={changeTheme}
            >
              {isDark ? <Sun /> : <Nigth />}
            </button>
          </div>
        </nav>
        <div className="flex justify-between items-center border-8 dark:border-yellow-950 border-blue-950 rounded-xl">
          <div className="flex">
            <Image src={Me} alt="Me" className="" width={380} height={380} />
          </div>
          <div className="flex-1">
            <h1 className="font-medium text-7xl text-white mb-5">
              Hi, i`m{" "}
              <span className="dark:text-yellow-950 text-blue-950">Jose</span> !
            </h1>
            <p className="font-normal text-2xl dark:text-white text-blue-950 mb-10">
              I teach people web development through{" "}
              <Link href="https://www.youtube.com/zeluizr">
                <a target="_blank" className="dark:text-yellow-950 text-white">
                  video tutorials
                </a>
              </Link>{" "}
              and in my school{" "}
              <Link href="https://inmmerce.academy">
                <a target="_blank" className="dark:text-yellow-950 text-white">
                  inmmerce
                </a>
              </Link>
            </p>
            <NavIcons />
          </div>
        </div>
      </div>
    </>
  );
}
