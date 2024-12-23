import Spinner from "@/ui/Spinner";

const Loading = () => {
  return (
    <div className="grid items-center justify-center gap-x-4">
      <span className="text-lg text-secondary-500">در حال بارگذاری</span>
      <Spinner />
    </div>
  );
};

export default Loading;