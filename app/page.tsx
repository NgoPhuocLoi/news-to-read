import { Button } from "@/components/retroui/Button";
import Header from "./_components/header";
import { Input } from "@/components/retroui/Input";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto font-sans">
      <div className="w-full p-4">
        <Header />

        <div className="grid grid-cols-3 gap-12 w-full">
          <div className="col-span-2">
            <div className=" border-b border-gray-300 pb-4 flex justify-between items-center">
              <h1 className="text-xl font-semibold mt-2">Bookmarks</h1>

              <div>
                <Input placeholder="Search..." />
              </div>
            </div>

            <ul className="flex flex-col gap-1 h-full w-full justify-center mb-4">
              <li className="font-sans flex gap-2 items-baseline">
                <span className="text-gray-400 text-sm">29-10-2025</span>
                <span className="text-xl">
                  Hidden benefits of undefined behavior Hidden benefits of
                  undefined behavior Hidden benefits of undefined behavior
                  Hidden benefits of undefined behavior Hidden benefits of
                  undefined behavior Hidden benefits of undefined behavior
                </span>
                <span className="text-md text-gray-600 underline">
                  (google.com)
                </span>
              </li>

              <li className="font-sans flex gap-2 items-baseline">
                <span className="text-gray-400 text-sm">29-10-2025</span>
                <span className="text-xl">Keep Android Open</span>
                <span className="text-md text-gray-600 underline">
                  (google.com)
                </span>
              </li>

              <li className="font-sans flex gap-2 items-baseline">
                <span className="text-gray-400 text-sm">29-10-2025</span>
                <span className="text-xl">
                  Hidden benefits of undefined behavior
                </span>
                <span className="text-md text-gray-600 underline">
                  (google.com)
                </span>
              </li>

              <li className="font-sans flex gap-2 items-baseline">
                <span className="text-gray-400 text-sm">29-10-2025</span>
                <span className="text-xl">
                  Hidden benefits of undefined behavior
                </span>
                <span className="text-md text-gray-600 underline">
                  (google.com)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="border-b border-gray-300 pb-4 flex justify-between items-center">
              <h1 className="text-xl font-semibold mt-2">Bundles</h1>

              <div>
                <Button size="icon">
                  <Menu />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Button>More...</Button>
      </div>
    </div>
  );
}
