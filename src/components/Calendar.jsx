import React from 'react';

const Calendar = () => {
    // A simple static calendar layout (not functional)
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
                <tr>
                    {weekDays.map(day => (
                        <th key={day} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                            {day}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {/* Assuming a fixed 5-week display for simplicity */}
                {[...Array(5)].map((_, weekIndex) => (
                    <tr key={weekIndex}>
                        {weekDays.map((_, dayIndex) => (
                            <td key={dayIndex} style={{ border: '1px solid #ddd', height: '50px', textAlign: 'center' }}>
                                {/* Day number placeholder */}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Calendar;
