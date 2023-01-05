import Layout from "../components/layout";
import MainCard from "../components/mainCard";
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <Layout>
      <main className={styles.home}>
        <h1>PROGRESS TRACKER</h1>
        <button className={styles.add_button}>+</button>
        <MainCard name={"Project Name"} description={"This is the Project Description of the Project Name"} progress={70} />
        </main>
    </Layout>
  )
}
