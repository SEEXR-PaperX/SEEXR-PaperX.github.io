import { useLocation } from 'react-router-dom'

const DisappearLocation = ({ 
    disappearLocation,
    children
}) => {
    const location = useLocation();
    if (location.pathname === disappearLocation) return null;
    return <>{children}</>;
};

export { DisappearLocation }