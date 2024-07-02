import React from 'react';
import { SkeletonSingleInputs } from "@/app/components/skeleton/skeleton-single-inputs";

type SkeletonInputListProps = {
  inputsPerList?: number;
};

export const SkeletonInputList: React.FC<SkeletonInputListProps> = ({ inputsPerList = 4 }) => {
  return (
    <ul>
      {[...Array(inputsPerList)].map((_, index) => (
          <SkeletonSingleInputs key={index} />
      ))}
    </ul>
  );
};

