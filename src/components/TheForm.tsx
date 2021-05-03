import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './TheForm.module.scss'
import homeStyles from '../views/Credentials.module.scss'



interface Props {

    name: string
    dataChangeName: (data:string) => void
    dataChangeLast: (data:string) => void
    dataChangeEmail: (data:string) => void 
    dataChangePhone: (data:string) => void 
    dataChangeValid: (data:string) => void 
}

const TheForm = (props: Props) => {

    const{name} = props

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [validator, setValidator] = useState('dsda')

    const handleSubmitB = () => {
        var warnings = ''

        if (firstName.length < 2 || firstName.length > 20) {
            warnings += 'Meno 2-20 znakov'
        }
        if (lastName.length < 2 || lastName.length > 30) {
            warnings += '\nPriezvisko 2-30 znakov'
        }
        if (!(email.includes( "@"))){
            warnings += '\nZadajte správny tvar emailu'
        }

        if (warnings === '') {
            setValidator(warnings)
            props.dataChangeName(firstName)
            props.dataChangeLast(lastName)
            props.dataChangeEmail(email)   
            props.dataChangePhone(phone)
            props.dataChangeValid(validator) 
        }
        else{
            alert(warnings)
            props.dataChangeValid(warnings) 
            setValidator(warnings)
        }
        
    }

    const handleSubmit = (a:FormEvent<HTMLFormElement>) =>{
        a.preventDefault()

        var warnings = ''

        if (firstName.length < 2 || firstName.length > 20) {
            warnings += 'Meno 2-20 znakov'
        }
        if (lastName.length < 2 || lastName.length > 30) {
            warnings += '\nPriezvisko 2-30 znakov'
        }
        if (!(email.includes( "@"))){
            warnings += '\nZadajte správny tvar emailu'
        }

        if (warnings == '') {
            props.dataChangeName(firstName)
            props.dataChangeLast(lastName)
            props.dataChangeEmail(email)   
            props.dataChangePhone(phone)
            props.dataChangeValid(validator) 
            setValidator(warnings)
        }
        else{
            alert(warnings)
            props.dataChangeValid(warnings) 
            setValidator(warnings)
        }
    }
    
    const handleInputName = (e:ChangeEvent<HTMLInputElement>) =>{
        setFirstName(e.target.value)
    }

    const handleInputLast = (e:ChangeEvent<HTMLInputElement>) =>{
        setLastName(e.target.value)
    }

    const handleInputEmail = (e:ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    const handleInputPhone = (e:ChangeEvent<HTMLInputElement>) =>{
        setPhone(e.target.value)
    }



    return (
        
        <div className={styles.credentials}>
            <p className={styles.title}>O vás</p>

            <form onSubmit={handleSubmit}>
                <label className={styles.labelName}>
                    <span className={styles.spanName}>Meno</span> 
                    <input className={styles.inputName} type="text" value={firstName} placeholder="Zadajte Vaše meno" onChange={handleInputName}/>
                </label>
            </form>    

            <form onSubmit={handleSubmit}>
                <label className={styles.labelLast}>
                    <span className={styles.spanLast}>Priezvisko</span> 
                    <input className={styles.inputLast} type="text" value={lastName} placeholder="Zadajte Vaše priezvisko" onChange={handleInputLast} required/>
                </label>
            </form>    

            <form onSubmit={handleSubmit}>
                <label className={styles.labelEmail}>
                    <span className={styles.spanEmail}>E-mailová adresa</span> 
                    <input className={styles.inputEmail} type="email" value={email} placeholder="Zadajte Váš e-mail" onChange={handleInputEmail}/>
                </label>
            </form>    

            <form onSubmit={handleSubmit}>       
                <label className={styles.labelPhone}>
                    <span className={styles.spanPhone}>Telefónne číslo</span> 
                    <div className={styles.iconPhone}>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2775 3.96552H1.72253C0.771174 3.96552 0 4.7367 0 5.68805V8.98851H23V5.68805C23 4.7367 22.2288 3.96552 21.2775 3.96552Z" fill="#F5F5F5"/>
                        <path d="M0 17.3119C0 18.2633 0.771174 19.0345 1.72253 19.0345H21.2775C22.2288 19.0345 23 18.2633 23 17.3119V14.0115H0V17.3119Z" fill="#FF4B55"/>
                        <path d="M23 8.98842H0V14.0111H23V8.98842Z" fill="#41479B"/>
                        <path d="M5.84993 15.2413C5.73255 15.1739 2.97412 13.5695 2.97412 11.1034V7.73276H8.92241V11.1034C8.92241 13.5695 6.16398 15.1739 6.0466 15.2413L5.94826 15.2974L5.84993 15.2413Z" fill="#FF4B55"/>
                        <path d="M7.50632 10.5086L6.57154 10.6318H6.26001V10.0739H6.44693L7.19475 10.197L7.09345 9.76233L7.19475 9.32763L6.44693 9.45071H6.26001V9.26231L6.38314 8.32758L5.94843 8.45421L5.51372 8.32758L5.63685 9.26231V9.45071H5.44984L4.70211 9.32763L4.80337 9.76233L4.70211 10.197L5.44984 10.0739H5.63685V10.6318H5.32527L4.39053 10.5086L4.51712 10.9433L4.39053 11.378L5.32527 11.2549H5.63685V12.6897H6.26001V11.2549H6.57154L7.50632 11.378L7.37973 10.9433L7.50632 10.5086Z" fill="#F5F5F5"/>
                        <path d="M5.94822 12.0948C5.53862 12.0948 5.18733 12.3433 5.03622 12.6976C5.00953 12.6954 4.98402 12.6896 4.95684 12.6896C4.42896 12.6896 4.00153 13.1034 3.97125 13.6236C4.77423 14.6121 5.77999 15.2011 5.84989 15.2413L5.94822 15.2974L6.04655 15.2413C6.11645 15.2011 7.12221 14.6121 7.92519 13.6236C7.89495 13.1034 7.46748 12.6896 6.9396 12.6896C6.91242 12.6896 6.88686 12.6954 6.86022 12.6976C6.70911 12.3433 6.35782 12.0948 5.94822 12.0948Z" fill="#41479B"/>
                        <path d="M8.72416 7.93105C8.72416 7.93105 8.72416 10.3104 8.72416 11.1035C8.72416 13.4828 5.94831 15.069 5.94831 15.069C5.94831 15.069 3.17245 13.4828 3.17245 11.1035C3.17245 10.3104 3.17245 7.93105 3.17245 7.93105H8.72416ZM9.12069 7.53448H8.72412H3.17245H2.77588V7.93105V11.1035C2.77588 13.6832 5.63008 15.3438 5.75155 15.4133L5.94831 15.5257L6.14506 15.4133C6.26658 15.3438 9.12073 13.6832 9.12073 11.1035V7.93105V7.53448H9.12069Z" fill="#F5F5F5"/>
                        </svg>
                    </div>
                    <input className={styles.inputPhone} type="tel" value={phone} placeholder="+421" onChange={handleInputPhone}/>
                </label>

            </form>

            <Link to="/">
                <div className={homeStyles.buttonprev}>
                    Späť 
                </div>
            </Link>
            
            <Link onClick={handleSubmitB} to= {validator ===''? "/confirmation" : "/credentials"} >
                <div className={homeStyles.buttonnext}>
                    Pokračovať
                </div>
            </Link>  
        </div>
    )
}

export default TheForm

