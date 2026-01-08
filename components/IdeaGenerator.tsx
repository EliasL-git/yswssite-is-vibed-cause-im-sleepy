import React, { useState } from 'react';
import { generateWebsiteIdea } from '../services/geminiService';
import { IdeaResponse } from '../types';
import SketchyButton from './SketchyButton';
import SketchyCard from './SketchyCard';
import { Sparkles, Loader2 } from 'lucide-react';

const IdeaGenerator: React.FC = () => {
  const [idea, setIdea] = useState<IdeaResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateWebsiteIdea();
      setIdea(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SketchyCard className="max-w-2xl mx-auto mt-12 transform -rotate-1 relative overflow-hidden" color="bg-blue-100">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Sparkles size={120} />
      </div>
      
      <div className="text-center space-y-6 relative z-10">
        <h3 className="text-3xl font-bold">Stuck on what to build?</h3>
        <p className="text-xl">Ask the Caffeine Oracle (powered by Gemini 3 Flash) for a terrible, we mean, <i>great</i> idea.</p>
        
        {idea && !loading && (
          <div className="bg-white border-2 border-black p-4 rotate-1 my-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <h4 className="text-2xl text-purple-600 mb-2">{idea.title}</h4>
            <p className="text-lg mb-2">{idea.description}</p>
            <div className="inline-block bg-black text-white px-2 py-1 text-sm font-sans uppercase tracking-widest transform -rotate-2">
              Vibe: {idea.vibe}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <SketchyButton onClick={handleGenerate} disabled={loading} variant="primary">
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="animate-spin" /> Thinking...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Sparkles size={20} /> Gimme an Idea
              </span>
            )}
          </SketchyButton>
        </div>
      </div>
    </SketchyCard>
  );
};

export default IdeaGenerator;