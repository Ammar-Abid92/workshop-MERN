import React from 'react';
import styles from './table.module.css';
import { MdDelete, MdEdit } from 'react-icons/md';

const Table = ({ tableHeader, tableData, isEditable }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {tableHeader?.map((header, index) => {
            return (
              <th key={index}>{header}</th>
            )
          })}

        </tr>
      </thead>
      <tbody>
        {tableData?.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row)?.map((value) => {
              return (
                <td>{value}</td>
              )
            })}
            <td className={styles.actionsColumn}><MdDelete /><MdEdit /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
