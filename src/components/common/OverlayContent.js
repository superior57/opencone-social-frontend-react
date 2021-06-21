import React from 'react';

const OverlayContent = ({
    className = "p-3",
    children
}) => {
    return (
        <div className={className} style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
        }}>
            { children }
        </div>
    )
}

export default OverlayContent;