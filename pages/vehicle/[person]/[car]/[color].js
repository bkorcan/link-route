import { useRouter } from "next/router"

export default function Color () {
    const router = useRouter()
    // console.log(router)
  return (
      <h2>
          {router.query.person} s {router.query.color} {router.query.car}
      </h2>
  )
}
