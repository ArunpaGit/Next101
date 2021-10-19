import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Kerala, located on the south-western tip of India, enjoys unique geographical features that have made it one of the most sought-after tourist destinations in Asia. Fondly referred to as ‘God’s Own Country’, Kerala was selected by the National Geographic Traveller as one of the 50 destinations of a lifetime and one of the thirteen paradises in the world.</p>
      <p className={styles.text}>Season never ends in Kerala, thanks to the year-long moderate climate and numerous festivals and events. </p>
      <Link href="/myobject/">
        <a className={styles.btn}>See Object Listing</a>
      </Link>

    </div>
  )
}