
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/defi/Pool.module.css'
import Block from "../../component/defi/Block"
// import NavBar from '../../component/defi/NavBar'

const Index = () => {
    return (  
        <div className="defimainScreen">
            {/* <NavBar /> */}
            <div className={styles.poolContainer}>
                <div className={styles.poolHeader}>
                    <h6>pools overview</h6>

                    <div className={styles.poolOptions}>
                        <div className={styles.moreSelect}>
                            <select id="more" >
                                <option value="more">More</option>
                                <option value="">More</option>
                                <option value="">More</option>
                            </select>
                        </div>
                        <Link className='link' href="/"><button className={styles.position} type="button"> + new position </button></Link>
                    </div>
                </div>

                <div className={styles.poolpositionContainer}>
                    <div className={styles.containerContent}>
                        <Image src="/assets/walleticon.png" width="48px" height="48px" />
                        <p>Your active V3 liquidity positions will appear here.</p><br></br>
                        <button type="button" className={styles.connectButton}>connect wallet</button>
                    </div>
                </div>

                <div className={styles.poolBlog}>
                    <div className={styles.liquidityBlog}>
                        <a href=""><p>Learn about providing liquidity<span><Image src="/assets/arrowupblack.png" width="8px" height="8px" /></span></p>
                        <p>Check out our v3 LP walkthrough and migration guides.</p></a>
                    </div>
                    <div className={styles.analyticsBlog}>
                        <a href=""><p>Top pools<span><Image src="/assets/arrowupblack.png" width="8px" height="8px" /></span></p>
                        <p>Explore Brandname Analytics.</p></a>
                    </div>
                </div>
            </div>
            <Block />
        </div>
    );
}
Index.layout = "DeFi"
export default Index;