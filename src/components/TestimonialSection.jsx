import SysyphusLogo from "../assets/images/SysyphusLogo.png";
import UserImage from "../assets/images/UserImage.png";
import React from "react";
const TestimonialSection = () => {
  return (
    <section className="flex justify-center py-24 bg-[#F9FAFB]">
      <div className="flex flex-col items-center gap-8 px-8 max-w-6xl">
        {/* Logo */}
        <img src={SysyphusLogo} alt="Sysyphus Logo" className="h-10" />

        {/* Testimonial */}
        <blockquote className="text-3xl font-medium text-center md:w-2/3">
          We’ve been using Untitled to kickstart every new project and can’t
          imagine working without it.
        </blockquote>

        {/* User Information */}
        <figure className="flex flex-col items-center text-center">
          <img
            src={UserImage}
            alt="Candice Wu"
            className="h-10 w-10 rounded-full"
          />
          <figcaption className="mt-4">
            <p className="font-medium">Candice Wu</p>
            <p className="text-sm text-gray-600">Product Manager, Sisyphus</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default TestimonialSection;
