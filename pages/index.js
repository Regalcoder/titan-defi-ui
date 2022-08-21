import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Block from "/component/defi/Block"
import Modal3 from '../component/defi/Modal3'
import Modal2 from '../component/defi/Modal2'
import React, {useState} from 'react'


const Home = () => {
  const [openModal2, setOpenModal2] = useState(false)
  const [openModal3, setOpenModal3] = useState(false)

  return (  
      <div className="defimainScreen">
        {/* <NavBar /> */}
        <div className={styles.tokenSwap}>
          <div className={styles.swapHeader}>
            <h4>Swap</h4>
            <a href=""><Image src="/assets/settings.png" width="18px" height="18px" /></a>
          </div>
          <div className={styles.swapFrom}>
            <input type="number" placeholder="0.0" className={styles.swapinputNumber}  />
            <div className={styles.tokenSelect}>
              <img src="/assets/eth.svg" width="23px" height="23px" />
                <select id="ETH" >
                  <option value="ethereum">ETH</option>
                  <option value="btc">BTC</option>
                  <option value="usdt">USDT</option>
                </select>
            </div>
          </div>  <span className={styles.dropicon}><Image src="/assets/arrowdown.png" width="16px" height="16px" /> </span>
          <div className={styles.swapTo}>
            <input type="number" placeholder="0.0" className={styles.swapinputNumber}  />
            <button onClick={() => setOpenModal2(true)} className= {styles.selectButton}>Select a Token <i className={styles.arrowDown}></i></button>
          </div>
          <button type="button" onClick={() => setOpenModal3(true)} className={styles.connectButton}>connect wallet</button>
        </div>
        <Block />
        <Modal2 open2={openModal2} onClose={()=> setOpenModal2(false)} />
          <Modal3 open3={openModal3} onClose3={()=> setOpenModal3(false)}/>
      </div>
  );
}

Home.layout = "DeFi"
export default Home;