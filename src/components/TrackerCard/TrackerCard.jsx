function TrackerCard({ info, text }) {
  return (
    <article className="p-8 rounded-lg bg-white text-center shadow-sm">
      <h3 className="mb-2 font-semibold text-3xl text-primary">{info}</h3>
      <p className="text-lg text-not-active">{text}</p>
    </article>
  );
}

export default TrackerCard;
