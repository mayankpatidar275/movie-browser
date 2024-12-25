import React from "react";

interface GenreBtnProps {
  item: { id: number; name: string };
  className?: string;
}

function GenreBtn({ item, className = "" }: GenreBtnProps) {
  const baseClasses =
    "px-4 py-2 border rounded-3xl cursor-pointer transition-all duration-200";
  const dynamicClasses =
    "bg-primary text-secondary border-secondary dark:bg-secondary dark:text-primary dark:border-primary";
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
