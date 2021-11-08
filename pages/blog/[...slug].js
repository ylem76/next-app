import { useRouter } from "next/router";

export default function portfolioDetail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  console.log(router.pathname); 
  console.log(router.query)

  /*
  각각 다음의 값 리턴
  router.pathname => /blog/[...slug]
  router.query => slug: (2) ['test', '123']
  */

  return (
    <div>
      <h1>catch all route</h1>
    </div>
  )
}
