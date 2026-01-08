import React, { useEffect, useState } from 'react';
import { Coffee, Zap, Heart, Users, ExternalLink, Ticket, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import SketchyButton from './components/SketchyButton';
import SketchyCard from './components/SketchyCard';

// Links
const RSVP_LINK = "https://caffinated.fillout.com/rsvp";
const SUBMIT_LINK = "https://caffinated.fillout.com/submit";
const HACK_CLUB_LINK = "https://hackclub.com";
const SLACK_CHANNEL_LINK = "https://hackclub.enterprise.slack.com/archives/C0A6884MEA3";

// Status Constants - GOAL REACHED!
const RSVP_COUNT = 25; 
const GOAL = 25;
const GOAL_REACHED = RSVP_COUNT >= GOAL;

const App: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>("");

  useEffect(() => {
    // Reference time: 07:46 GMT+1
    const date = new Date();
    date.setUTCHours(6); 
    date.setUTCMinutes(46);
    
    setLocalTime(date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit', 
      timeZoneName: 'short' 
    }));
  }, []);

  return (
    <div className="min-h-screen text-black pb-20 overflow-x-hidden selection:bg-yellow-300 selection:text-black">
      
      {/* Decorative background elements */}
      <div className="fixed top-10 left-10 w-32 h-32 bg-green-300 rounded-full border-2 border-black opacity-20 -z-10 blur-xl"></div>
      <div className="fixed bottom-20 right-10 w-64 h-64 bg-yellow-300 rounded-full border-2 border-black opacity-20 -z-10 blur-2xl"></div>

      {/* Navbarish thing */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 transform -rotate-2">
          <div className="bg-black text-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(150,150,150,1)]">
            <Zap size={24} className="fill-current text-yellow-400" />
          </div>
          <span className="text-2xl font-bold">#caffinated</span>
        </div>
        <a href={HACK_CLUB_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline text-lg font-bold flex items-center gap-2 group">
           Hack Club <ExternalLink size={16} className="group-hover:-translate-y-1 transition-transform" />
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-4 pt-10">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-block border-2 border-black bg-green-400 px-4 py-2 transform rotate-2 shadow-[2px_2px_0px_0px_#000]">
              <span className="font-bold text-black uppercase tracking-widest flex items-center gap-2">
                <CheckCircle size={16} /> GOAL REACHED!
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl leading-[0.9] text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
              GOAL HIT. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-500 underline decoration-black decoration-4 underline-offset-4">SHIP NOW.</span>
            </h1>
            
            <p className="text-2xl md:text-3xl leading-relaxed font-hand">
              We hit our 25 RSVP goal! The caffeine taps are open. Build your site and claim your grant.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href={SUBMIT_LINK} target="_blank" rel="noreferrer" className="no-underline">
                  <SketchyButton className="text-2xl w-full sm:w-auto flex items-center justify-center gap-3 !bg-green-500 hover:!bg-green-400">
                    SUBMIT SHIP <Send />
                  </SketchyButton>
                </a>
                <a href={RSVP_LINK} target="_blank" rel="noreferrer" className="no-underline opacity-60 hover:opacity-100 transition-opacity">
                  <SketchyButton variant="secondary" className="text-xl w-full sm:w-auto flex items-center justify-center gap-3">
                    RSVP <Ticket />
                  </SketchyButton>
                </a>
              </div>
              <div className="flex flex-col items-center md:items-start transform rotate-1">
                 <div className="flex items-center gap-2 text-xl font-bold text-green-700">
                    <Users className="text-green-600" />
                    <span>{RSVP_COUNT} / {GOAL} Hackers Ready!</span>
                 </div>
                 {localTime && (
                  <p className="text-sm text-gray-500 font-sans flex items-center gap-1 mt-1">
                    <Clock size={12} /> Milestone achieved: {localTime}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
             <SketchyCard color="bg-white" rotate={2} className="relative z-10 border-green-500 border-4">
                <div className="w-full h-64 md:h-96 bg-green-50 border-2 border-black flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
                   <Zap size={140} strokeWidth={1} className="text-green-500 transform -rotate-12 animate-pulse" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-green-400 border-2 border-black p-4 transform -rotate-6 shadow-[4px_4px_0px_0px_#000]">
                  <p className="text-xl font-bold flex items-center gap-2 uppercase tracking-tighter">
                    <CheckCircle className="fill-black text-green-400" /> Grant Unlocked
                  </p>
                </div>
             </SketchyCard>
          </div>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 relative">
            <SketchyCard rotate={-1} color="bg-orange-50" className="flex flex-col gap-4">
              <div className="text-5xl font-bold text-orange-500 opacity-50">01</div>
              <h3 className="text-2xl font-bold border-b-2 border-black pb-2 w-max text-gray-400 line-through">RSVP</h3>
              <p className="text-lg text-gray-500 italic">Goal met! You can still join the squad, but the mission is already GO.</p>
            </SketchyCard>

            <SketchyCard rotate={1} color="bg-green-50" className="flex flex-col gap-4 mt-6 md:mt-0 ring-4 ring-green-400 ring-offset-4 rounded-lg">
              <div className="text-5xl font-bold text-green-500">02</div>
              <h3 className="text-2xl font-bold border-b-2 border-black pb-2 w-max">Build</h3>
              <p className="text-lg font-bold">IT'S BUILDING TIME. Create a personal website, a weird project, or anything web-based.</p>
            </SketchyCard>

            <SketchyCard rotate={-2} color="bg-blue-50" className="flex flex-col gap-4 mt-12 md:mt-0">
              <div className="text-5xl font-bold text-blue-500">03</div>
              <h3 className="text-2xl font-bold border-b-2 border-black pb-2 w-max">Sip</h3>
              <p className="text-lg">Submit your ship via the button above. We'll verify and send your HCB card ASAP!</p>
            </SketchyCard>
        </div>

        {/* The Deal Section */}
        <div className="mb-24">
          <div className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_#22c55e] transform -rotate-1 relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-green-200 opacity-80 transform rotate-2 border border-white/20"></div>

             <h2 className="text-4xl md:text-5xl mb-6 text-center text-green-400">THE GRANT IS LIVE</h2>
             <div className="grid md:grid-cols-2 gap-8 text-lg md:text-xl">
               <ul className="space-y-4 list-disc pl-6 marker:text-green-400">
                  <li><strong>The Goal:</strong> Ship a website.</li>
                  <li><strong>The Reward:</strong> A HCB card for caffeine fuel.</li>
                  <li><strong>The Catch:</strong> Must be a real project. No "Hello World".</li>
                  <li><strong>Status:</strong> ACTIVATED 🚀</li>
               </ul>
               <div className="flex flex-col justify-center items-center gap-4 bg-green-500/10 p-6 rounded-lg border-2 border-green-500/50 border-dashed">
                  <p className="text-center font-bold text-green-400">Milestone Reached!</p>
                  <div className="text-3xl md:text-4xl font-bold text-white bg-green-600 px-6 py-4 transform rotate-2 border-2 border-black text-center shadow-[4px_4px_0px_0px_#000]">
                    SUBMIT YOUR WORK
                  </div>
                  <a href={SUBMIT_LINK} className="text-green-400 hover:text-green-300 underline mt-2 font-bold text-2xl">
                    Claim Grant &rarr;
                  </a>
               </div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 border-t-4 border-black pt-12 text-center relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 border-2 border-black transform rotate-3">
             <Heart className="inline text-red-500 fill-current" /> Made with love & caffeine
          </div>
          <p className="text-xl mb-4">Built by <span className="font-bold bg-yellow-200 px-1">hackclubbers</span> for <span className="font-bold bg-yellow-200 px-1">hackclubbers</span>.</p>
          
          <div className="mb-8">
            <a 
              href={SLACK_CHANNEL_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4A154B] text-white px-4 py-2 rounded-full border-2 border-black hover:scale-105 transition-transform font-bold -rotate-1 hover:rotate-0"
            >
              <MessageCircle size={18} /> Join the #caffinated channel :3
            </a>
          </div>

          <div className="flex justify-center gap-4 text-gray-500">
             <a href="https://hackclub.com/slack/" className="hover:text-black hover:underline">Slack</a>
             <span>•</span>
             <a href="https://hackclub.com/clubs/" className="hover:text-black hover:underline">Clubs</a>
             <span>•</span>
             <a href="https://hackclub.com/donate/" className="hover:text-black hover:underline">Donate</a>
          </div>
          <p className="mt-8 text-sm opacity-50 font-sans">
             This site is not affiliated with Monster Energy, Celsius, or Big Coffee™️. <br/>
             We just really like shipping code.
          </p>
        </footer>

      </main>
    </div>
  );
};

export default App;