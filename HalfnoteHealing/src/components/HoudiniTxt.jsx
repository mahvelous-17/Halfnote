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
          animation: houdini-colors 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes houdini-colors {
          0%, 100% {
            --gradient-start: #67d2f3;
            --gradient-end: #d400ff;
          }
          33% {
            --gradient-start: rgb(221, 0, 255);
            --gradient-end: #00ffc3;
          }
          66% {
            --gradient-start: #7de1ff;
            --gradient-end: #d400ff;
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