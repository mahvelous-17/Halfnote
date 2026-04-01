const HoudiniTxt = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <style>{`
        @property --gradient-start {
          syntax: "<color>";
          initial-value: #00c3ff;
          inherits: false;
        }
        @property --gradient-end {
          syntax: "<color>";
          initial-value: #d400ff;
          inherits: false;
        }
        .houdini-gradient {
          background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
          animation: houdini-colors 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes houdini-colors {
          0%, 100% {
            --gradient-start: #00c3ff;
            --gradient-end: #d400ff;
          }
          33% {
            --gradient-start: #ffffff;
            --gradient-end: #00c3ff;
          }
          66% {
            --gradient-start: #279c39;
            --gradient-end: #00c3ff;
          }
        }
      `}</style>
      <div className="houdini-gradient">
        {children}
      </div>
    </div>
  );
};

export default HoudiniTxt;