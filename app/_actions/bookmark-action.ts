"use server";

import { Bookmark } from "../_interface/bookmark";

export const getBookmarks = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/bookmarks");
    if (!res.ok) {
      return [];
    }

    const bookmarks: Bookmark[] = await res.json();
    return bookmarks;
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    return [];
  }
};
