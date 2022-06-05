import { createContext, ReactNode } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import NotFound from "../pages/404";
import Dashboard from "../pages/Dashboard";

type RoutingProviderContextData = {
    navigateToDashboard: () => void;
    navigateToArticlePage: (id: string) => void;
};

interface RoutingProviderProps {
    children: ReactNode;
};

const RoutingContext = createContext({} as RoutingProviderContextData);

const RoutingProvider = ({ children }: RoutingProviderProps) => {
    const navigate = useNavigate();

    const routingState = {
        navigateToDashboard: () => navigate('/'),
        navigateToArticlePage: (id: string) => navigate('/article/:id'.replace(':id', id)),
    };

    return (
        <RoutingContext.Provider value={routingState}>
            {children}
        </RoutingContext.Provider>
    );
}

const RoutesProvider = () => {
    return (
        <BrowserRouter>
            <RoutingProvider>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </RoutingProvider>
        </BrowserRouter>
    );
}

export { RoutesProvider, RoutingContext };