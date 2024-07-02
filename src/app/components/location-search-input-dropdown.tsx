"use client";
import React, { useEffect } from "react";

type DropdownProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  parentRef: React.RefObject<HTMLDivElement>;
};

const LocationSearchInputDropdown: React.FC<DropdownProps> = ({
  isOpen,
  onClose,
  children,
  parentRef,
}) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parentRef.current &&
        !parentRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, parentRef]);

  return (
    <ul
      className={`flex-col justify-start items-start   md:relative absolute top-14 md:top-0 md:bg-transparent bg-zinc-400 rounded-md w-[95%] md:w-full z-10 md:px-0 md:py-0 px-2 py-2 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      {children}
    </ul>
  );
};

export default LocationSearchInputDropdown;
