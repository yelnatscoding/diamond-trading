"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/diamond-trading-hero-image.png')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
          variant="h1"
          color="white"
          className="md:max-w-full lg:max-w-3xl"
        >
          Diamond Trading
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Join the Diamond Trading Discord for expert insights, real-time strategies, and a supportive
          community that empowers every trader. Unlock exclusive tools and learn from top traders who are
          passionate about your success. Don’t miss out—level up your trading journey with us today!
        </Typography>
        <div>
          <Button variant="gradient" color="white">
            JOIN TODAY
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
