import React from "react";
import { SkeletonInputList } from "@/app/components/skeleton/skeleton-input-list";

export const SkeletonWrapper = () => {
  return (
    <div className="rounded-lg w-full h-full p-4 flex flex-col  gap-5">
      <div className="flex mx-auto justify-center w-1/2 h-10  animate-pulse bg-slate-300 rounded"></div>
      <div className="w-72 h-72 mx-auto bg-slate-300 rounded mb-2 animate-pulse"></div>
      <div className="flex gap-10 w-full items-center justify-center flex-wrap">
        {[...Array(4)].map((_, index) => (
          <SkeletonInputList key={index} />
        ))}
      </div>
    </div>
  );
};
