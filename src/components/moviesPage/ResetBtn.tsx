interface ResetBtnProps {
  name: string;
  className?: string;
}

function ResetBtn({ name, className = "" }: ResetBtnProps) {
  const baseClasses =
    "px-4 py-2 border rounded-3xl cursor-pointer transition-all duration-200";
  const dynamicClasses =
    "bg-secondary text-primary border-secondary dark:bg-primary dark:text-secondary dark:border-primary";
  const hoverClasses =
    "hover:bg-primary hover:text-secondary dark:hover:bg-secondary dark:hover:text-primary";

  return (
    <div
      className={`${baseClasses} ${dynamicClasses} ${hoverClasses} ${className}`}
    >
      {name}
    </div>
  );
}

export default ResetBtn;
