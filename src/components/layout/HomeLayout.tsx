import React from "react";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>------Logo------Movies------TV shows-------</header>
      {children}
    </div>
  );
}

export default HomeLayout;
