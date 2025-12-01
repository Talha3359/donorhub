import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    href?: string;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    type = 'button',
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold py-3 px-6 rounded-lg transition-all duration-200';

    const variantStyles = {
        primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg',
        secondary: 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600',
        outline: 'bg-transparent hover:bg-primary-50 text-primary-600 border-2 border-primary-600',
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedClassName}>
            {children}
        </button>
    );
};

export default Button;
