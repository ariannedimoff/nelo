import React from 'react';
import moment from 'moment';

const WeekdayNames = () => {
    const weekDays = moment.weekdays();

    const styles = {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignSelf: 'center',
        margin: 'auto',
        width: '70vw',
        textAlign: 'center',
    };
    
    return (
        <div style={styles}>
            {weekDays.map((day, i) => (
                <ul key={i} style={{margin: '15px 0px 15px 0px', width: '150px', textAlign: 'center'}}>{day}</ul>
            ))}
        </div>

    );
};

export default WeekdayNames;