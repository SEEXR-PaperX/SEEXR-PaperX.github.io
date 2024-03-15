import { NavLink, useLocation } from 'react-router-dom';

import styled from '@emotion/styled';

function Navigation({ disappearLocation }) {
    const Div = styled.div({
        '& a': {
            padding: '12px',
            border: '0',
            textDecoration: 'none',
            color: 'black',
            '&.active': {
                borderRadius: '2em',
                backgroundColor: "lightyellow",
            },
        },
    });

    const location = useLocation();

    if (location.pathname === disappearLocation) return null;

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            borderTop: '1px solid #eaeaea',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '60px',
            boxShadow: '0 -2px 5px rgba(0,0,0,0.1)'
        }}>
            <Div style={{ textAlign: 'center' }}>
                <NavLink to="profile">개인 설정함</NavLink>
            </Div>
            <Div style={{ textAlign: 'center' }}>
                <NavLink to="/">홈 화면</NavLink>
            </Div>
            <Div style={{ textAlign: 'center' }}>
                <NavLink to="archive">문서 보관함</NavLink>
            </Div>
        </nav>
    );
}

export default Navigation