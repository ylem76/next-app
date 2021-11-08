import Link from "next/link"
export default function Home() {
  return (
    <div>
      <h1>Create Next App</h1>
      <ul>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  )
}
