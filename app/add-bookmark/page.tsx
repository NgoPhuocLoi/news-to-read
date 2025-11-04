import { Button } from "@/components/retroui/Button";
import { Input } from "@/components/retroui/Input";
import { Label } from "@/components/retroui/Label";
import { Textarea } from "@/components/retroui/Textarea";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-[550px] mx-auto flex flex-col gap-8">
      <h3 className="text-2xl font-bold pb-2 border-b border-gray-300">
        New bookmark
      </h3>

      <div className="flex flex-col gap-6 w-full">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">URL</Label>
          <Input type="pokemon" id="pokemon" placeholder="Charmander" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">Tags</Label>
          <Input type="pokemon" id="pokemon" placeholder="Charmander" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">Title</Label>
          <Input type="pokemon" id="pokemon" placeholder="Charmander" />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="pokemon">Description</Label>
          <Textarea type="pokemon" id="pokemon" placeholder="Charmander" />
        </div>
      </div>

      <div className="flex justify-between">
        <Button>Save</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  );
};

export default Page;
