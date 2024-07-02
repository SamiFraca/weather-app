import React from 'react';

type SkeletonSingleInputsProps = {
  as?: React.ElementType;
};

export const SkeletonSingleInputs: React.FC<SkeletonSingleInputsProps> = ({ as: Component = 'li' }) => {
  return <Component className="w-40 h-6 animate-pulse bg-slate-300 rounded mb-2"></Component>;
};