import { Button } from "@/components/retroui/Button";
import Image from "next/image";
import React from "react";
import Logo from "../icon.png";

const Header = () => {
  return (
    <div className="flex justify-between mb-6">
      <div className="flex gap-4 items-center">
        <div className="rounded-full overflow-hidden">
          <Image src={Logo} alt="Logo" width={50} height={50} />
        </div>

        <p className="text-4xl font-sans font-bold">News to read</p>
      </div>

      <div className="flex gap-2 h-fit">
        <Button className="h-fit">Add bookmark</Button>
        {/* <Button className="h-fit">Hello</Button> */}
      </div>
    </div>
  );
};

export default Header;
