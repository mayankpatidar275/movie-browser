function Cross() {
  return (
    <svg
      width="20"
      height="20"
      fill="currentColor"
      className="absolute right-3 top-1/2 -mt-2.5 text-slate-400 cursor-pointer"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      />
    </svg>
  );
}

export default Cross;
