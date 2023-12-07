import React, { useState } from 'react';
import styles from './books.module.css';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import { useLanguage } from '../../Context/languageContext';
import CustomButton from '../../Components/CustomButton';
import CustomModal from '../../Modals';

const Books = () => {

    const [openModal, setOpenModal] = useState(false);

    const onModalClose = () => {
        setOpenModal((prev) => !prev);
    }

    const { language } = useLanguage()
    const tableHeader = ['ID', 'Name', 'Status', 'Version', 'Actions'];
    const tableData = [
        { ID: 1, Name: 'The Catcher in the Rye', Status: 'available', Version: 1 },
        { ID: 2, Name: 'To Kill a Mockingbird', Status: 'borrowed', Version: 2 },
        { ID: 3, Name: '1984', Status: 'available', Version: 1 },
        { ID: 4, Name: 'The Great Gatsby', Status: 'available', Version: 1 },
        { ID: 5, Name: 'One Hundred Years of Solitude', Status: 'borrowed', Version: 2 },
        { ID: 6, Name: 'Brave New World', Status: 'available', Version: 1 },
        { ID: 7, Name: 'The Lord of the Rings', Status: 'available', Version: 1 },
        { ID: 8, Name: 'Pride and Prejudice', Status: 'borrowed', Version: 2 },
        { ID: 9, Name: 'The Hobbit', Status: 'available', Version: 1 },
        { ID: 10, Name: 'Harry Potter and the Sorcerer\'s Stone', Status: 'available', Version: 1 },
    ];

    return (
        <>
            <Header />
            <div className={styles.booksMainContainer}>
                <div className={styles.subHeader} >
                    <h1 className={styles.heading} >{language.manageBooksHere}</h1>
                    <CustomButton btnLabel="Add book" onClick={() => setOpenModal(true)} />
                </div>
                <Table tableHeader={tableHeader} tableData={tableData} />
            </div>
            {openModal && <CustomModal formName={'books'} isOpen={openModal} onClose={onModalClose} />}
        </>
    )
}

export default Books;