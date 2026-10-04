import Image from "next/image";

function FriendCard({ friend }) {
  const { picture, name, days_since_contact, tags, status } = friend;

  return (
    <article className="p-6 flex flex-col gap-2 items-center rounded-lg bg-white shadow-sm cursor-pointer">
      <Image
        className="mb-1 rounded-full"
        src={picture}
        alt={`${name}-profile-picture`}
        height={80}
        width={80}
      />
      <h3 className="font-semibold text-xl text-foreground">{name}</h3>
      <p className="text-xs text-not-active">{days_since_contact}d ago</p>
      <div className="flex items-center gap-2">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="px-2 py-1.5 bg-[#CBFADB] rounded-full font-medium text-xs text-primary leading-none uppercase"
          >
            {tag}
          </p>
        ))}
      </div>
      <p
        className={`px-2 py-1.5 ${status === "on-track" ? "bg-primary" : status === "almost due" ? "bg-[#EFAD44]" : "bg-[#EF4444]"} rounded-full font-medium text-xs text-white leading-none capitalize`}
      >
        {status}
      </p>
    </article>
  );
}

export default FriendCard;
