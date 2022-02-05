import React from 'react';

const Header = (props) => {
    const styles = {
        textAlign: 'center',
        fontWeight: 'bold',
    };

    const { date, resetDate } = props;
    
    return (
        <div className='header' style={styles}>
            <h3>{date}</h3>
            <button onClick={() => {resetDate()}}>Today</button>
        </div>
    );
};

export default Header;