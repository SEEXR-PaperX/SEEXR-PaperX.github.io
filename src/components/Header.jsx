import { useLocation } from 'react-router-dom'

const Header = ({ disappearLocation }) => {
    const location = useLocation();

    if (location.pathname === disappearLocation) return null;

    return (
        <header style={{
            width: '100%',
            height: '60px', // Adjust the height as necessary
            backgroundColor: '#f8f8f8', // Choose a background color that fits your theme
            borderBottom: '1px solid #eaeaea', // A subtle bottom border for visual separation
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 20px',
            boxSizing: 'border-box'
        }}>
            {/* Content will go here */}
        </header>
    );
};

export default Header;