import { useRouter } from "next/router";

export default function EventDetail() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <div>
      <h1>This is event detail page</h1>
      <p>show selected Event</p>
    </div>
  );
}
