import { Heart, Sparkles } from 'lucide-react';

const LoveMessage = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <Sparkles className="text-accent animate-pulse" size={32} />
          </div>
          
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 animate-fade-in-up">
            <Heart className="mx-auto text-primary mb-6 animate-pulse-love" size={48} />
            
            <h2 className="font-script text-4xl md:text-5xl text-primary mb-8">
              Untuk Kekasih Tercinta
            </h2>
            
            <div className="space-y-6 font-elegant text-lg text-foreground/80 leading-relaxed">
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Setiap hari bersamamu adalah berkah yang tak terhingga. 
                Dalam setiap senyumanmu, aku menemukan kebahagiaan yang tak tergantikan.
              </p>
              
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Di usia yang ke-17 ini, semoga semua impian dan harapanmu menjadi kenyataan. 
                Kamu adalah cahaya dalam hidupku, dan aku bersyukur bisa merayakan hari istimewa ini bersamamu.
              </p>
              
              <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Selamat ulang tahun, sayangku. Semoga Allah SWT selalu memberikan 
                kebahagiaan, kesehatan, dan keberkahan untukmu. I love you more than words can express. ❤️
              </p>
            </div>
            
            <div className="mt-8 font-script text-2xl text-primary animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              - Dengan cinta tak terbatas -
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;