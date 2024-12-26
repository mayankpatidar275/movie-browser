import { Loader2 } from "lucide-react";

function Loader({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label="Loading content"
    >
      <Loader2
        className="animate-spin text-secondary dark:text-primary"
        size={size}
      />
    </div>
  );
}

export default Loader;
