import CreateBookmarkForm from "./create-bookmark-form";

const Page = () => {
  return (
    <div className="max-w-[550px] mx-auto flex flex-col gap-8">
      <h3 className="text-2xl font-bold pb-2 border-b border-gray-300">
        New bookmark
      </h3>

      <CreateBookmarkForm />
    </div>
  );
};

export default Page;
