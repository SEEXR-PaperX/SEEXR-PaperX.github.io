import React from 'react';

import Calendar from '../components/Calendar';
import DataDisplay from '../components/DataDisplay';

const MyPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                {/* Placeholder for profile image */}
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '25px',
                    backgroundColor: 'grey'
                }}></div>

                {/* User interaction data display */}
                <DataDisplay data={{
                    userStats: {
                        id: "user123",
                        visits: {
                            total: 23,
                            byPage: {
                                home: 10,
                                about: 5,
                                contact: 8
                            }
                        },
                        actions: {
                            likes: 15,
                            comments: 3,
                            shares: 2
                        },
                        lastLogin: new Date().toISOString()
                    }
                }} />

                <div style={{
                    border: '1px solid black',
                    padding: '10px',
                    flexGrow: 1,
                    marginLeft: '20px'
                }}>
                    User Interaction Data Placeholder
                </div>
            </div>

            <section style={{ display: 'flex', marginBottom: '20px' }}>
                {/* Placeholder for Calendar component */}
                <div style={{
                    border: '1px solid black',
                    padding: '10px',
                    flexGrow: 1
                }}>
                    <Calendar />
                </div>
            </section>
        </div>
    );
};

export default MyPage;
