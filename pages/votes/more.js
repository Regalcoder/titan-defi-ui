import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/defi/More.module.css'
import Block from "../../component/defi/Block"


const More = () => {
    return ( 
        <div className="defimainScreen">
            <div className={styles.moreContainer}>
                <Link href="/votes"><Image src="/assets/backarrow.png" width="24px" height="24px" className={styles.arrowback} /></Link>
                <b className={styles.proposalTitle}>all proposal</b>
                <div className={styles.statusBadge}>Queued</div>
                <h2 className={styles.votingTitle}>Should Brandname governance contribute funding to the Nomic Foundation?</h2>
                <h6 className={styles.voteEnd}>Voting ended <span className={styles.date}>March 28, 2022, 1:15 AM UTC</span></h6>
                <div className={styles.voteResults}>
                    <div className={styles.voteFor}>
                        <div className={styles.values}>
                            <h6>For</h6>
                            <h6 className={styles.forValues}> 50,509,984 / <span className={styles.forTotal}>40,000,000</span></h6>                 
                        </div>
                        <hr></hr>
                    </div>
                    <div className={styles.voteAgainst}>
                        <div className={styles.values}>
                            <h6>Against</h6>
                            <h6 className={styles.againstValues}>11,887,306</h6>                 
                        </div>
                        <hr></hr>
                    </div>
                    
                </div>
                <div className={styles.details}>
                    <h5>Details</h5>
                    <h6 className={styles.transferDetails}>1: <b className={styles.token}>UNI</b>.transfer (<span className={styles.address}>0xA37dE9731806A75d2a4E178762dA5CC743C73709</span>, <b className={styles.blockNumber}>510204000</b>)</h6>
                </div>
                <div className={styles.description}>
                    <h5>Description</h5>
                    <h2>Should Brandname governance contribute funding to the Nomic Foundation?</h2>
            
                </div>
                <div className={styles.summary}>
                    <h5>Summary</h5>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quis sit massa varius a, vitae porttitor eget aliquam. Quis auctor enim tortor pulvinar purus velit. Ac, mi nisi imperdiet scelerisque eu. Ante etiam tellus imperdiet lobortis auctor neque, duis. Sit euismod vestibulum nibh</h6>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quis sit massa varius a, vitae porttitor eget aliquam. Quis auctor enim tortor pulvinar purus velit. Ac, mi nisi imperdiet scelerisque eu. Ante etiam tellus imperdiet lobortis auctor neque, duis. Sit euismod vestibulum nibh</h6>
                </div>
                <div className={styles.funding}>
                    <h5>Funding</h5>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quis sit massa varius a, vitae porttitor eget aliquam. Quis auctor enim tortor pulvinar purus velit. Ac, mi nisi imperdiet scelerisque eu. Ante etiam tellus imperdiet lobortis auctor neque, duis. Sit euismod vestibulum nibh</h6>
                </div>
                <div className={styles.why}>
                    <h5>Why Brandname</h5>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quis sit massa varius a, vitae porttitor eget aliquam. Quis auctor enim tortor pulvinar purus velit. Ac, mi nisi imperdiet scelerisque eu. Ante etiam tellus imperdiet lobortis auctor neque, duis. Sit euismod vestibulum nibh</h6>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quis sit massa varius a, vitae porttitor eget aliquam. Quis auctor enim tortor pulvinar purus velit. Ac, mi nisi imperdiet scelerisque eu. Ante etiam tellus imperdiet lobortis auctor neque, duis. Sit euismod vestibulum nibh</h6>

                </div>
                <div className={styles.proposer}>
                    <h5>Proposer</h5>
                    <h6 className={styles.address}>0x8c64C3D24c4Df13B451D5BC9292b75E5dbA2e02A</h6>
                </div>
            </div>
            <Block />
        </div>
    );
}
 
More.layout = "DeFi";
export default More;