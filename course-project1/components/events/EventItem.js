import Button from "./ui/Button";
// .module.css 파일을 자바스크립트 파일로 임포트
// next js가 컴포넌트 html에 알맞게 조금 변형하여 사용

import classes from "./event-item.module.css";

export default function EventItem(props) {
  const { title, image, date, location, id } = props;

  // 날짜 객체를 보기 쉽게 가공
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // 주소 객체 가공
  // 콤마를 공백으로 변경
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <h2>{title}</h2>
      <div>
        <time>{humanReadableDate}</time>
      </div>
      <div>
        <address>{formattedAddress}</address>
      </div>
      <div>
        <Button link={`/events/${id}`}>Explore Event</Button>
      </div>
    </li>
  );
}
