import React from "react";
import { RobotHero } from "./components/ui/robot-hero";
import FlowArt, { FlowSection } from "./components/ui/story-scroll";
import ScrollAnimation from "./components/ui/you-can-scroll";
import { ShaderAnimation } from "./components/ui/shader-animation";
import { 
  GraduationCap, 
  School, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Code2, 
  Bot, 
  LineChart, 
  Handshake 
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="w-full bg-[var(--color-background)] text-[var(--color-foreground)] font-sans flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen">
        <RobotHero 
          backgroundText="INNOVATION"
          ctaText="Partner With Us"
          navItemsLeft={[
            { label: "Home", href: "#" },
            { label: "About", href: "#gap" },
            { label: "Products", href: "#solution" },
            { label: "Contact", href: "#footer" }
          ]}
          color="#8B0000"
          pantallaColor="#ff3333"
        />
        {/* Overlay Proof Points (Pointer Events None so it doesn't block 3D) */}
        <div className="absolute bottom-12 left-0 w-full pointer-events-none px-8 z-30 hidden sm:block">
          <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-white">
            <div className="bg-[#111111]/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border border-white/10 shadow-xl">
              <GraduationCap size={18} className="text-[#8B0000]" /> Grades 3–9
            </div>
            <div className="bg-[#111111]/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border border-white/10 shadow-xl">
              <School size={18} className="text-[#D97706]" /> 100% Turnkey Lab Setups
            </div>
            <div className="bg-[#111111]/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 border border-white/10 shadow-xl">
              <CheckCircle2 size={18} className="text-[#2DD4BF]" /> Accredited Diploma Pathways
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Innovation Gap */}
      <section id="gap" className="relative w-full py-24 px-8 overflow-hidden border-b border-white/10">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 text-[#2DD4BF] drop-shadow-md">
            Bridging the Innovation Gap in Doha
          </h2>
          <p className="text-xl md:text-2xl text-center max-w-3xl text-white/90 mb-16 drop-shadow-md">
            Make7 Robotics is transforming the educational landscape in Qatar by bringing accessible, practical robotics, coding, AI, and technology learning directly into schools.
          </p>

          <div className="grid md:grid-cols-2 gap-12 w-full">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[32px] border border-white/20 shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-6 text-white drop-shadow-sm">The School Struggle</h3>
              <ul className="space-y-4 text-lg text-white/90">
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-[#F87171] mt-1 shrink-0 drop-shadow-sm" size={20} /> 
                  <span>Rapid, expensive technological changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-[#F87171] mt-1 shrink-0 drop-shadow-sm" size={20} /> 
                  <span>Difficulty hiring expert technology teachers</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="text-[#F87171] mt-1 shrink-0 drop-shadow-sm" size={20} /> 
                  <span>Pressure on existing school resources and syllabi</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[32px] border border-white/20 shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-6 text-white drop-shadow-sm">The Parent Struggle</h3>
              <ul className="space-y-4 text-lg text-white/90">
                <li className="flex items-start gap-3">
                  <Clock className="text-[#FBBF24] mt-1 shrink-0 drop-shadow-sm" size={20} /> 
                  <span>High costs of outside educational centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="text-[#FBBF24] mt-1 shrink-0 drop-shadow-sm" size={20} /> 
                  <span>Exhausting travel and commuting requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="text-[#FBBF24] mt-1 shrink-0 drop-shadow-sm" size={20} /> 
                  <span>Loss of precious family time on weekends</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Make7 Solution */}
      <section id="solution" className="w-full py-24 px-8 bg-[#111] text-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 max-w-4xl leading-tight">
            Turn Your Existing Computer Lab Into a Tinkering Lab.
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] shadow-sm">
              <div className="text-[#0D9488] mb-6"><Code2 size={36} /></div>
              <h3 className="text-2xl font-heading font-bold mb-3">1. The Setup</h3>
              <p className="text-white/70">Install the Make7 learning platform directly onto the computers already owned by the school with zero downtime.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] shadow-sm">
              <div className="text-[#0D9488] mb-6"><GraduationCap size={36} /></div>
              <h3 className="text-2xl font-heading font-bold mb-3">2. The Teaching</h3>
              <p className="text-white/70">Make7 IT experts come directly to the school and deliver specialized, modern technology classes.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] shadow-sm">
              <div className="text-[#0D9488] mb-6"><LineChart size={36} /></div>
              <h3 className="text-2xl font-heading font-bold mb-3">3. The Tracking</h3>
              <p className="text-white/70">Principals and parents monitor student progress, skills, and attendance through our dedicated mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. You Can Scroll - Epic Hype Section */}
      <ScrollAnimation />

      {/* 5. Learning Journey - STORY SCROLL */}
      <FlowArt aria-label="Learning Journey">
        
        {/* Term 1 */}
        <FlowSection 
          aria-label="Building Foundation" 
          style={{ 
            backgroundColor: '#0D9488', 
            color: '#fff',
            backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-[#0D9488]/90 z-0"></div>
          <div className="relative z-10 flex flex-col h-full">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">01 — Term 1</p>
            <hr className="my-[2vw] border-none border-t border-white/30" />
            <div>
              <h1 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight font-heading">
                Building<br />Foundation
              </h1>
            </div>
            <hr className="my-[2vw] border-none border-t border-white/30" />
            <div className="mt-auto flex flex-col md:flex-row gap-8 items-start">
              <p className="max-w-[40ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed">
                Students build an incredibly strong foundation in core logic and advanced problem-solving techniques. They learn how to break down complex issues into manageable pieces.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Term 2 */}
        <FlowSection 
          aria-label="Practical Application" 
          style={{ 
            backgroundColor: '#2DD4BF', 
            color: '#0F172A',
            backgroundImage: 'url(https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-[#2DD4BF]/90 z-0"></div>
          <div className="relative z-10 flex flex-col h-full">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">02 — Term 2</p>
            <hr className="my-[2vw] border-none border-t border-black/20" />
            <div>
              <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight font-heading">
                Practical<br />Application
              </h2>
            </div>
            <hr className="my-[2vw] border-none border-t border-black/20" />
            <p className="mt-auto max-w-[40ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed">
              Students transition into writing real code and creating fully working applications and games. This hands-on experience solidifies their theoretical knowledge.
            </p>
          </div>
        </FlowSection>

        {/* Term 3 */}
        <FlowSection 
          aria-label="Advanced Concepts" 
          style={{ 
            backgroundColor: '#D97706', 
            color: '#fff',
            backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-[#D97706]/90 z-0"></div>
          <div className="relative z-10 flex flex-col h-full">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">03 — Term 3</p>
            <hr className="my-[2vw] border-none border-t border-white/30" />
            <div>
              <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight font-heading">
                Advanced<br />Concepts
              </h2>
            </div>
            <hr className="my-[2vw] border-none border-t border-white/30" />
            <p className="mt-auto max-w-[40ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed">
              Students dive into understanding artificial intelligence and pitching their own unique technology ideas. They develop vital presentation and communication skills.
            </p>
          </div>
        </FlowSection>

        {/* Year 2 */}
        <FlowSection 
          aria-label="Year 2 Physical Robotics" 
          style={{ backgroundColor: '#111111', color: '#fff' }}
        >
          <div className="relative z-10 flex flex-col h-full">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2DD4BF]">04 — Year 2</p>
            <hr className="my-[2vw] border-none border-t border-white/30" />
            <div>
              <h2 className="text-[clamp(3.5rem,10vw,12rem)] font-bold leading-[0.85] uppercase tracking-tight font-heading">
                Physical<br />Robotics
              </h2>
            </div>
            <hr className="my-[2vw] border-none border-t border-white/30" />
            <div className="mt-auto flex justify-between items-end">
              <p className="max-w-[40ch] text-[clamp(1rem,2vw,1.5rem)] font-normal leading-relaxed">
                After establishing a robust software and logic foundation, students step into physical robotics, utilizing physical STEM kits, sensors, wiring, and mechanical builds.
              </p>
              <Bot size={100} className="text-[#2DD4BF] opacity-50" />
            </div>
          </div>
        </FlowSection>

      </FlowArt>

      {/* 6. Pricing & Partnership CTA */}
      <section id="products" className="w-full py-32 px-8 bg-white">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-foreground)] mb-6">
            Affordable Quality Education.
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)] mb-16">
            A low-cost way for families to access technology education through their child's existing school environment.
          </p>
          
          <div className="bg-[var(--color-muted)] border border-[var(--color-border)] rounded-[40px] p-12 shadow-sm mb-12">
            <div className="text-6xl font-black font-heading text-[#8B0000] mb-2">180 <span className="text-2xl">QAR</span></div>
            <div className="text-lg font-bold text-[var(--color-muted-foreground)] uppercase tracking-wider mb-8">Per student / Per academic year</div>
            
            <ul className="text-left space-y-4 max-w-sm mx-auto mb-10 text-[#134E4A]">
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#8B0000] shrink-0" size={20} /> Full curriculum access</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#8B0000] shrink-0" size={20} /> Make7 platform access</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#8B0000] shrink-0" size={20} /> Three academic terms</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="text-[#8B0000] shrink-0" size={20} /> No expensive hardware needed</li>
            </ul>
            
            <button className="bg-[#8B0000] text-white font-bold font-heading text-xl px-12 py-5 rounded-full hover:bg-[#660000] transition-all flex items-center justify-center gap-3 mx-auto shadow-xl">
              Partner With Us <Handshake size={24} />
            </button>
          </div>
          
          <p className="text-[var(--color-muted-foreground)] max-w-lg mx-auto">
            Built for Qatar standards. Designed to align with official school technology and AI goals in a safe, monitored digital learning environment.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full bg-[var(--color-foreground)] text-white/50 py-12 text-center text-sm border-t border-[var(--color-foreground)]/10">
        <p>© 2026 Make7 Robotics. All rights reserved.</p>
      </footer>

    </div>
  );
}
