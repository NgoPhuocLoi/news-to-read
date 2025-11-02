import { Button } from "@/components/retroui/Button";
import { Menu } from "lucide-react";

const Bundles = () => {
  return (
    <div>
      <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold mt-2">Bundles</h1>

        <div>
          <Button size="icon">
            <Menu />
          </Button>
        </div>
      </div>

      <ul className="p-4 flex flex-col gap-1 text-[#7B542F]">
        <li>
          <a className="hover:underline" href="#">
            Programming
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Work
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Home
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Bundles;
