import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/chart/Tokenex.module.css'
import NavBar from '../../component/chart/NavBar'
import Allpools from '../../component/chart/Allpools'
import Transactions from '../../component/chart/Transactions'
// import Transactions from '../../component/chart/Transactions'


const Tokenex = () => {
    return ( 
        <div>
            <NavBar />
            <div className="chartScreen">
                <div className={styles.chartContainer}>
                    <div className={styles.poolPagination}>
                        <div className={styles.pagination}>
                            <Link href=""><a href="">Home &#62;  </a></Link>
                            <Link href=""><a href="">Pools &#62;</a></Link>
                            <h6 className={styles.poolex}>USDC <span>(0xA0b8...eB48)</span></h6>
                        </div>
                        <div className={styles.fav}>
                            <img src="/assets/fav.png" width="16.6px" height="15.8px" />
                            <a href=""><img src="/assets/share.png" width="17px" height="17px" /></a>

                        </div>
                    </div>
                    <div className={styles.poolexHeading}>
                        <div className={styles.poolTokens}>
                            <ul>
                                <li><Image src="/assets/eth-white.png" width="40px" height="40px" /></li>
                                <li><h6>USD Coin<span> (USDC)</span></h6></li>
                            </ul>
                        </div> 
                        <div className={styles.poolexAction}>
                            <h2 className={styles.tokenValue}>$1.00 <span className={styles.growthPercent}>(0.00%)</span></h2> 
                            <div className={styles.actionButtons}>
                                <Link href="/p/add"><a href="" className={styles.addButton}><img src="/assets/addliq.png" width="20px" height="20px" />&nbsp;&nbsp;add liquidity</a></Link>
                                <Link href="/p/add"><a href="" className={styles.tradeButton}>Trade</a></Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.poolChartrow}>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className={styles.tokenInfo}>
                                    <div className={styles.tokenDetails}>
                                        <div className={styles.tvl}>
                                            <h6>TVL</h6>
                                            <h4>$416.52m</h4>
                                            <h5>1.08%</h5>
                                        </div>
                                        <div className={styles.volume}>
                                            <h6>24h Trading Vol</h6>
                                            <h4>$416.52m</h4>
                                            <h5>16.22%</h5>
                                        </div>
                                        <div className={styles.trading}>
                                            <h6>7d Trading Vol</h6>
                                            <h4>$202.67k</h4>
                                        </div>
                                        <div className={styles.fees}>
                                            <h6>24h Fees</h6>
                                            <h4>$202.67k</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-9">
                                <div className={styles.chartInfo}>
                                    {/* <div className={styles.t} */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Allpools />
                    <Transactions />
                </div>
            </div>
        </div>
    );
}
Tokenex.layout = "Chart" 
export default Tokenex;