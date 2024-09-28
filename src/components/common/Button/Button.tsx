import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import css from './Button.module.css';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <button 
                ref={ref}
                className={cn(css.btn, className)} 
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
