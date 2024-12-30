interface MovieModalProps {
  closeCb: () => void;
}

export default function MovieModal({ closeCb }: MovieModalProps) {
  return (
    <div
      className="w-[100vw] h-[100vh] bg-secondary opacity-50 top-0 left-0 fixed"
      onClick={closeCb}
    >
      <div
        className="p-10 bg-red-500 translate-x-1/2 translate-y-1/2 h-1/2 w-1/2 z-50 absolute"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeCb}>close</button>
        Modal
      </div>
    </div>
  );
}
