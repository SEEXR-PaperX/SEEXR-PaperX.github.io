const Sidebar = () => {
    return (
        <div style={{
            borderRight: '1px solid #ddd',
            padding: '20px',
            minWidth: '350px',
            height: 'calc(100vh - 60px)', // 60px is the height of the bottom nav
            boxSizing: 'border-box'
        }}>
            <div>＋ 새 글작성</div>
            <div>1/24 글</div>
            <div>1/25 글</div>
            <div style={{ color: 'orange' }}>1/26 글 ●</div>
        </div>
    );
};

export default Sidebar