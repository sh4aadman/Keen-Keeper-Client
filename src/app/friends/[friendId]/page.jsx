import { Archive, BellMinus, Trash } from "lucide-react";
import Image from "next/image";

async function FriendDetailsPage({ params }) {
  const { friendId } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/data/friends.json`,
  );
  const friends = await response.json();

  const friend = friends.find((friend) => friend.id === parseInt(friendId));

  const { picture, name, status, tags, bio, email } = friend;

  return (
    <section className="my-20 w-6xl mx-auto grid grid-cols-3">
      <section>
        <article className="py-6 rounded-lg bg-white flex flex-col items-center gap-3 shadow-sm">
          <Image
            className="rounded-full"
            src={picture}
            alt="user-picture"
            height={80}
            width={80}
            loading="eager"
          />
          <div>
            <h2 className="mb-2 font-semibold text-xl text-foreground">
              {name}
            </h2>
            <p
              className={`mb-2 px-2 py-1.5 w-fit mx-auto ${status === "on-track" ? "bg-primary" : status === "almost due" ? "bg-[#EFAD44]" : "bg-[#EF4444]"} rounded-full font-medium text-xs text-white leading-none capitalize`}
            >
              {status}
            </p>
            <div className="flex justify-center items-center gap-2">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className="px-2 py-1.5 bg-[#CBFADB] rounded-full font-medium text-xs text-primary leading-none uppercase"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <p className="px-10 font-medium text-base text-not-active italic text-center">
            {bio}
          </p>
          <p className="text-sm text-not-active">
            Email: <span>{email}</span>
          </p>
        </article>
        <button className="mt-4 py-4 w-full rounded-sm bg-white border border-[#E9E9E9] font-medium text-base text-foreground flex justify-center items-center gap-2 cursor-pointer">
          <BellMinus className="w-5 h-5" /> Snooze 2 Weeks
        </button>
        <button className="mt-2 py-4 w-full rounded-sm bg-white border border-[#E9E9E9] font-medium text-base text-foreground flex justify-center items-center gap-2 cursor-pointer">
          <Archive className="w-5 h-5" /> Archive
        </button>
        <button className="mt-2 py-4 w-full rounded-sm bg-white border border-[#E9E9E9] font-medium text-base text-[#EF4444] flex justify-center items-center gap-2 cursor-pointer">
          <Trash className="w-5 h-5" /> Delete
        </button>
      </section>
          <section className="col-span-2">
              
      </section>
    </section>
  );
}

export default FriendDetailsPage;
