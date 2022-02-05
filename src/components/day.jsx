import React from 'react';

const Date = (props) => {
    const styles = {
        display:'grid', 
        gridTemplateColumns: '150px 150px 150px 150px 150px 150px 150px',
        width: 'fit-content',
        margin: 'auto',
        alignSelf: 'center',
    };

    const dateStyle = {
        height: '150px',
        border: '1px solid black',
        padding: '10px', 
        margin: '0',
        textAlign: 'right',
    }

    const days = [...Array(35).keys()]
    return (
        <div style={styles}>
            {days.map((day, i) => (
                <ul key={i} style={dateStyle}>{day}</ul>
            ))}
        </div>
    );
};

export default Date;