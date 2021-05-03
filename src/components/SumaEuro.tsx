import React, { ChangeEvent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../components/SumaEuro.module.scss'



interface Props {
    value:Number
    dataChange: (data:Number) => void

}

const SumaEuro = (props: Props) => {

    // const [value=, value=] = useState(0)
    var {value} = props

    const handleValue = () => {
        props.dataChange(value)
    }

    // const handleInputChange = (data: string) =>{
    //     value=(data)
    // }
     const handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
        props.dataChange(+e.target.value)
    }


    return (
        <div className={styles.sumaEuro}>
            <p className={styles.sumaTitle} onClick={handleValue}>Suma, ktorou chcem prispieť</p>
            <nav className={styles.sumaUl}>
                <NavLink  to= '/' className={styles.sumaLia} activeClassName={styles.active} onClick={() => {
                    value=(5) 
                    props.dataChange(value)
                }}>
                    <span>5 €</span>
                </NavLink>
                <NavLink to= '/' className={styles.sumaLib} onClick={() => {
                    value=(10)
                    props.dataChange(value)
                }}>
                    <span>10 €</span>
                </NavLink>
                <NavLink to= '/' className={styles.sumaLic} onClick={() => {
                    value=(20)
                    props.dataChange(value)
                }}>
                    <span>20 €</span>
                </NavLink>
                <NavLink to= '/' className={styles.sumaLid} onClick={() => {
                    value=(30)
                    props.dataChange(value)
                }}>
                    <span>30 €</span>
                </NavLink>
                <NavLink to= '/' className={styles.sumaLie} onClick={() => {
                    value=(50)
                    props.dataChange(value)
                }}>
                    <span>50 €</span>
                </NavLink>
                <NavLink to= '/' className={styles.sumaLif} onClick={() => {
                    value=(100)
                    props.dataChange(value)
                }}>
                    <span>100 €</span>
                </NavLink>

                <NavLink to= '/' className={styles.sumaForm}>
                    <input className={styles.sumaInput} type="text" onChange={handleInputChange} autoFocus/>
                    <div className={styles.sumaEuroIcon}>€</div>
                    <div className={styles.sumaUnder}></div>
                </NavLink>


            </nav>

            {/* <form className={styles.sumaForm}>
                <input className={styles.sumaInput} type="text" autoFocus/>
            </form>
            <span className={styles.sumaEuroIcon}>€</span>
            <span className={styles.sumaUnder}></span> */}

        </div>

    )
}

export default SumaEuro
