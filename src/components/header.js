import React from 'react';

function Header() {
    return (
        <header
            style={{
                backgroundColor: '#171717',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%', // Set the header to cover full width
            }}
        >
            <h1 style={{ color: '#fff', fontSize: '22px', margin: '0' }}>
                Prestige Motors Admin System
            </h1>
        </header>
    );
}

export default Header;
