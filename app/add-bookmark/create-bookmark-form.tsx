"use client";

import { createBookmark } from "../_actions/bookmark-action";
import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Textarea } from "@/components/retroui/Textarea";
import Link from "next/link";
import { useActionState } from "react";

const CreateBookmarkForm = () => {
  const [state, formAction, pending] = useActionState(createBookmark, null);

  console.log({ state: state?.errors?.properties, pending });
  return (
    <form action={formAction}>
      <div className="flex flex-col gap-6 w-full">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">URL</Label>
          <Input
            name="url"
            type="pokemon"
            id="pokemon"
            placeholder="Charmander"
          />
          {state?.errors?.properties?.["url"] && (
            <span className="text-xs text-red-500">
              {state?.errors?.properties?.["url"].errors.join(", ")}
            </span>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">Tags</Label>
          <Input
            name="tags"
            type="pokemon"
            id="pokemon"
            placeholder="Charmander"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">Title</Label>
          <Input
            name="title"
            type="pokemon"
            id="pokemon"
            placeholder="Charmander"
          />

          {state?.errors?.properties?.["title"] && (
            <span className="text-xs text-red-500">
              {state?.errors?.properties?.["title"].errors.join(", ")}
            </span>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">Description</Label>
          <Textarea
            name="description"
            type="pokemon"
            id="pokemon"
            placeholder="Charmander"
          />
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button>Save</Button>
        <Link href={"/"}>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default CreateBookmarkForm;
