import HoudiniTxt from "../components/HoudiniTxt";
import StreakCounter from "./StreakCounter";

function ProfileCard({ name, role, bio, image, session, streak, children }) {
  const avatarUrl = session?.user?.user_metadata?.avatar_url ?? null;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "650px",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "10px",
        padding: "30px",
        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '24px', textAlign: 'left' }}>
        
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={name} 
            style={{ 
              width: '100px', 
              height: '100px', 
              borderRadius: '12px', 
              objectFit: 'cover'
            }} 
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-white/60 text-lg font-bold uppercase">
            {session?.user?.email?.[0] ?? "?"}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '700', color: 'white', margin: 0 }}>
              {name}
            </h2>
            <div style={{ transform: 'scale(0.7)', transformOrigin: 'right' }}>
              <StreakCounter days={streak} />
            </div>
          </div>
          
          <HoudiniTxt>  
          <p style={{ color: '#fb923c', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase', margin: '0 0 12px 0' }}>
            {role}
          </p>
          </HoudiniTxt>

          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '15px', margin: 0, lineHeight: '1.5' }}>
            "{bio}"
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProfileCard;