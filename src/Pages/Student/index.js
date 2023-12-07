import React from 'react'
import { useLanguage } from '../../Context/languageContext';
import CustomTable from '../../Components/Table';
import Header from '../../Components/Header';
import styles from "./students.module.css"
import CustomButton from '../../Components/CustomButton';

const Students = () => {
    const { language } = useLanguage()

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 230 },
        { field: 'department', headerName: 'Department', width: 230 },
        {
            field: 'rollNo',
            headerName: 'Roll #',
            type: 'number',
            width: 90,
        },
        {
            field: 'year',
            headerName: 'Year',
            type: 'number',
            width: 90,
        },
        
    ];

    const rows = [
        { id: 1, department: 'Snow', name: 'Jon', rollNo: 35, year: 'TE' },
        { id: 2, department: 'Lannister', name: 'Cersei', rollNo: 42 , year: 'TE' },
        { id: 3, department: 'Lannister', name: 'Jaime', rollNo: 45 , year: 'TE'},
        { id: 4, department: 'Stark', name: 'Arya', rollNo: 16 , year: 'TE'},
        { id: 5, department: 'Targaryen', name: 'Daenerys', rollNo: 20 , year: 'TE' },
        { id: 6, department: 'Melisandre', name: 'Test', rollNo: 150 , year: 'TE' },
        { id: 7, department: 'Clifford', name: 'TErrara', rollNo: 44 , year: 'TE'},
        { id: 8, department: 'Frances', name: 'Rossini', rollNo: 36 , year: 'TE'},
        { id: 9, department: 'Roxie', name: 'Harvey', rollNo: 65 , year: 'TE'},
    ];


    return (
        <div>
            <Header />
            <div className={styles.subHeader} >
                <h1 className={styles.heading} >{language.manageStudentsHere}</h1>
                <CustomButton btnLabel="Add student" />
            </div>
            
            <CustomTable columns={columns} rows={rows} />
        </div>
    )
}

export default Students;