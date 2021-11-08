import { useRouter } from "next/router";

export default function portfolioDetail() {
  const router = useRouter();

  console.log(router.pathname); 
  console.log(router.query)

  /*
  각각 다음의 값 리턴
  router.pathname => /portfolio/[id]
  router.query => {id: '123'}

  이 값을 이용해 DB에 접근한다던가 다른 백엔드 코드와 연동 가능
  */
  return (
    <div>
      <h1>This is portfolioDetail page</h1>
    </div>
  )
}
