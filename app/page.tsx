import { Button } from "@/components/retroui/Button";
import Header from "./_components/header";
import { Input } from "@/components/retroui/Input";
import { Menu } from "lucide-react";
import NewsItem from "./_components/news-item";
import Bundles from "./_components/bundles";
import Tags from "./_components/tags";

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

            <ul className="flex flex-col gap-2 h-full w-full justify-center mb-4">
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <Bundles />
            <Tags />
          </div>
        </div>
      </div>
    </div>
  );
}
