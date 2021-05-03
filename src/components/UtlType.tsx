import React, { useState } from 'react'
import styles from './UtlType.module.scss'

import axios from 'axios'


interface Props {
    
    mydata:string
    utulok:string
    dataChange: (data:string) => void

}

const UtlType = (props: Props) => {

    // const [utulok, setUtulok] = useState('')
    const [mylist, setMylist] = useState([{id:1, name:'Vyberte útulok zo zoznamu'}])

    var {mydata} = props
    var {utulok} = props
 

    const extractData = ({id, name}: any) => {
        return {id, name}
    }


    const handleChange = () => {

        axios.get('https://frontend-assignment-api.goodrequest.com/api/v1/shelters')
             .then(response => {
                let listUtulok = response.data.shelters.map( (item:any) => extractData(item))
                setMylist(listUtulok)
             })
    }

    const handleUtulok=(data:any)=>{

        props.dataChange(data.target.value);
                                                             
    }


    return (
        <div className={styles.utlType}>
            <div className={styles.border}></div>
            <p className={styles.title}>Najviac mi záleží na útulku</p>
            <p className={styles.required}>{
                mydata === 'Chcem finančne prispieť celej nadácii'? 'Nepovinné':'Povinné'
            }</p>


            <form className={styles.form} onChange={handleUtulok}>
                <label className={styles.label}>
                Útulok 
                <select className={styles.select} onClick={handleChange} >
                {mylist.map(({ id, name }) => (
                    <option key={id} value={name}>
                        {name}
                    </option>
                ))}
                </select>
                    
                </label>
            </form>        

        </div>
        
    )
    
}

export default UtlType
