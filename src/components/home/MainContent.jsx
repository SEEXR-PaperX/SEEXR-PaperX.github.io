const MainContent = () => {
    return (
        <div style={{
            padding: '20px',
            flexGrow: 1,
            height: 'calc(100vh - 120px)', // Same as Sidebar
            boxSizing: 'border-box'
        }}>
            <form>
                {/* Substitute these input fields with real ones as needed */}
                <input type="text" placeholder="제목" style={{ marginBottom: '10px', width: '95%', padding: '10px' }} />
                <textarea placeholder="내용" style={{ width: '95%', minHeight: '150px', padding: '10px' }} />
            </form>
        </div>
    );
};

export default MainContent