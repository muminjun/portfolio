type DialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Dialog({ open, onClose, title, children }: DialogProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <button
        aria-label="닫기"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-title-medium">{title}</h4>
          <button
            onClick={onClose}
            className="px-2 py-1 rounded hover:bg-gray-100"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>
        <div className="text-body-regular">{children}</div>
      </div>
    </div>
  );
}
