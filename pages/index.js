import Features from "@/components/templates/Features";
import Gallery from "@/components/templates/Gallery";
import Homes from "@/components/templates/Homes";
import Story from "@/components/templates/Story";
import React from "react";

function index() {
  return (
    <>
      <Features />
      <Story />
      <Homes />
      <Gallery />
    </>
  );
}

export default index;
