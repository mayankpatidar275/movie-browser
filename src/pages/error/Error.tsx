function Error() {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="text-center text-red-600 dark:text-red-400 font-medium p-4"
    >
      Page not found! Please check your path.
    </div>
  );
}

export default Error;
