import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 6 }).map((_, i) => (
        <Heart key={i} className="heart" size={20} />
      ))}
    </div>
  );
};

export default FloatingHearts;