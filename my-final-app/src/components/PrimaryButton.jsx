function PrimaryButton({ className = "", type = "button", onClick, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        "bg-white text-black hover:bg-zinc-200 transition-all duration-300 rounded-full py-3 px-8 font-semibold text-sm uppercase tracking-wider shadow-lg hover:scale-[1.02] active:scale-[0.98]",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;

