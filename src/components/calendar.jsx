import React from 'react';
import WeekDays from './weekDays';
import Day from './day';

const Calendar = () => {
    const styles = {
      
    }

    return (
        <div style={styles}>
            <WeekDays/>
            <Day/>
        </div>
        
    )
};

export default Calendar;