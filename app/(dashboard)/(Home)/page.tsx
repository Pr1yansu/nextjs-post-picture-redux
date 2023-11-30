import Container from "@/components/ui/Container";
import React from "react";
import PhotoSection from "../PhotoSection";
import PostSection from "../PostSection";
import ToastProvider from "@/app/Toast-provider";
import LocalStorageSection from "@/components/ui/LocalStorageSection";

const Home = async () => {
  return (
    <ToastProvider>
      <Container>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Dashboard
          </h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
            localhost data :
          </h1>
          <LocalStorageSection />
        </div>
        <div className="grid lg:grid-cols-12 gap-4">
          <PhotoSection />
          <PostSection />
        </div>
      </Container>
    </ToastProvider>
  );
};

export default Home;
