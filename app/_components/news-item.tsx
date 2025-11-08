import React from "react";
import { Bookmark } from "../_interface/bookmark";

interface NewsItemProps {
  bookmark: Bookmark;
}

const NewsItem = ({ bookmark }: NewsItemProps) => {
  return (
    <li>
      <a
        href={bookmark.url}
        target="_blank"
        className="text-[#7B542F] font-bold text-lg hover:underline"
      >
        {bookmark.title}
      </a>
      <div className="flex gap-1">
        <span className="flex gap-1">
          {bookmark.tags.map((tag) => (
            <a key={tag.id} className="hover:underline text-[#FF9D00]">
              #{tag.name}
            </a>
          ))}
        </span>
        {bookmark.tags.length > 0 && bookmark.description && <span>|</span>}
        <div className="line-clamp-1">{bookmark.description}</div>
      </div>

      <div>
        <span className="text-gray-400 text-sm leading-0">
          {bookmark.createdAt}
        </span>
      </div>
    </li>
  );
};

export default NewsItem;
