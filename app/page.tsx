import { Input } from "@/components/retroui/Input";
import Bundles from "./_components/bundles";
import NewsItem from "./_components/news-item";
import Tags from "./_components/tags";
import { getBookmarks } from "./_actions/bookmark-action";
import { Bookmark } from "./_interface/bookmark";

export default async function Home() {
  const bookmarks = await getBookmarks();
  return (
    <div className="grid grid-cols-3 gap-12 w-full">
      <div className="col-span-2">
        <div className=" border-b border-gray-300 pb-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold mt-2">Bookmarks</h1>

          <div>
            <Input placeholder="Search..." />
          </div>
        </div>

        <ul className="flex flex-col gap-2 h-full w-full mt-4">
          {bookmarks.map((bookmark: Bookmark) => (
            <NewsItem key={bookmark.id} bookmark={bookmark} />
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <Bundles />
        <Tags />
      </div>
    </div>
  );
}
