import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/defi/Vote.module.css'
import Block from "../../component/defi/Block"

const Index = () => {
    return ( 
        <div className="defimainScreen">
            <div className={styles.voteContainer}>
                <div className={styles.blogContents}>
                    <h6>Brandname Governance</h6>
                    <p>UNI tokens represent voting shares in Brandname governance. You can vote on each proposal yourself or delegate your votes to a third party.</p>
                    <a href="">Read more about Brandname governance</a>
                </div>

                <div className={styles.proposals}>
                    <div className={styles.proposalTitle}>
                        <h5>Proposals</h5>
                        <Link className={styles.link} href="/"><button type="button">create proposal</button></Link>
                    </div>

                    <div className={styles.proposalTable}>
                        <Link href=""><div className={styles.proposalList}>
                            <h6 className={styles.proposalTime}>2:13</h6>
                            <p className={styles.proposalRequest}>Should Brandname governance contribute funding to the Nomic Foundation?</p>
                            <div className={styles.statusBadge}>Queued</div>
                            </div>
                        </Link>
                        <Link href=""><div className={styles.proposalList}>
                            <h6 className={styles.proposalTime}>2:13</h6>
                            <p className={styles.proposalRequest}>Should Brandname governance contribute funding to the Nomic Foundation?</p>
                            <div className={styles.statusBadgegreen}>Executed</div>
                            </div>
                        </Link>
                        <Link href=""><div className={styles.proposalList}>
                            <h6 className={styles.proposalTime}>2:13</h6>
                            <p className={styles.proposalRequest}>Should Brandname governance contribute funding to the Nomic Foundation?</p>
                            <div className={styles.statusBadge}>Queued</div>
                            </div>
                        </Link>
                    </div>
                    <p className={styles.threshold}>A minimum threshold of 0.25% of the total UNI supply is required to submit proposals</p>
                </div>
            </div>
            <Block />
        </div>
     );
}

Index.layout = "DeFi"
export default Index;