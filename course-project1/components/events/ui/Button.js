import Link from "next/link";
export default function Button(props) {
  return (
    <Link href={props.link}>
      <a>{props.children}</a>
    </Link>
  );
}
