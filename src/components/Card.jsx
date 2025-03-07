// components/Card.jsx
import { cn } from "../lib/utils";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "flex flex-col border border-black/20 p-7 rounded-4xl shadow-lg justify-between",
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
  <div className={cn("", className)}>
    {children}
  </div>
);

// Subcomponente Body
Card.Body = ({ children, className }) => (
  <div className={cn("my-4", className)}>{children}</div>
);

// Subcomponente Image
Card.Image = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={cn("h-50 mb-4 rounded-lg", className)}
  />
);

// Subcomponente Footer
Card.Footer = ({ children, className }) => (
  <div className={cn("mt-auto", className)}>{children}</div>
);

export default Card;