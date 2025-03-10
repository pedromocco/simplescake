// components/Card.jsx
import { cn } from "../lib/utils";
import { twMerge } from "tailwind-merge";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col border border-black/20 p-4 rounded-4xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Subcomponente Header
Card.Header = ({ children, className }) => (
  <div className={twMerge("", className)}>
    {children}
  </div>
);

// Subcomponente Body
Card.Body = ({ children, className }) => (
  <div className={twMerge("my-4", className)}>{children}</div>
);

// Subcomponente Image
Card.Image = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={twMerge("mb-4 rounded-lg", className)}
  />
);

// Subcomponente Footer
Card.Footer = ({ children, className }) => (
  <div className={twMerge("mt-auto", className)}>{children}</div>
);

export default Card;