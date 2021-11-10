import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/EventList";

export default function Home() {

  // 함수 지칭하는 괄호 있고 없고의 차이
  // getFeaturedEvents : 함수 그 자체
  // getFeaturedEvents() : 함수가 연산한 결과
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);

  return (
    <div>
      <h1>This is home page</h1>
      <EventList items = {featuredEvents}/>
      
    </div>
  )
}
