import { useRouter } from "next/router";

export default function portfolioDetail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  console.log(router.pathname); 
  console.log(router.query)

  /*
  각각 다음의 값 리턴
  router.pathname => /client/[clientid]/[clientprojectid]
  router.query => {clientid: 'cli-id', clientprojectid: 'project-id'}
  */
  return (
    <div>
      <h1>클라이언트 id별 프로젝트 개별 페이지</h1>
    </div>
  )
}
