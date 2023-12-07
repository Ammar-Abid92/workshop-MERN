import React, { useState } from 'react';
import styles from './modal.module.css';
import { ImCross } from "react-icons/im";
import CustomButton from '../Components/CustomButton';

const CustomModal = ({ isOpen, onClose, formName }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        status: '',
        version: '',
        studentId: '',
        issueDate: '',
        returnDate: '',
        department: '',
        year: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <span className={styles.closeBtn} onClick={onClose}>
                    <ImCross />
                </span>
                {formName === 'books' ? <form onSubmit={handleSubmit}>
                    <label>
                        ID:
                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Status:
                        <input
                            type="text"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Version:
                        <input
                            type="text"
                            name="version"
                            value={formData.version}
                            onChange={handleChange}
                        />
                    </label>
                    <CustomButton btnLabel={'Submit'} />
                </form> :
                    formName === 'records' ? <form onSubmit={handleSubmit}>
                        <label>
                            ID:
                            <input
                                type="text"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Status:
                            <input
                                type="text"
                                name="name"
                                value={formData.status}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Student ID:
                            <input
                                type="text"
                                name="version"
                                value={formData.studentId}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Issue Date:
                            <input
                                type="text"
                                name="version"
                                value={formData.issueDate}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Return Date:
                            <input
                                type="text"
                                name="version"
                                value={formData.returnDate}
                                onChange={handleChange}
                            />
                        </label>
                        <CustomButton btnLabel={'Submit'} />
                    </form> :
                        <form onSubmit={handleSubmit}>
                            <label>
                                ID:
                                <input
                                    type="text"
                                    name="id"
                                    value={formData.id}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Department:
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.department}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="status"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </label>
                            <label>
                                Year:
                                <input
                                    type="text"
                                    name="version"
                                    value={formData.year}
                                    onChange={handleChange}
                                />
                            </label>
                            <CustomButton btnLabel={'Submit'} />
                        </form>}
            </div>
        </div>
    );
};

export default CustomModal;
