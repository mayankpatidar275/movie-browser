function Error() {
  return (
    <div
      role="alert"
      aria-live="assertive"
      className="text-center text-secondary dark:text-primary font-medium p-4"
    >
      Page not found! Please check your path.
    </div>
  );
}

export default Error;
