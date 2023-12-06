import React from 'react';
import styles from './home.module.css';
import Header from '../../Components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.homeContainer}>
                <h1>Welcome To Library Management System!</h1>
            </div>
        </>
    )
}

export default Home;