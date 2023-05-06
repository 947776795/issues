import { Inter } from 'next/font/google'
// import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { keepAliveDropCache, withKeepAlive } from 'react-next-keep-alive';

const inter = Inter({ subsets: ['latin'] })

const homeTabsEum = {
  recommend: 'recommend',
  follow: 'following'
}
 function T () {
  const [activeKey, setActiveKey] = useState(homeTabsEum.recommend)
  const router = useRouter();

  const jump = () => {
    keepAliveDropCache('',false)
    router.push('/about/123')
  }
  console.log('activeKeyactiveKey',activeKey)
  return (
    <>
      <div>home</div>
      {/* <Link href="/about/123">
        to about
      </Link> */}
      <div onClick={jump}>jump</div>
      {
        Object.keys(homeTabsEum).map((key) => {
          return (
            <div key={key} onClick={() => setActiveKey(key)}>{key}</div>
          )
        })
      }
      <div>{activeKey}</div>
    </>
  )
}

export default withKeepAlive(T, ({ router }) => {
  return `${router.route}Page`;
});