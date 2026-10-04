import TrackerCard from "../TrackerCard/TrackerCard";

async function Tracker() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/data/friends.json`,
  );
  const friends = await response.json();

  const onTrack = friends.filter((friend) => friend.status === "on-track");

  const almostDue = friends.filter((friend) => friend.status === "overdue");

  return (
    <section className="mb-10 grid grid-cols-4 gap-6">
      <TrackerCard info={friends.length} text="Total Friends" />
      <TrackerCard info={onTrack.length} text="On Track" />
      <TrackerCard info={almostDue.length} text="Need Attention" />
      <TrackerCard info={0} text="Interactions This Month" />
    </section>
  );
}

export default Tracker;
