import React from 'react'
import { Link } from 'react-router-dom';

import styles from '../views/PageHeader.module.scss'
import homeStyles from '../views/Confirmation.module.scss'
import dog from '../assets/img/pes.png'



interface Props {
    
}

const Confirmation = (props: Props) => {
    return (

        <div>

        <div className={homeStyles.home}>
            <div className={homeStyles.sideBar}>
                <div className={homeStyles.a}></div>
                <div className={homeStyles.b}></div>
                <div className={homeStyles.c}></div>
            </div>

            <ul className={homeStyles.ulFinal}>
                <li>
                    <p className={homeStyles.titleA}>Akou formou chcem pomôcť</p>
                    <p className={homeStyles.descriptionA}>Chcem finančne prispieť celej nadácii</p>
                </li>
                <li>
                    <p className={homeStyles.titleB}>Najviac mi záleží na útulku</p>
                    <p className={homeStyles.descriptionB}>Mestský útulok, Žilina</p>
                </li>
                <li>
                    <p className={homeStyles.titleC}>Suma ktorou chcem pomôcť</p>
                    <p className={homeStyles.descriptionC}>50 €</p>
                </li>
                <li>
                    <p className={homeStyles.titleD}>Meno a priezvisko</p>
                    <p className={homeStyles.descriptionD}>Peter Reguli</p>
                </li>
                <li>
                    <p className={homeStyles.titleE}>E-mailová adresa</p>
                    <p className={homeStyles.descriptionE}>peter.reguli@goodrequest.com</p>
                </li>
                <li>
                    <p className={homeStyles.titleF}>Telefónne číslo</p>
                    <p className={homeStyles.descriptionF}>+421 902 237 207</p>
                </li>

            </ul>

            <form className={homeStyles.form}>
                <p className={homeStyles.formP}>Súhlasím so spracovaním mojich osobných údajov</p>
                <input type="checkbox" className={homeStyles.input}/>
            </form>

            <Link to="/credentials">
                <div className={homeStyles.buttonprev}>
                    Späť 
                </div>
            </Link>
            
            <Link to="/confirmation">
                <div className={homeStyles.buttonnext}>
                    Odoslať formulár
                </div>
            </Link>  
        </div>   

        
        <div className={styles.pageheader}>
             <h1 className={styles.title}>Skontrolujte si zadané údaje</h1>
             <img className={styles.dog} src={dog} alt=""/>
        </div>
        </div>

    )
}

export default Confirmation
