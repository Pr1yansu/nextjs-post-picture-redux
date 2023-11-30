"use client";
import React from "react";
import { Toaster } from "react-hot-toast";

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
      />
      {children}
    </>
  );
};

export default ToastProvider;
