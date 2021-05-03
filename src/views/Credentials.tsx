import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom';

import styles from '../views/PageHeader.module.scss'
import homeStyles from '../views/Credentials.module.scss'
import dog from '../assets/img/pes.png'

import TheForm from '../components/TheForm'


interface Props {
    
}

const Credentials = (props: Props) => {

    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [validator, setValidator] = useState('')



    const handleName = (data: string) => {
        setName(data)
    }

    const handleLast = (data: string) =>{
        setLast(data)
    }

    const handleEmail = (data: string) =>{
        setEmail(data)
    }

    const handlePhone = (data: string) =>{
        setPhone(data)
    }

    const handleValid = (data:string) =>{
        setValidator(data)
    }

    console.log(name +" "+ last + "\n" + email + "\n" + "+421" + phone)
    console.log(validator)


    return (

        <div>

        <div className={homeStyles.home}>
            <div className={homeStyles.sideBar}>
                <div className={homeStyles.a}></div>
                <div className={homeStyles.b}></div>
                <div className={homeStyles.c}></div>
            </div>

            <TheForm name = {name}
                     dataChangeName = {handleName}
                     dataChangeLast = {handleLast}
                     dataChangeEmail = {handleEmail}
                     dataChangePhone = {handlePhone}
                     dataChangeValid = {handleValid}
            ></TheForm>
            
  
            
        </div>   

        <div className={styles.pageheader}>
             <h1 className={styles.title}>Potrebujeme od Vás zopár informácií</h1>
             <img className={styles.dog} src={dog} alt=""/>
        </div>

        </div>

    )
}

export default Credentials
