import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface ScrollToTopProps {
    children: JSX.Element | JSX.Element[];
}

export const ScrollToTop = ({ children }: ScrollToTopProps) => {

    const location = useLocation();

    useEffect(
        () => {
            window.scrollTo(0, 0);
        }, [location]
    )

    return (
        <>
            {children}
        </>
    )
}
