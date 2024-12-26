interface ResetBtnProps {
  name: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

function ResetBtn({
  name,
  className = "",
  type = "button",
  onClick,
}: ResetBtnProps) {
  const baseClasses =
    "px-4 py-2 border rounded-3xl cursor-pointer transition-all duration-200";
  const dynamicClasses =
    "bg-secondary text-primary border-secondary dark:bg-primary dark:text-secondary dark:border-primary";
  const hoverClasses =
    "hover:bg-primary hover:text-secondary dark:hover:bg-secondary dark:hover:text-primary";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${dynamicClasses} ${hoverClasses} ${className}`}
      aria-label={name}
    >
      {name}
    </button>
  );
}

export default ResetBtn;
