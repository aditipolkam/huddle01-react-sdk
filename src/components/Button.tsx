import React from "react";

const Button = ({
  label,
  handleClick,
  disabled,
}: {
  label: string;
  handleClick: () => void;
  disabled?: boolean | undefined
}) => {
  return (
    <button className="p-2 rounded-lg bg-primary" onClick={handleClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
