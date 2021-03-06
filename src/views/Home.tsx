import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import styles from '../views/PageHeader.module.scss'
import homeStyles from '../views/Home.module.scss'
import dog from '../assets/img/pes.png'

import FinType from '../components/FinType'
import UtlType from '../components/UtlType'
import SumaEuro from '../components/SumaEuro';


interface Props {
    
}

const Home = (props: Props) => {
    

    const [mydata, setMydata] = useState('')
    const [req, setReq] = useState('')
    const [utulok, setUtulok] = useState('')
    const [value, setValue] = useState(0)
    const [numReq, setNumReq] = useState('')
    const [utulokReq, setUtulokReq] = useState('')


    const handleData = (data: any) => {
        setMydata(data)
    }
    const handleUtulokData = (data: any) => {
        setUtulok(data)
    }
    const handleValueChange = (data: any) => {
        setValue(data)
    }

    const handleRequirements = () => {

    }

    console.log('platba bude pre: ' + mydata + ' pre utulok '+ utulok + ' sumou ' + value) 

    return (
        

        <div>

        <div className={homeStyles.home}>
            <div className={homeStyles.sideBar}>
                <div className={homeStyles.a}></div>
                <div className={homeStyles.b}></div>
                <div className={homeStyles.c}></div>
            </div>


            <FinType mydata = {mydata}
                     dataChange = {handleData}
            ></FinType>

            <UtlType utulok = {utulok}
                     mydata = {mydata}
                     dataChange = {handleUtulokData}
            ></UtlType>

            <SumaEuro value = {value}
                      dataChange = {handleValueChange}
            ></SumaEuro>

            {/* <div className={stylesX.finType}>
                <h1 className={stylesX.test}>
                    patba bude pre: { mydata }
                </h1>
            </div> */}

            <Link to={ value===0? '/':'/credentials' && isNaN(value)? '/':'/credentials' && mydata===''? '/': mydata==='Chcem finan??ne prispie?? celej nad??cii'? '/credentials': utulok===''? '/':'/credentials'}>
                <div className={homeStyles.buttonnext} onClick={
                    () => {
                    mydata ===''? setReq('*ako chcete prispie??'):mydata ==='Chcem finan??ne prispie?? celej nad??cii'? setUtulokReq(''): utulok===''? setUtulokReq('*vyberte ??tulok'):setUtulokReq('')
                    isNaN(value)? setNumReq('*Suma mus?? obsahova?? ????slice ale nie 0'): value===0? setNumReq('*Suma mus?? obsahova?? ????slice ale nie 0'):setNumReq('')           
                }}>
                    Pokra??ova?? 
                </div>
                <p className={homeStyles.req}>{req}</p>
                <p className={homeStyles.numReq}>{numReq}</p>
                <p className={homeStyles.utulokReq}>{utulokReq}</p>


            </Link>

        </div>   

        <div className={styles.pageheader}>
             <h1 className={styles.title}>Vyberte si mo??nos??, ako chcete pom??c??</h1>
             <img className={styles.dog} src={dog} alt=""/>
        </div>

        </div>

    )
}

export default Home
