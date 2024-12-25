import Close from "../Icons/Close";
import Open from "../Icons/Open";

function MobileMenuBtn({
  setOpen,
  open,
}: {
  setOpen: (open: boolean) => void;
  open: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-controls="mobile-menu"
      aria-expanded="true"
    >
      {/* Read aloud by screen readers for visually impaired users */}
      <span className="sr-only">{open ? "Close" : "Open"} main menu</span>
      {open ? <Close /> : <Open />}
    </button>
  );
}

export default MobileMenuBtn;
