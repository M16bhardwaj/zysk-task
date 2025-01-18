import React from "react";
import AnalyticsImage from "../assets/images/AnalyticsImage.png";
import ArrowRight from "../assets/images/ArrowRight.png"; // Purple arrow image
import Company1 from "../assets/companyImages/company1.png";
import Company2 from "../assets/companyImages/company2.png";
import Company3 from "../assets/companyImages/company3.png";
import Company4 from "../assets/companyImages/company4.png";
import Company5 from "../assets/companyImages/company5.png";
import Company6 from "../assets/companyImages/company6.png";
import Button from "../assets/images/Button.png"; // Button Image

const AnalyticsSection = () => {
  return (
    <section className="flex flex-col items-center pt-24 gap-16 px-4">
      {/* Header Section */}
      <header className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2 bg-[#F9F5FF] text-[#eb4848] font-medium text-sm sm:text-base py-1 px-2 rounded-2xl border border-[#c64141]">
          <span className="px-2 py-1 bg-white rounded-xl border border-[#e44848]">
            New features
          </span>
          <p className="flex items-center gap-2">
            Check out the team dashboard{" "}
            {/* Apply red color directly to the arrow */}
            <img
              src={ArrowRight}
              alt="Arrow Right"
              className="h-4 w-4"
              style={{
                filter:
                  "invert(29%) sepia(80%) saturate(485%) hue-rotate(350deg) brightness(98%) contrast(100%)", // Red arrow filter
              }}
            />
          </p>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold">
          Beautiful analytics to grow smarter
        </h1>

        <p className="text-lg text-gray-600 md:w-[560px]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="flex gap-3">
          {/* Replacing the Demo button with an image */}
          <a href="/demo">
            <img src={Button} alt="Demo Button" className="w-auto h-auto" />
          </a>
          <button className="px-6 py-2 text-white bg-[#db4848] rounded-lg hover:bg-[#eb4a4a]">
            Sign up
          </button>
        </div>
      </header>

      {/* Main Image */}
      <main className="relative">
        <img
          src={AnalyticsImage}
          alt="Analytics Dashboard Preview"
          className="rounded-xl border-8 border-black md:w-[1216px] md:h-[810px]"
        />

        {/* Companies Section */}
        <div className="flex flex-col items-center gap-8 py-16 md:-translate-y-64 md:-mb-64 bg-white border-b">
          <h2 className="text-lg font-medium">
            Join 4,000+ companies already growing
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[Company1, Company2, Company3, Company4, Company5, Company6].map(
              (company, index) => (
                <img
                  key={index}
                  src={company}
                  alt={`Company Logo ${index + 1}`}
                  className="h-9 md:h-12"
                />
              )
            )}
          </div>
        </div>
      </main>
    </section>
  );
};

export default AnalyticsSection;
