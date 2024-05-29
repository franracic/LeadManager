import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import About from "./About";
import HeroHeader from "./HeroHeader";
import Masonry from "./Masonry";
import Navs from "./Navs";
import Offer from "./Offer";
import Popup from "./Popup";
import Portfoliosec from "./Portfoliosec";
import Team from "./Team";

export default function Hero() {
  return (
    <div className="py-0 relative z-20 w-full">
      <HeroHeader />
      <div
        className="w-full overflow-hidden"
        style={{
          boxSizing: "border-box",
          background: "#131316",
          minHeight: "100vh",
        }}
      >
        <img
          src="https://project-parallax.com/media/pages/p/nature/35b0ba333b-1693580969/nature-placeholder.jpg"
          className="absolute hidden h-full"
        />
        <Parallax pages={4}>
          <ParallaxLayer speed={0.7}>
            <img
              src="https://project-parallax.com/media/pages/p/nature/f76eb546bb-1693580969/nature-6.png"
              className="h-full w-full object-cover"
            />
          </ParallaxLayer>
          <ParallaxLayer speed={0.8}>
            <img
              src="https://project-parallax.com/media/pages/p/nature/e38e16809e-1693580968/nature-5.png"
              className="h-full w-full object-cover"
            />
          </ParallaxLayer>
          <ParallaxLayer speed={0.9}>
            <img
              src="https://project-parallax.com/media/pages/p/nature/5d330385b5-1693580965/nature-4.png"
              className="h-full w-full object-cover"
            />
          </ParallaxLayer>
          <ParallaxLayer speed={1.1}>
            <img
              src="https://project-parallax.com/media/pages/p/nature/7d31b3e1db-1693580968/nature-3.png"
              className="h-full w-full object-cover"
            />
          </ParallaxLayer>
          <ParallaxLayer
            speed={-0.3}
            className="inset-1/4 flex items-center justify-center"
          >
            <div className="text-center sm:text-9xl text-6xl">
              <h1
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
                style={{ font: "700 1em/.9 Freigeist Con" }}
              >
                We specialize in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 p-4">
                  supercharging
                </span>
                <br />
                your online presence
              </h1>
              <p
                className="mt-6 text-lg leading-8 text-gray-300"
                style={{ font: "700 0.3em/.9 Freigeist Con" }}
              >
                Well thought out, down to the smallest detail
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#/project"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={1.2}>
            <img
              src="https://project-parallax.com/media/pages/p/nature/0141bdea0e-1693580954/nature-2.png"
              className="h-full w-full object-cover"
            />
          </ParallaxLayer>
          <ParallaxLayer speed={1.3}>
            <img
              src="https://project-parallax.com/media/pages/p/nature/c5c219b2d8-1693580953/nature-1.png"
              className="h-full w-full object-cover"
            />
          </ParallaxLayer>
          <ParallaxLayer
            speed={1}
            style={{
              background: `linear-gradient(to top,
                rgba(19, 19, 22, 1) 0%,
                rgba(19, 19, 22, 0.738) 19%,
                rgba(19, 19, 22, 0.541) 34%,
                rgba(19, 19, 22, 0.382) 47%,
                rgba(19, 19, 22, 0.278) 56.5%,
                rgba(19, 19, 22, 0.194) 65%,
                rgba(19, 19, 22, 0.126) 73%,
                rgba(19, 19, 22, 0.075) 80.2%,
                rgba(19, 19, 22, 0.042) 86.1%,
                rgba(19, 19, 22, 0.021) 91%,
                rgba(19, 19, 22, 0.008) 95.2%,
                rgba(19, 19, 22, 0.002) 98.2%,
                transparent 100%)`,
            }}
            className="w-full h-2/3 absolute bottom-0 left-0"
          ></ParallaxLayer>
          <ParallaxLayer
            offset={0.99}
            speed={1.3}
            className="px-10 snap-y !h-full"
            style={{
              background: "#131316",
            }}
          >
            <About />
            <div className="corner-circle h-1/6 w-1/6 fixed -left-40 -z-50"></div>
            <Offer />

            <div className="right-corner-circle h-1/6 w-1/5 fixed -right-96 -z-50"></div>
            <Navs />
            <Masonry />
            <Popup />
            <Portfoliosec />
            <Team />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}
