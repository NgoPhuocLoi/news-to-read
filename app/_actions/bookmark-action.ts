"use server";

import { redirect } from "next/navigation";
import { Bookmark } from "../_interface/bookmark";
import z from "zod";
import { revalidatePath } from "next/cache";
import { NEWS_TO_READ_SERVICE_ENDPOINT } from "../constants/api-endpoint";

const createBookmarkDtoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.url("Invalid URL format"),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export const getBookmarks = async () => {
  try {
    const res = await fetch(`${NEWS_TO_READ_SERVICE_ENDPOINT}/bookmarks`);
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
  const tagsString = data.get("tags") as string;

  const payload = {
    url: data.get("url") as string,
    title: data.get("title") as string,
    description: data.get("description") as string,
    tags: tagsString ? tagsString.split(" ").map((tag) => tag.trim()) : [],
  };

  const parsed = createBookmarkDtoSchema.safeParse(payload);
  if (!parsed.success) {
    return { errors: z.treeifyError(parsed.error) };
  }

  try {
    const res = await fetch(`${NEWS_TO_READ_SERVICE_ENDPOINT}/bookmarks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to create bookmark");
    }
  } catch (error) {
    console.error("Error creating bookmark:", error);
    throw error;
  }

  redirect("/");
};

export const deleteBookmark = async (bookmarkId: string) => {
  try {
    const res = await fetch(
      `${NEWS_TO_READ_SERVICE_ENDPOINT}/bookmarks/${bookmarkId}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete bookmark");
    }
  } catch (error) {
    console.error("Error deleting bookmark:", error);
    throw error;
  }

  revalidatePath("/");
};
