

export type WarningModalProps = {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function cancelHandler() {
    // Simply close the modal by not rendering it
    return;
}

export function WarningModal({isOpen, title="Confirm Action", message="Sure to clear cart?", onConfirm, onCancel}: WarningModalProps) {

    if (!isOpen) return null;

    return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onCancel} // click backdrop closes
    >
      <div
        style={{
          background: "white",
          borderRadius: 8,
          padding: 20,
          width: 320,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking content
      >
        <h3 className="h5">{title}</h3>
        <p>{message}</p>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
          <button className="btn btn-outline-secondary btn-sm" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-danger btn-sm" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}