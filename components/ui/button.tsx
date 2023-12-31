import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(`w-auto rounded-full
                bg-black
                border-transparent
                px-5
                py-3
                text-white
                disabled:cursor-not-allowed
                disabled:opacity-50
                hover:opacity-75
                transition
            `,
          className
        )}
        ref={ref}
        {...props}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
