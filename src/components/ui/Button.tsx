"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import classNames from "classnames";

// Extend the standard Button props but omit conflicting props like 'onDrag' and others
interface ButtonProps
	extends Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		"onDrag" | "onTap" | "onHover"
	> {
	children: ReactNode;
	variant?: "primary" | "secondary" | "accent" | "outline";
	size?: "sm" | "md" | "lg";
	fullWidth?: boolean;
	isLoading?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

export default function Button({
	children,
	variant = "primary",
	size = "md",
	fullWidth = false,
	isLoading = false,
	leftIcon,
	rightIcon,
	className,
	...props
}: ButtonProps) {
	const buttonClasses = classNames(
		"inline-flex items-center justify-center rounded-lg font-sans font-medium transition-all duration-300",
		{
			// Variants
			"bg-primary-700 text-white hover:bg-primary-800 active:bg-primary-900":
				variant === "primary",
			"bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700":
				variant === "secondary",
			"bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700":
				variant === "accent",
			"border-2 border-primary-700 text-primary-700 hover:bg-primary-50 active:bg-primary-100":
				variant === "outline",

			// Sizes
			"text-sm px-4 py-2": size === "sm",
			"text-base px-6 py-3": size === "md",
			"text-lg px-8 py-4": size === "lg",

			// Full width
			"w-full": fullWidth,

			// Disabled
			"opacity-70 cursor-not-allowed": isLoading || props.disabled,
		},
		className
	);

	return (
		<motion.button
			whileHover={{ scale: isLoading || props.disabled ? 1 : 1.02 }}
			whileTap={{ scale: isLoading || props.disabled ? 1 : 0.98 }}
			className={buttonClasses}
			disabled={isLoading || props.disabled}
			{...(props as any)} // Spread the remaining props, but we've omitted conflicting ones
		>
			{isLoading ? (
				<svg
					className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						strokeWidth="4"
					></circle>
					<path
						className="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
			) : leftIcon ? (
				<span className="mr-2">{leftIcon}</span>
			) : null}

			{children}

			{!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
		</motion.button>
	);
}
