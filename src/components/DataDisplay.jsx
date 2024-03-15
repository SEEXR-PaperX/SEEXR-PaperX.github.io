import React from 'react';

const DataDisplay = ({ data }) => {
    // You would replace this with actual data display logic
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            {/* Displaying provided data as JSON for demonstration */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataDisplay;
