import { useRouter } from 'next/router';

export default function Home() {
const router = useRouter();
  return (
    <>
      <div>about</div>
      <div onClick={()=> router.back()}>back</div>
    </>
  )
}
