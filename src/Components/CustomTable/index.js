import React from 'react'

const Table = ({ data }) => {
    return (
        <div>
            <h2>Book Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Version</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.status}</td>
                            <td>{book.version}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;