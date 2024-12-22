import { useRouter } from "next/navigation";

const useMoveBack = () => {
  const router = useRouter();
  function back() {
    router.back();
  }
  return back;
};
export default useMoveBack;
