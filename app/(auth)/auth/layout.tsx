import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return <div>
        Logo
        {children}
        logo bitis
    </div>;
};

export default AuthLayout;
