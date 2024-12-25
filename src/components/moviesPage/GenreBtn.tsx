import React from "react";

function GenreBtn({ item }: { item: { id: number; name: string } }) {
  return (
    <div className="text-primary border border-primary px-4 py-2 rounded-3xl cursor-pointer">
      {item.name}
    </div>
  );
}

export default GenreBtn;
