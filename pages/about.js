import { useRouter } from "next/router"


export default function About() {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            about page
        </div>

    )
}