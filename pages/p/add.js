
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/defi/Add.module.css'
import Block from "../../component/defi/Block"
// import NavBar from '../../component/defi/NavBar'

const Add = () => {
    return (  
        <div className="defimainScreen">
            <div className={styles.addContainer}>
                <div className={styles.addHeader}>
                    <Link href="/pool"><Image src="/assets/backarrow.png" width="24px" height="24px" /></Link>
                    <h6>Add liquidity </h6>
                    <div className={styles.sort}>
                        <button type="button">clear all</button>
                        <Link href="/pool"><Image src="/assets/settings.png" width="18.33px" height="18.33px" /></Link>
                    </div>
                </div>
                <hr></hr>
                <div className={styles.pairPrice}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className={styles.selectPair}>
                                <h6>select pair</h6>
                                <div className={styles.selectButtons}>
                                    <button type="submit">Select a button <span><Image src="/assets/selectdrop.svg" width="10.47px" height="5px" /></span></button>
                                    <button type="submit">Select a button <span><Image src="/assets/selectdrop.svg" width="10.47px" height="5px" /></span></button>

                                </div>
                                <div className={styles.feeTier}>
                                    <div className={styles.feeInfo}>
                                        <h6>fee tier</h6>
                                        <p>The % you will earn in fees.</p>
                                    </div>
                                    <input type="submit" value="Edit" />
                                </div>
                                <div className={styles.feeOptions}>
                                    <div className={styles.feeSelection}>
                                       <h6 className={styles.percent}>0.01%</h6>
                                       <p className={styles.selectionInfo}>Best for every stable pairs</p>
                                       <div className={styles.badge}>Not created</div>
                                    </div>
                                    <div className={styles.feeSelection}>
                                       <h6 className={styles.percent}>0.01%</h6>
                                       <p className={styles.selectionInfo}>Best for every stable pairs</p>
                                       <div className={styles.badge}>Not created</div>
                                    </div>
                                    <div className={styles.feeSelection}>
                                       <h6 className={styles.percent}>0.01%</h6>
                                       <p className={styles.selectionInfo}>Best for every stable pairs</p>
                                       <div className={styles.badge}>Not created</div>
                                    </div>
                                    <div className={styles.feeSelection}>
                                       <h6 className={styles.percent}>0.01%</h6>
                                       <p className={styles.selectionInfo}>Best for every stable pairs</p>
                                       <div className={styles.badge}>Not created</div>
                                    </div>
                                </div>
                                

                                <div className={styles.deposit}>
                                    <h6>deposit amounts</h6>
                                    <div className={styles.swapFrom}>
                                        <input type="text" placeholder="0.0" className={styles.swapinputNumber}  />
                                        <div className={styles.tokenSelect}>
                                            <Image src="/assets/eth.svg" width="24px" height="24px" />
                                            <h6>eth</h6>
                                            
                                        </div>
                                    </div>
                                    <div className={styles.swapTo}>
                                        <input type="text" placeholder="0.0" className={styles.swapinputNumber}  />
                                        <div className={styles.selectmyToken}>
                                        <select id="Tokens" >
                                            <option value="select">Select a token</option>
                                            <option value="btc">BTC</option>
                                            <option value="usdt">USDT</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className={styles.setPrice}>
                                <h6>set price range</h6>
                                <div className={styles.chartGraph}></div>
                                <div className={styles.priceRange}>
                                    <div className={styles.minPrice}>
                                        <h6>min price</h6>
                                        <div className={styles.increment}>
                                            <input type="submit" className={styles.subtract} value="-"/>
                                            <span className={styles.figures}>1269.6</span>
                                            <input type="submit" className={styles.add} value="+"/>
                                        </div>
                                        <h6>per ETH</h6>
                                    </div>
                                    <div className={styles.maxPrice}>
                                        <h6>max price</h6>
                                        <div className={styles.increment}>
                                            <input type="submit" className={styles.subtract} value="-"/>
                                            <span className={styles.figures}>535</span>
                                            <input type="submit" className={styles.add} value="+"/>
                                        </div>
                                        <h6>per ETH</h6>
                                    </div>
                                </div>
                                <input type="submit" className={styles.range} value="full range" />
                                <input type="button" className={styles.submitAction} value="connect wallet"></input>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>

            <Block />
        </div>
    );
}
Add.layout = "DeFi"
export default Add;