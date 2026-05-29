interface Card3DProps {
  image: string;
  alt: string;
  className?: string;
}

const Card3D = ({ image, alt, className = "" }: Card3DProps) => {
  return (
    <div
      className={`relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted shadow-2xl group ${className}`}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none z-10" />

      {/* Image */}
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300"
      />

      {/* Gloss shine effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-20" />

      {/* Bottom gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default Card3D;
