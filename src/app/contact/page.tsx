import React from "react";
import Image from "next/image";
import Link from "next/link";

import Services from "../components/Services";
import ContactForm from "@/components/contactForm";


const Contact = () => {
  return (
    <div>
      {/* Background Image with Navigation */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/Rectangle 1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="logo"
            width={40}
            height={40}
            className="mb-2"
          />
          <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
            Contact
          </h2>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Link
              href="/"
              className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Home
            </Link>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
              &#8594;
            </span>
            <Link
              href="/"
              className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      <ContactForm />
      <Services />
    </div>
  );
};

export default Contact;
