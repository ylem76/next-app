import EventItem from "./EventItem";

export default function EventList({ items }) {
  return (
    <div>
      <ul>
        {items.map(item => {
          return (
            <EventItem
              key={item.id}
              id={item.id}
              image={item.image}
              desc={item.description}
              title={item.title}
              location={item.location}
              date={item.date}
            />
          );
        })}
      </ul>
    </div>
  );
}
