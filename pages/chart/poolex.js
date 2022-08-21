import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/chart/Poolex.module.css'
import NavBar from '../../component/chart/NavBar'
import Transactions from '../../component/chart/Transactions'


const Poolex = () => {
    return ( 
        <div>
            <NavBar />
            <div className="chartScreen">
                <div className={styles.chartContainer}>
                    <div className={styles.poolPagination}>
                        <div className={styles.pagination}>
                            <Link href=""><a href="">Home &#62;  </a></Link>
                            <Link href=""><a href="">Pools &#62;</a></Link>
                            <h6 className={styles.poolex}>USDC / ETH 0.3%</h6>
                        </div>
                        <div className={styles.fav}>
                            <img src="/assets/fav.png" width="16.6px" height="15.8px" />
                            <a href=""><img src="/assets/share.png" width="17px" height="17px" /></a>

                        </div>
                    </div>

                    <div className={styles.poolexHeading}>
                        <div className={styles.poolTokens}>
                            <ul>
                                <li><Image src="/assets/eth-white.png" width="30px" height="30px" /></li>
                                <li><Image src="/assets/eth-white.png" width="30px" height="30px" /></li>
                                <li><h6>USDC&nbsp; /<span>&nbsp; ETH</span></h6> <div className={styles.badge}>0.3%</div></li>
                            </ul>
                        </div> 
                        <div className={styles.poolexAction}>
                            <div className={styles.poolexvaluebadges}>
                                <div className={styles.valueBadge}>
                                    <img src="/assets/eth-white.png" width="30px" height="30px" />
                                    <h6 className={styles.tokenValue}>1 USDC = <span>&#60;0.001 ETH</span></h6>
                                </div>
                                <div className={styles.valueBadge}>
                                    <img src="/assets/eth-white.png" width="30px" height="30px" />
                                    <h6 className={styles.tokenValue}>1 USDC = <span>&#60;0.001 ETH</span></h6>
                                </div>
                            </div>
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
                                    <div className={styles.lockedTokens}>
                                        <h6>total tokens locked</h6>
                                        <div className={styles.tokenstoLock}>
                                            <ul>
                                                <li className={styles.tokenOne}>
                                                    <div>
                                                        <img src="/assets/eth.png" width="20px" height="20px" /> <span className={styles.tokenName}>USDC</span>   
                                                    </div>
                                                    <h6 className={styles.value}>218.45m</h6>
                                                     
                                                </li>
                                                <li className={styles.tokenTwo}>
                                                <div>
                                                        <img src="/assets/eth.png" width="20px" height="20px" /> <span className={styles.tokenName}>ETH</span>   
                                                    </div>
                                                    <h6 className={styles.value}>58.61k</h6>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.tokenDetails}>
                                        <div className={styles.tvl}>
                                            <h6>TVL</h6>
                                            <h4>$416.52m</h4>
                                            <h5>1.08%</h5>
                                        </div>
                                        <div className={styles.volume}>
                                            <h6>Volume 24h</h6>
                                            <h4>$416.52m</h4>
                                            <h5>16.22%</h5>
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

                    <Transactions />
                </div>
            </div>
        </div>
    );
}
Poolex.layout = "Chart" 
export default Poolex;