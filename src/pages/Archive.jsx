const FolderGrid = () => {
    const folders = [
        { date: '1/18' },
        { date: '1/19' },
        { date: '1/20' },
        { date: '1/21' },
        { date: '1/22' },
        { date: '1/23' },
        { date: '1/24' },
        { date: '1/25' },
        { date: '1/24' },
        { date: '1/25' },
    ];

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            {folders.map((folder, index) => (
                <div key={index} style={{ width: '300px', margin: '10px', textAlign: 'center' }}>
                    <div style={{
                        width: '100%',
                        height: '240px',
                        marginBottom: '5px',
                        backgroundColor: '#f0f0f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #ddd'
                    }}>
                        {/* Icon or image for the folder */}
                        <div style={{ fontSize: '72px' }}>📁</div>
                    </div>
                    <div>{folder.date}</div>
                </div>
            ))}
        </div>
    );
};

export default FolderGrid;