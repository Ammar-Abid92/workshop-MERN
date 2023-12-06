import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ btnLabel, onClick }) => {
    return (
        <div>
            <Button style={{ marginTop: '20px' }} btnLabel={btnLabel} onClick={onClick} variant="contained">Contained</Button>
        </div>
    )
}

export default CustomButton;