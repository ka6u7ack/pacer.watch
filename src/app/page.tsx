import cx from 'classnames'
import CardList from '@/components/CardList'
import styles from './page.module.css'

function Page() {
  return (
    <main className={styles.main}>
      <CardList className={cx(styles.cardList)} />
    </main>
  )
}

export default Page
