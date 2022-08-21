import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/chart/Pool.module.css'
import NavBar from '../../component/chart/NavBar'
import Allpools from '../../component/chart/Allpools'

const pool = () => {
    return (  
        <div>
            <NavBar />
            <div className="chartScreen">
                <div className={styles.chartContainer}>
                    <div className={styles.watchlist}>
                        <h6>your watchlist</h6>
                        <div className={styles.savedPools}>
                            <h6>Saved pools will appear here</h6>
                        </div>
                    </div>
                <Allpools />
                </div>
            </div>
        </div>
    );
}
pool.layout = "Chart"
export default pool;