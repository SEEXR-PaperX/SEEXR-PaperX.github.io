import { Mobile, Tablets, Desktop } from "../../utils/MediaQuery";

const Sidebar = () => {
    return (
        <>
            <Desktop>
                <div style={{
                    borderRight: '1px solid #ddd',
                    padding: '20px',
                    width: '150px',
                    height: 'calc(100vh - 120px)', // 60px is the height of the bottom nav
                    boxSizing: 'border-box',
                    flexDirection: 'column'
                }}>
                    <div>＋ 새 글작성</div>
                    <div>1/24 글</div>
                    <div>1/25 글</div>
                    <div style={{ color: 'orange' }}>1/26 글 ●</div>
                </div>
            </Desktop>
            <Tablets>
                <div style={{
                    borderRight: '1px solid #ddd',
                    padding: '20px',
                    width: '150px',
                    height: 'calc(100vh - 60px)', // 60px is the height of the bottom nav
                    boxSizing: 'border-box'
                }}>
                    <div>＋ 새 글작성</div>
                    <div>1/24 글</div>
                    <div>1/25 글</div>
                    <div style={{ color: 'orange' }}>1/26 글 ●</div>
                </div>
            </Tablets>
            <Mobile>
                <div style={{
                    borderRight: '1px solid #ddd',
                    padding: '20px',
                    width: '150px',
                    height: 'calc(100vh - 60px)', // 60px is the height of the bottom nav
                    boxSizing: 'border-box'
                }}>
                    <div>＋ 새 글작성</div>
                    <div>1/24 글</div>
                    <div>1/25 글</div>
                    <div style={{ color: 'orange' }}>1/26 글 ●</div>
                </div>
            </Mobile>
        </>
    );
};

export default Sidebar