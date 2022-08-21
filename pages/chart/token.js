import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/chart/Token.module.css'
import NavBar from '../../component/chart/NavBar'
import Tokens from '../../component/chart/Tokens'



const token = () => {
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

                    <div className={styles.topMovers}>
                        <h6>Top Movers</h6>
                        <div className={styles.cryptoSlider}>
                            <div className={styles.cryptoCard}>
                                <img src="/assets/shiba.png" width="36px" height="36px" />
                                <div className={styles.cryptoInfo}>
                                    <h6 className={styles.token}>shiba</h6>
                                    <h6 className={styles.value}>$2.10<span className={styles.rate}>9.64%</span></h6>
                                </div>
                            </div>
                            <div className={styles.cryptoCard}>
                                <img src="/assets/eth2x.png" width="36px" height="36px" />
                                <div className={styles.cryptoInfo}>
                                    <h6 className={styles.token}>eth2x-fli</h6>
                                    <h6 className={styles.value}>$2.10<span className={styles.rate}>9.64%</span></h6>
                                </div>
                            </div>
                            <div className={styles.cryptoCard}>
                                <img src="/assets/look.png" width="36px" height="36px" />
                                <div className={styles.cryptoInfo}>
                                    <h6 className={styles.token}>look</h6>
                                    <h6 className={styles.value}>$2.10<span className={styles.rate}>9.64%</span></h6>
                                </div>
                            </div>
                            <div className={styles.cryptoCard}>
                                <img src="/assets/shiba.png" width="36px" height="36px" />
                                <div className={styles.cryptoInfo}>
                                    <h6 className={styles.token}>shiba</h6>
                                    <h6 className={styles.value}>$2.10<span className={styles.rate}>9.64%</span></h6>
                                </div>
                            </div>
                            <div className={styles.cryptoCard}>
                                <img src="/assets/eth2x.png" width="36px" height="36px" />
                                <div className={styles.cryptoInfo}>
                                    <h6 className={styles.token}>eth2x-fli</h6>
                                    <h6 className={styles.value}>$2.10<span className={styles.rate}>9.64%</span></h6>
                                </div>
                            </div>
                            <div className={styles.cryptoCard}>
                                <img src="/assets/look.png" width="36px" height="36px" />
                                <div className={styles.cryptoInfo}>
                                    <h6 className={styles.token}>look</h6>
                                    <h6 className={styles.value}>$2.10<span className={styles.rate}>9.64%</span></h6>
                                </div>
                            </div>
                            <div className={styles.cryptoCard}>
                                <img src="/assets/shiba.png" width="36px" height="36px" />
                                <div className={styles.cryptoInfo}>
                                    <h6 className={styles.token}>shiba</h6>
                                    <h6 className={styles.value}>$2.10<span className={styles.rate}>9.64%</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <Tokens />
                </div>
            </div>
        </div>
    );
}

token.layout = "Chart"
export default token;