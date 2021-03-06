import React from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'
const home = () => {
  const signInLinkStyle = {
    color: '#0077ff',
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px',
};
  return (
    <div className={styles.cardw}>
    <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
            We’re working hard to get Codershouse ready for everyone!
            While we wrap up the finishing youches, we’re adding people
            gradually to make sure nothing breaks
        </p>
        <div>
            <Button titles='Get your username' />
        </div>
        <div className={styles.signinWrapper}>
            <span className={styles.hasInvite}>
                Have an invite text?
            </span>
            <Link style={signInLinkStyle}>
                Sign in
            </Link>
        </div>
    </Card>
</div>
  )
}

export default home