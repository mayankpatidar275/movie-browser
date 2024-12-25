import React from "react";

interface GenreBtnProps {
  item: { id: number; name: string };
  className?: string;
  isSelected: boolean;
}

function GenreBtn({ item, isSelected, className = "" }: GenreBtnProps) {
  const baseClasses =
    "px-4 py-2 border rounded-3xl cursor-pointer transition-all duration-200";
  const dynamicClasses = `border-secondary dark:border-primary ${
    isSelected
      ? "bg-secondary dark:bg-primary text-primary dark:text-secondary"
      : "bg-primary dark:bg-secondary text-secondary dark:text-primary"
  }`;

  const hoverClasses =
    "hover:bg-secondary hover:text-primary dark:hover:bg-primary dark:hover:text-secondary";

  return (
    <div
      className={`${baseClasses} ${dynamicClasses} ${hoverClasses} ${className}`}
    >
      {item.name}
    </div>
  );
}

export default GenreBtn;
