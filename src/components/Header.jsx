import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { IoMdArrowRoundBack, IoIosLogOut } from "react-icons/io";

const Header = ({ disappearLocation }) => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === disappearLocation) return null;

    const goBack = () => {
        navigate(-1);
    };

    return (
        <header style={{
            width: '100%',
            height: '60px', // Adjust the height as necessary
            backgroundColor: '#f8f8f8', // Choose a background color that fits your theme
            borderBottom: '1px solid #eaeaea', // A subtle bottom border for visual separation
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px 0 20px',
            boxSizing: 'border-box'
        }}>
            <button onClick={goBack} style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '10px',
                fontSize: '16px',
            }} >
                <IoMdArrowRoundBack />
            </button>
            <NavLink to="/login" style={{
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '10px',
                fontSize: '16px',
                }}
            >
                <IoIosLogOut style={{
                    color: 'black'
                }}
                />
            </NavLink>
            {/* Content will go here */}
        </header>
    );
};

export default Header;