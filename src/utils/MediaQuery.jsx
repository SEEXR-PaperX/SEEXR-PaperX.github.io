import { useMediaQuery } from "react-responsive";

const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width: 599px)"
    });
    return <>{isMobile && children}</>;
};

const Tablets = ({ children }) => {
    const isTablets = useMediaQuery({
        query: "(min-width: 600px) and (max-width: 767px)"
    });
    return <>{isTablets && children}</>;
};

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({
        query: "(min-width:768px)"
    });
    return <>{isDesktop && children}</>;
};

export { Mobile, Tablets, Desktop };
