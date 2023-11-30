import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="
    max-w-[1540px]
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    sm:py-12
    lg:py-16
  "
    >
      {children}
    </section>
  );
};

export default Container;
