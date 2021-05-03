import React from 'react'
import { Link } from 'react-router-dom'

import styles from './TheFooter.module.scss'
import logo from '../assets/img/gblogo.png'

interface Props {
    
}

const TheFooter = (props: Props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.separator}></div>
            <img className={styles.icon} src={logo} alt="logo"/>
            <h2 className={styles.titlea}>Nadácia Good boy</h2>
                <div className={styles.descra}>
                    <Link to='#'>O projekte</Link>
                    <br/>
                    <Link to='#'>Ako na to</Link>
                    <br/>
                    <Link to='#'>Kontakt</Link> 
                </div>
            <h2 className={styles.titleb}>Nadácia Good boy</h2>
                <p className={styles.descrb}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. 
                </p>
            <h2 className={styles.titlec}>Nadácia Good boy</h2>
                <p className={styles.descrc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet. 
                </p>
        </div>
    )
}

export default TheFooter
