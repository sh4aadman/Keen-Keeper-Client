import FriendCard from "../FriendCard/FriendCard";

async function FriendsContainer() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/data/friends.json`,
  );
  const friends = await response.json();

  console.log(friends);

  return (
    <section className="mb-20 grid grid-cols-4 gap-6">
      {friends.map((friend) => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </section>
  );
}

export default FriendsContainer;
