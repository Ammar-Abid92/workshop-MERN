import React, { useState } from 'react';
import TextBox from '../../Components/TextBox';
import styles from './login.module.css';
import CustomButton from '../../Components/CustomButton';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className={styles.loginPage}>
            <div className={styles.loginBox}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <TextBox value={email} setter={setEmail} label={'Email Address'} type={'email'} required={true} />
                    </div>
                    <div className="input-group">
                        <TextBox value={password} setter={setPassword} label={'Password'} type={'password'} required={true} />
                    </div>
                    <CustomButton btnLabel={'Login'} />
                </form>
            </div>
        </div>
    );
}

export default Login;
