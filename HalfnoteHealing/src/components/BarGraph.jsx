function BarGraph({ data, chartHeight = 250, spacing = 60 }) {
  return (
    <div className="relative w-full h-[300px] flex justify-center">
      <style>{`
        @property --houdini-1 {
          syntax: "<color>";
          initial-value: #67d2f3;
          inherits: false;
        }
        @property --houdini-2 {
          syntax: "<color>";
          initial-value: #d400ff;
          inherits: false;
        }
        .houdini-bar {
          stop-color: var(--houdini-1);
          animation: shift 3s ease infinite;
        }
        .houdini-stop-2 {
          stop-color: var(--houdini-2);
          animation: shift-reverse 3s ease infinite;
        }
        @keyframes shift {
          0%, 100% { --houdini-1: #67d2f3; }
          50% { --houdini-1: #00ffc3; }
        }
        @keyframes shift-reverse {
          0%, 100% { --houdini-2: #d400ff; }
          50% { --houdini-2: #67d2f3; }
        }
      `}</style>

      <svg viewBox={`0 0 450 ${chartHeight + 60}`} className="w-full h-full">
        <defs>
          <linearGradient id="houdiniGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="houdini-bar" />
            <stop offset="100%" className="houdini-stop-2" />
          </linearGradient>
        </defs>

        {[0, 1, 2, 3, 4].map((line) => (
          <line 
            key={line}
            x1="45" 
            y1={chartHeight - (line * (chartHeight / 4))} 
            x2="440" 
            y2={chartHeight - (line * (chartHeight / 4))} 
            stroke="rgba(255,255,255,0.05)" 
            strokeWidth="1"
          />
        ))}

        <text x="5" y="10" fill="rgba(255,255,255,0.15)" fontSize="10" fontWeight="700">HIGH</text>
        
        <text 
          x="12" 
          y={chartHeight / 1.9} 
          fill="rgba(255,255,255,0.15)" 
          fontSize="11" 
          fontWeight="800"
          letterSpacing="0.3em"
          textAnchor="middle"
          transform={`rotate(-90, 12, ${chartHeight / 2})`}
        >
          MOOD
        </text>

        <text x="5" y={chartHeight} fill="rgba(255,255,255,0.15)" fontSize="10" fontWeight="700">LOW</text>

        {data.map((item, i) => {
          const barHeight = (item.val / 5) * chartHeight;
          const xPos = 70 + (i * spacing);
          const yPos = chartHeight - barHeight;

          return (
            <g key={i} className="group">
              <rect
                x={xPos - 17.5} 
                y={yPos}
                width="35"
                height={barHeight}
                rx="4"
                fill="url(#houdiniGradient)"
                className="transition-all duration-300 group-hover:brightness-125 cursor-pointer"
              />
              
              <text 
                x={xPos} 
                y={chartHeight + 35} 
                textAnchor="middle" 
                fill="rgba(255,255,255,0.25)" 
                fontSize="11" 
                fontWeight="bold"
                className="tracking-tighter"
              >
                {item.day ? item.day.toUpperCase() : item.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default BarGraph;