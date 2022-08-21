import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/chart/Index.module.css'
import NavBar from '../../component/chart/NavBar'
import Tokens from '../../component/chart/Tokens'
import Transactions from '../../component/chart/Transactions'
import Allpools from '../../component/chart/Allpools'

const Index = () => {
    return (  
        <div>
            <NavBar />
            <div className="chartScreen">
                <div className={styles.chartContainer}>
                    <div className={styles.glow}></div>
                    <div className={styles.overview}>
                        <h6>Brandname Overview</h6>
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className={styles.chartBox}></div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className={styles.chartBox}></div>
                            </div>
                        </div>
                        <div className={styles.chartReport}>
                            <div className={styles.volume}>
                                <h6>Volume 24H: <b className={styles.usd}>$1.75b</b> <span className={styles.rate}>(↑78.30%)</span></h6>
                            </div>
                            <div className={styles.fees}>
                                <h6>Fees 24H: <b className={styles.usd}>$1.75b</b> <span className={styles.rate}>(↑78.30%)</span></h6>
                            </div>
                            <div className={styles.tvl}>
                                <h6>TVL 24H: <b className={styles.usd}>$1.75b</b> <span className={styles.rate}>(↑78.30%)</span></h6>
                            </div>
                        </div>
                    </div>

                    <Tokens />
                    <div className={styles.glow}></div>
                    
                    <Allpools />

                    <Transactions />
                </div>
            </div>

        </div>
    );
}
Index.layout = "Chart"
export default Index;