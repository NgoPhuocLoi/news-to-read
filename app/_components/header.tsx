import { Button } from "@/components/retroui/Button";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between mb-6">
      <p className="text-4xl font-sans font-bold mb-4">News to read</p>

      <div className="flex gap-2 h-fit">
        <Button className="h-fit">Add bookmark</Button>
        {/* <Button className="h-fit">Hello</Button> */}
      </div>
    </div>
  );
};

export default Header;
