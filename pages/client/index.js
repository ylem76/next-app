import Link from "next/link";

export default function ClientIndex() {
  const clients = [
    {id:1, name:'songsong'},
    {id:2, name:'ylem76'}
  ]
  return (
    <div>
      <h1>클라이언트 첫 화면</h1>
      <ul>
        {clients.map((client) => {
          return <li key={client.id}><Link href={{
            pathname:"/client/[clientid]",
            query : {clientid: client.name}
          }}>{client.name}</Link></li>
        })}
      </ul>
    </div>
  )
}
