import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("relative overflow-hidden group", className)}
        {...props}
      >
        <span className="relative inline-flex">
          <span className="transition-transform duration-300 ease-in-out group-hover:-translate-x-full">
            {children}
          </span>
          <span className="absolute left-full transition-transform duration-300 ease-in-out group-hover:-translate-x-full whitespace-nowrap">
            {children}
          </span>
        </span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
