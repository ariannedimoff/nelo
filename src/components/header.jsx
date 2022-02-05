import React from 'react';

const Header = () => {
    const styles = {
        textAlign: 'center',
        fontWeight: 'bold',
    };
    
    return (
        <div className='header' style={styles}>
            <h3>Date</h3>
            <button>Today</button>
        </div>
    );
};

export default Header;