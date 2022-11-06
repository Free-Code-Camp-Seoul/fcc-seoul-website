import clsx from "clsx";

import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx(styles.Button, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
