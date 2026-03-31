function PrimaryButton({ className = "", type = "button", onClick, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "transition-all duration-300 py-3 px-8 font-semibold text-sm uppercase tracking-wider",
        "hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center",
        className,
      ].join(" ")}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)', 
        color: 'white',
        borderRadius: '10px', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        outline: 'none',
        boxShadow: 'none'
      }}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;