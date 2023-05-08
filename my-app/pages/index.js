import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <div className={styles.main}>
      <div>
        <p>NextJs로 ssr과 csr을 비교하기 위해 만든 사이트입니다.</p>
        <div className={styles.router}>
          <span><Link href='/ssr'>Server Side Rendering</Link></span>
          <span><Link href='/csr'>Client Side Rendering</Link></span>
        </div>
      </div>
    </div>
  )
}
