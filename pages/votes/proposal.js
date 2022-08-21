import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/defi/Createproposal.module.css'
import Block from "../../component/defi/Block"

const Create = () => {
    return ( 
        <div className="defimainScreen">
            <div className={styles.createContainer}>
                <Link href="/votes"><Image src="/assets/backarrow.png" width="24px" height="24px" /></Link>
                <h6 className={styles.proposalTitle}>create proposal</h6>
                <div className={styles.tips}>
                    <p><b>Tip:</b> Select an action and describe your proposal for the community. The proposal cannot be modified after 
                        submission, so please verify all information before submitting. The voting period will begin immediately and last for 7 days.
                         To propose a custom action, <a href="">read the docs</a></p>
                </div>
                <div className={styles.action}>
                    <h6>proposed action</h6>
                    <select id="Tokens" className={styles.actionSelect} >
                        <option value="transfer">Transfer Token</option>
                        <option value="btc">BTC</option>
                        <option value="usdt">USDT</option>
                    </select>
                </div>
                <div className={styles.sendTo}>
                    <h6>To</h6>
                    <input type="text" placeholder="Wallet Address or ENS name" />
                </div>
                <div className={styles.valueAmount}>
                    <input type="text" placeholder="0.00" />
                    <div className={styles.tokenSelect}>
                        <Image src="/assets/eth.svg" width="23px" height="23px" />
                        <select id="ETH" >
                        <option value="ethereum">ETH</option>
                        <option value="btc">BTC</option>
                        <option value="usdt">USDT</option>
                        </select>
                    </div>
                </div>
                <div className={styles.proposalReport}>
                    <h6>Proposal</h6>
                    <input type="text" placeholder="Proposal Title" className={styles.proposalReportTitle}></input>
                    <hr />
                    <div class={styles.summary}>
                        <h6>##Summary</h6>
                        <input type="text" placeholder="Insert your summary here"></input>
                    </div><br></br>
                    <div class={styles.methodology}>
                        <h6>Methodology</h6>
                        <input type="text" placeholder="Insert your methodology here"></input>
                    </div><br></br>
                    <div class={styles.conclusion}>
                        <h6>##Conclusion</h6>
                        <input type="text" placeholder="Insert your conclusion here"></input>
                    </div>
                </div>
                <input type="submit" value="You don't have enough votes to submit a proposal" className={styles.submitAction}></input> <br />
                <p className={styles.help}>Don’t have 2.5M votes? Anyone can create an autonomous proposal using <Link href="/votes"><a href="">fish.vote</a></Link></p>
            </div>

            <Block />
        </div>
        
    );
}


Create.layout = "DeFi";
export default Create;