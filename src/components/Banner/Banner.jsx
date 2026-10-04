import { Plus } from "lucide-react";
import Link from "next/link";

function Banner() {
  return (
    <section className="mt-20 mb-10 text-center">
      <h2 className="font-bold text-5xl text-foreground">
        Friends to keep close in your life
      </h2>
      <p className="mt-4 mb-8 text-base text-not-active">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <Link
        href="/add-friend"
        className="px-4 py-3 w-fit mx-auto flex justify-center items-center gap-1 rounded-sm bg-primary font-semibold text-base text-white"
      >
        <Plus className="w-4" /> Add a Friend
      </Link>
    </section>
  );
}

export default Banner;
