import React from 'react'
import { useLanguage } from '../../Context/languageContext';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
import styles from "./records.module.css"
import CustomButton from '../../Components/CustomButton';

const Records = () => {
    const { language } = useLanguage()

    const tableHeader = ['ID', 'Name', 'Status', 'Student ID', 'Issue Date', 'Return Date', 'Actions'];

    const tableData = [
        { id: 1, bookName: 'The Catcher in the Rye', status: 'available', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 2, bookName: 'To Kill a Mockingbird', status: 'borrowed', studentId: 2, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 3, bookName: '1984', status: 'available', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 4, bookName: 'The Great Gatsby', status: 'available', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 5, bookName: 'One Hundred Years of Solitude', status: 'borrowed', studentId: 2, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 6, bookName: 'Brave New World', status: 'available', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 7, bookName: 'The Lord of the Rings', status: 'available', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 8, bookName: 'Pride and Prejudice', status: 'borrowed', studentId: 2, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 9, bookName: 'The Hobbit', status: 'available', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
        { id: 10, bookName: 'Harry Potter and the Sorcerer\'s Stone', status: 'available', studentId: 1, issueDate: '15/12/2023', returnDate: "30/12/2023" },
    ];


    return (
        <>
            <Header />
            <div className={styles.recordsMainContainer}>
                <div className={styles.subHeader} >
                    <h1 className={styles.heading} >{language.manageRecordsHere}</h1>
                    <CustomButton btnLabel="Add record" />
                </div>
                <Table tableHeader={tableHeader} tableData={tableData} />
            </div>
        </>
    )
}

export default Records