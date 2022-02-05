import React from 'react';
import WeekDays from './weekDays';
import Day from './day';

const Calendar = () => {
    const styles = {
      
    }

    const containerStyles = {
        display: 'flex',
        flexDirection: 'row',
    }

    return (
        <div className='calendar' style={styles}>
            <WeekDays/>
            <div className='container' style={containerStyles}>
                <button>Previous</button>
                <Day/>
                <button>Next</button>
            </div>
        </div>
        
    )
};

export default Calendar;