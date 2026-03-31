const Loadingbar = ({ message = "Loading...", className = "" }) => {
  return (
    <div className={`w-full flex flex-col items-center gap-4 animate-pulse ${className}`}>
      <style>{`
        .loading-bar {
          width: 100%;
          height: 8px;
          border-radius: 99px;
          background: linear-gradient(
            90deg,
            #4facfe 0%,
            #00f2fe 25%,
            #4facfe 50%,
            #00f2fe 75%,
            #4facfe 100%
          );
          background-size: 200% 100%;
          animation: loading-shimmer 1.5s linear infinite;
        }

        @keyframes loading-shimmer {
          from { background-position: 200% 0; }
          to { background-position: -200% 0; }
        }
      `}</style>
      
      <p className="text-[#4ade80] font-bold text-sm tracking-wide text-center">
        {message}
      </p>
      <div className="loading-bar" />
    </div>
  );
};

export default Loadingbar;