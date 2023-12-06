import React from 'react'
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Link to='/books'>Books</Link>
            <Link to='/records'>Records</Link>
            <Link to='/students'>Students</Link>
        </div>
    )
}

export default Header;