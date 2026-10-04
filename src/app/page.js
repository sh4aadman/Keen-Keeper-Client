import Banner from "@/components/Banner/Banner";
import Friends from "@/components/Friends/Friends";
import Tracker from "@/components/Tracker/Tracker";

export default function Home() {
  return (
    <>
      <Banner />
      <Tracker />
      <hr className="mb-10 border-t border-t-[#E9E9E9]" />
      <Friends />
    </>
  );
}
