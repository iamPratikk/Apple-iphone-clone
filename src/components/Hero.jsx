import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to(".hero-title", {
      opacity: 1,
      duration : 1.5,
      delay: 2.5,
      y: -10,
    });

    gsap.to("#cta",{
      opacity : 1,
      delay : 3,
      duration : 1.5,
      y : -50
    })
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-col flex-center">
        <p className="hero-title">Iphone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20" >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl" >From $199/ month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
