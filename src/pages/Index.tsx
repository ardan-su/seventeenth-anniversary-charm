import { Heart, Gift, Sparkles, Calendar } from 'lucide-react';
import FloatingHearts from '@/components/FloatingHearts';
import CountdownTimer from '@/components/CountdownTimer';
import LoveMessage from '@/components/LoveMessage';
import heroImage from '@/assets/romantic-hero-bg.jpg';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <Heart className="mx-auto text-primary mb-6 animate-pulse-love" size={64} />
            <h1 className="font-script text-6xl md:text-8xl text-primary mb-6 drop-shadow-lg">
              Happy 17th Birthday
            </h1>
            <p className="font-elegant text-2xl md:text-3xl text-foreground/80 mb-8">
              Untuk Babyyyyyykuuu Keisyaa Wulann yang paling berharga
            </p>
            <div className="font-script text-4xl text-accent">
              17 Juni 2025
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 px-4 bg-card/30 backdrop-blur-sm">
        <CountdownTimer />
      </section>

      {/* Love Message Section */}
      <LoveMessage />

      {/* Birthday Wishes Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="love-glow rounded-2xl p-8 sparkle animate-fade-in-up">
              <Gift className="mx-auto text-primary-foreground mb-4 animate-pulse-love" size={48} />
              <h3 className="font-script text-2xl text-primary-foreground mb-4">Harapan</h3>
              <p className="font-elegant text-primary-foreground/80">
                Semoga tahun ke-17 ini membawa kebahagiaan yang tak terbatas untukmu
              </p>
            </div>
            
            <div className="love-glow rounded-2xl p-8 sparkle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Sparkles className="mx-auto text-primary-foreground mb-4 animate-pulse-love" size={48} />
              <h3 className="font-script text-2xl text-primary-foreground mb-4">Doa</h3>
              <p className="font-elegant text-primary-foreground/80">
                Semoga Kitaaa terusss bersamaaa selaluuuu
              </p>
            </div>
            
            <div className="love-glow rounded-2xl p-8 sparkle animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Heart className="mx-auto text-primary-foreground mb-4 animate-pulse-love" size={48} />
              <h3 className="font-script text-2xl text-primary-foreground mb-4">Cinta</h3>
              <p className="font-elegant text-primary-foreground/80">
                Cintaku untukmu akan terus tumbuh seiring berjalannya waktu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center">
        <div className="flex items-center justify-center gap-2 text-primary">
          <Calendar size={20} />
          <span className="font-elegant">Made with love for your special day</span>
          <Heart size={20} className="animate-pulse-love" />
        </div>
      </footer>
    </div>
  );
};

export default Index;