import { twMerge } from "tailwind-merge";

const Button = ({ className, children }) => {
  return (
    <div
      className={twMerge(
      "mt-5 rounded-xl cursor-pointer text-center font-semibold py-2 px-5 bg-pink-500 text-white hover:bg-pink-500/90 hover:scale-102 active:bg-pink-500 active:scale-95 transition", className
      )}
    >
      <span>{children}</span>
    </div>
  );
};

export default Button;
