import { Loader2 } from "lucide-react";

function LoaderInvert({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className="animate-spin text-primary" size={size} />
    </div>
  );
}

export default LoaderInvert;
