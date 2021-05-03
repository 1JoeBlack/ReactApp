import React, {useState} from 'react'

import styles from './FinType.module.scss'
import imgUtulok from '../assets/img/penazenka.png'
import imgNadacia from '../assets/img/packa.png'


interface Props {

    mydata: string
    dataChange: (data:string) => void

}

const FinType = (props: Props) => {

    // var {mydata} = props
    
    const [finance, setFinance] = useState('')
    const [icon, setIcon] = useState(imgUtulok)
    const [iconx, setIconx] = useState(imgNadacia)
    const [utulok, setUtulok] = useState(styles.utulok)
    const [nadacia, setNadacia] = useState(styles.nadacia)
    console.log(finance)
    
    return (
        <article className={styles.finType}>

            <aside className={utulok} onClick={() => {setFinance('Chcem finančne prispieť konkrétnemu útulku');
                                                             setIcon(imgNadacia);
                                                             setIconx(imgUtulok);
                                                             setUtulok(styles.activeUtulok);
                                                             setNadacia(styles.activeNadacia);
                                                             props.dataChange('Chcem finančne prispieť konkrétnemu útulku');
                                                             }}>

                <img className={styles.imgUtulok} src={icon} alt=""/>
                <p className={styles.titleUtulok}>Chcem finančne prispieť konkrétnemu útulku</p>
            </aside>

            <aside className={nadacia} onClick={() => {setFinance('Chcem finančne prispieť celej nadácii');
                                                              setIcon(imgUtulok);
                                                              setIconx(imgNadacia);
                                                              setUtulok(styles.utulok);
                                                              setNadacia(styles.nadacia);
                                                              props.dataChange('Chcem finančne prispieť celej nadácii');
                                                              }}>

                <img className={styles.imgNadacia} src={iconx} alt=""/>
                <p className={styles.titleNadacia}>Chcem finančne prispieť celej nadácii</p>
            </aside>

        </article>
    )
}

export default FinType


