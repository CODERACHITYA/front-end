import React from 'react'
import styles from './card.module.css'
const Card = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
       <div className={styles.heading}>
         <img src={`/images/${icon}.png`} alt="logo" />
         <h1 className={styles.headingtext}>{title}</h1>
         </div>
         {children}
     </div>
  )
}

export default Card