import Layout from "../components/layout";
import MainCard from "../components/mainCard";
import styles from '../styles/home.module.scss'
import { useQuery } from "@tanstack/react-query";
import SERVICE from "../services/service";

export default function Home() {
  const projects = useQuery({ queryKey: ['projects'], queryFn: ()=>SERVICE.getProjectAPi()})
  return (
    <Layout>
      <main className={styles.home}>
        <h1>PROGRESS TRACKER</h1>
        <button className={styles.add_button}>+</button>
        <div className={styles.main_card_container}>
          {
            !projects.isLoading && projects.data.map((item) => {
              return (
                <MainCard key={item.id} item={item}/>
              )
            }
            )
          }
        </div>
        </main>
    </Layout>
  )
}
