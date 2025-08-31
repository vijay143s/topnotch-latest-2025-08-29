import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, hover = true, className = '', ...props }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  const playHoverSound = () => {
    const audio = new Audio('/sounds/click.mp3');
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        backdrop-blur-md backdrop-saturate-150
        bg-gradient-to-br from-white/10 via-white/5 to-white/10
        border border-white/20
        shadow-xl
        ${hover ? 'transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]' : ''}
        ${className}
      `}
      onMouseEnter={() => {
        if (hover) {
          setIsHovered(true);
          playHoverSound();
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="relative z-10">
        {children}
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 transition-opacity duration-500" />
      )}
    </div>
  );
};

export default GlassCard;
