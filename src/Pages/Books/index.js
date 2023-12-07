import React from 'react';
import styles from './books.module.css';
import CustomTable from '../../Components/Table';
import Header from '../../Components/Header';
import { useLanguage } from '../../Context/languageContext';
import CustomButton from '../../Components/CustomButton';

const Books = () => {

    const { language } = useLanguage()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Book name', width: 250 },
        { field: 'status', headerName: 'status', width: 130 },
        { field: 'version', headerName: 'Version', type: 'number', width: 90 },
    ];

    const bookData = [
        { id: 1, name: 'The Catcher in the Rye', status: 'available', version: 1 },
        { id: 2, name: 'To Kill a Mockingbird', status: 'borrowed', version: 2 },
        { id: 3, name: '1984', status: 'available', version: 1 },
        { id: 4, name: 'The Great Gatsby', status: 'available', version: 1 },
        { id: 5, name: 'One Hundred Years of Solitude', status: 'borrowed', version: 2 },
        { id: 6, name: 'Brave New World', status: 'available', version: 1 },
        { id: 7, name: 'The Lord of the Rings', status: 'available', version: 1 },
        { id: 8, name: 'Pride and Prejudice', status: 'borrowed', version: 2 },
        { id: 9, name: 'The Hobbit', status: 'available', version: 1 },
        { id: 10, name: 'Harry Potter and the Sorcerer\'s Stone', status: 'available', version: 1 },
      ];


    return (
        <div>
            <Header />
            <div className={styles.subHeader} >
                <h1 className={styles.heading} >{language.manageBooksHere}</h1>
                <CustomButton btnLabel="Add book" />
            </div>
            <CustomTable columns={columns} rows={bookData} />
        </div>

    )
}

export default Books;