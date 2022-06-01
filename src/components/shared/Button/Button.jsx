import React from 'react'
import styles from './button.module.css'

const Button = ({titles}) => {
  return <>
    <button className={styles.button}>
              <span>{titles}</span>
              <img src="/images/arrow-forward.png" alt="" className={styles.arror} />
            </button>
            </>
}

export default Button