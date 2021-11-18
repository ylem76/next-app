import { useRouter } from "next/router";

export default function clientDetail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  function handleLoadProject() {
    // 라우터 replace를 이용해 페이지 넘김 : 히스토리X
    // router.replace('/client/songsong/projecta');

    // 라우터 push를 이용해 페이지 넘김 : 히스토리O
    // router.push('/client/songsong/projecta');

    // 라우터 push 다르게 기입도 가능
    router.push({
      pathname: '/client/[clientid]/[clientprojectid]',
      query:{clientid : 'songsong', clientprojectid:'projecta'}
    })
  }

  return (
    <div>
      <h1>클라이언트 id별 메인 페이지</h1>
      <button onClick={handleLoadProject}>프로젝트 A 보기</button>
    </div>
  )
}
