import { Globe, Users, Zap, Shield, Target, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, value } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-ink-primary overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />

      <div className="max-w-[1080px] mx-auto px-5 relative z-10">

        <section className="pt-32 pb-40 md:pt-40 md:pb-40 text-center">
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
              <span className="block mb-2">Meet the people your</span>
              <span className="gradient-text">algorithm already knows</span>
              <span className="block">you'll love.</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-ink-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
            Asteri maps your digital identity to connect you with people who share your values, interests, and aspirations—before you even meet.
          </p>
          <button className="btn-gradient">
            Join the Waitlist
          </button>
        </section>

        <section className="section-padding">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-glass text-center">
              <div className="text-5xl font-bold mb-3 gradient-text">1,200+</div>
              <div className="text-ink-muted uppercase text-xs tracking-wider font-semibold">matches made</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-lg font-semibold mb-2">Built by Ex-Coinbase × Ex-Google x Ivy League team</div>
              <div className="text-ink-muted">Elite founders with global perspective</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-lg font-semibold mb-2">Featured at YC Hackathon 2025</div>
              <div className="text-ink-muted">Recognized innovation</div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-blue to-accent-lavender rounded-2xl flex items-center justify-center mx-auto mb-8 icon-glow">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Connect your platforms</h3>
              <p className="text-ink-secondary leading-relaxed">Link your social accounts to build your unique digital profile.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-lavender to-accent-magenta rounded-2xl flex items-center justify-center mx-auto mb-8 icon-glow">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">We map your digital fingerprint</h3>
              <p className="text-ink-secondary leading-relaxed">Our AI analyzes patterns, interests, and values across your digital presence.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-magenta to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-8 icon-glow">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Meet your matches</h3>
              <p className="text-ink-secondary leading-relaxed">Connect with people who truly align with who you are.</p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 tracking-tight">Why Asteri?</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-accent-blue rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Privacy by design</h3>
                <p className="text-ink-secondary leading-relaxed">Your data stays yours. We match patterns, not profiles. No selling, no tracking, no compromise.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-accent-lavender rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Real-world outcomes</h3>
                <p className="text-ink-secondary leading-relaxed">From co-founders to life partners, our matches lead to meaningful relationships that matter.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-accent-magenta rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality over noise</h3>
                <p className="text-ink-secondary leading-relaxed">No endless swiping. Just a curated network of people who align with your journey.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 tracking-tight">Join the Waitlist</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase font-semibold text-ink-muted mb-3 tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm uppercase font-semibold text-ink-muted mb-3 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="jane@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm uppercase font-semibold text-ink-muted mb-3 tracking-wide">
                  Location
                </label>
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="">Select your location</option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia">Asia</option>
                  <option value="south-america">South America</option>
                  <option value="africa">Africa</option>
                  <option value="oceania">Oceania</option>
                </select>
              </div>
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 accent-accent-blue cursor-pointer"
                  required
                />
                <label htmlFor="consent" className="text-sm text-ink-secondary cursor-pointer leading-relaxed">
                  I agree to receive updates about Asteri and understand my data will be handled according to the privacy policy.
                </label>
              </div>
              <button
                type="submit"
                className="btn-gradient w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What People Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-glass">
              <p className="text-ink-secondary mb-5 italic leading-relaxed">
                "I met my co-founder through Asteri. Within 10 minutes of our first call, we knew we had to work together. It's like the algorithm understood our ambitions better than we did."
              </p>
              <div className="text-sm font-semibold">Sarah L.</div>
              <div className="text-xs text-ink-muted uppercase tracking-wide">Startup Founder</div>
            </div>
            <div className="card-glass">
              <p className="text-ink-secondary mb-5 italic leading-relaxed">
                "Finally, a platform that doesn't waste my time. Every introduction has been thoughtful and relevant. It's networking without the awkwardness."
              </p>
              <div className="text-sm font-semibold">Marcus T.</div>
              <div className="text-xs text-ink-muted uppercase tracking-wide">Venture Investor</div>
            </div>
            <div className="card-glass">
              <p className="text-ink-secondary mb-5 italic leading-relaxed">
                "Asteri connected me with someone who shares my niche research interests halfway across the world. We're now collaborating on a paper. This is magic."
              </p>
              <div className="text-sm font-semibold">Dr. Amira K.</div>
              <div className="text-xs text-ink-muted uppercase tracking-wide">Researcher</div>
            </div>
            <div className="card-glass">
              <p className="text-ink-secondary mb-5 italic leading-relaxed">
                "The quality of matches is unreal. It's not just about shared interests—it's about shared values and trajectory. This is the future of social connection."
              </p>
              <div className="text-sm font-semibold">James P.</div>
              <div className="text-xs text-ink-muted uppercase tracking-wide">Product Designer</div>
            </div>
          </div>
        </section>

        <section className="section-padding text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Join the network before it becomes the network.
          </h2>
          <p className="text-lg md:text-xl text-ink-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Early members get priority matching and shape the future of how people connect.
          </p>
          <button className="btn-gradient">
            Claim Your Spot
          </button>
        </section>

        <footer className="py-16 border-t border-depth-1 text-center text-ink-muted">
          <div className="space-y-6">
            <div className="flex justify-center gap-8 text-sm">
              <a href="#" className="hover:text-accent-blue transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-accent-blue transition-colors duration-300">Terms</a>
              <a href="mailto:founders@asteri.app" className="hover:text-accent-blue transition-colors duration-300">founders@asteri.app</a>
            </div>
            <div className="text-xs uppercase tracking-wide font-semibold">
              © 2025 Asteri Inc.
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
