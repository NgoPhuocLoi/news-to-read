"use server";

import { redirect } from "next/navigation";
import { Bookmark } from "../_interface/bookmark";
import z from "zod";

const createBookmarkDtoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("Invalid URL format"),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

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

export const createBookmark = async (
  prevState: object | null,
  data: FormData
) => {
  const url = data.get("url") as string;
  const title = data.get("title") as string;
  const description = data.get("description") as string;
  const tagsString = data.get("tags") as string;

  const tags = tagsString ? tagsString.split(" ").map((tag) => tag.trim()) : [];

  const payload = {
    url,
    title,
    description,
    tags,
  };

  const parsed = createBookmarkDtoSchema.safeParse(payload);
  if (!parsed.success) {
    return { errors: z.treeifyError(parsed.error) };
  }

  console.log({
    payload,
    data,
  });

  try {
    const res = await fetch("http://localhost:8080/api/bookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to create bookmark");
    }

    redirect("/");
  } catch (error) {
    console.error("Error creating bookmark:", error);
    throw error;
  }
};
