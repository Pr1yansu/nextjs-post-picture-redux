import Container from "@/components/ui/Container";
import React from "react";
import PhotoSection from "../PhotoSection";
import PostSection from "../PostSection";
import ToastProvider from "@/app/Toast-provider";

const Home = () => {
  return (
    <ToastProvider>
      <Container>
        <div className="grid lg:grid-cols-12 gap-4">
          <PhotoSection />
          <PostSection />
        </div>
      </Container>
    </ToastProvider>
  );
};

export default Home;
