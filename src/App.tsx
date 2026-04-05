import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const App = () => {
  return (
    <div className="relative w-full bg-background min-h-screen text-cream font-mono">
      {/* Global Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none mix-blend-lighten opacity-60 texture-overlay" />

      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-screen rounded-b-[32px] overflow-hidden flex flex-col">
        {/* Background Video */}
        <video 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4" 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="relative z-10 w-full max-w-orbis mx-auto px-6 sm:px-12 pt-8 flex-1 flex flex-col pb-20">
          {/* Header */}
          <header className="flex justify-between items-start lg:items-center">
            <div className="font-grotesk text-[16px] uppercase tracking-wider">Orbis.Nft</div>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex liquid-glass rounded-[28px] px-[52px] py-[24px] gap-8">
              {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((link) => (
                <a key={link} href="#" className="font-grotesk text-[13px] uppercase hover:text-neon transition-colors">
                  {link}
                </a>
              ))}
            </nav>
            
            {/* Desktop Socials */}
            <div className="hidden lg:flex flex-col gap-4 absolute top-8 right-12 z-20">
              {[Mail, FaTwitter, FaGithub].map((Icon, idx) => (
                <button key={idx} className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon size={20} className="text-cream" />
                </button>
              ))}
            </div>
          </header>

          {/* Hero Content */}
          <div className="mt-auto relative max-w-[780px] lg:ml-32">
            <h1 className="font-grotesk uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] md:leading-[1]">
              Beyond earth <br />
              and ( its ) familiar boundaries
            </h1>
            <span className="absolute -top-4 sm:top-0 right-0 lg:-right-16 translate-x-[10%] sm:translate-x-[20%] -translate-y-1/2 -rotate-1 font-condiment text-neon text-[24px] sm:text-[36px] lg:text-[48px] mix-blend-exclusion opacity-90 normal-case">
              Nft collection
            </span>
          </div>

          {/* Mobile Socials */}
          <div className="flex lg:hidden justify-center gap-4 mt-12 w-full">
            {[Mail, FaTwitter, FaGithub].map((Icon, idx) => (
              <button key={idx} className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors">
                <Icon size={20} className="text-cream" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT / INTRO */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <video 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4" 
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="relative z-10 w-full max-w-orbis mx-auto px-6 sm:px-12 py-[64px] lg:py-[96px] h-full min-h-screen flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
            <div className="relative self-start">
              <h2 className="font-grotesk uppercase text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.1]">
                Hello!<br />I'm orbis
              </h2>
              <span className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[20%] rotate-2 font-condiment text-neon mix-blend-exclusion text-[36px] sm:text-[52px] lg:text-[68px] normal-case">
                Orbis
              </span>
            </div>
            
            <p className="uppercase text-[14px] lg:text-[16px] max-w-[266px] leading-relaxed">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>

          <div className="flex justify-between w-full mt-24 lg:mt-auto">
            <p className="uppercase text-[14px] lg:text-[16px] max-w-[266px] leading-relaxed text-[#010828] lg:text-cream lg:opacity-10">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
            <p className="hidden lg:block uppercase text-[14px] lg:text-[16px] max-w-[266px] leading-relaxed opacity-10">
              A digital object fixed beyond time and place. An exploration of distance, form, and silence in space
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: NFT COLLECTION GRID */}
      <section className="w-full bg-background py-24 lg:py-32">
        <div className="w-full max-w-orbis mx-auto px-6 sm:px-12">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
            <h2 className="font-grotesk uppercase text-[32px] sm:text-[48px] lg:text-[60px] leading-[1.1]">
              Collection of<br />
              <div className="ml-12 sm:ml-24 lg:ml-32">
                <span className="font-condiment text-neon normal-case mr-4">Space</span>
                objects
              </div>
            </h2>
            
            <button className="group flex flex-col items-start hover:opacity-80 transition-opacity">
              <div className="flex items-end gap-3">
                <span className="font-grotesk text-[32px] sm:text-[48px] lg:text-[60px] leading-[0.8]">SEE</span>
                <div className="flex flex-col items-start leading-[0.9]">
                  <span className="font-grotesk text-[20px] sm:text-[28px] lg:text-[36px]">ALL</span>
                  <span className="font-grotesk text-[20px] sm:text-[28px] lg:text-[36px]">CREATORS</span>
                </div>
              </div>
              <div className="w-full h-[6px] sm:h-[8px] lg:h-[10px] bg-neon mt-2 lg:mt-3 group-hover:scale-105 origin-left transition-transform" />
            </button>
          </div>

          {/* NFT Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {[
              { score: "8.7/10", url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4" },
              { score: "9/10", url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4" },
              { score: "8.2/10", url: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4" }
            ].map((nft, idx) => (
              <div key={idx} className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors duration-300">
                <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden mb-[18px]">
                  <video 
                    src={nft.url} 
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="liquid-glass rounded-[20px] px-5 py-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-cream/70 uppercase tracking-wider">Rarity Score:</span>
                    <span className="text-[16px] font-bold mt-1">{nft.score}</span>
                  </div>
                  <button className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform">
                    <ChevronRight className="text-white" size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CTA / FINAL */}
      <section className="relative w-full overflow-hidden bg-background">
        {/* Native aspect ratio video */}
        <video 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4" 
          autoPlay loop muted playsInline
          className="w-full h-auto block relative z-0"
        />

        {/* Floating Text Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-6">
          <div className="relative">
            <span className="absolute -top-6 sm:-top-8 lg:-top-12 -left-4 sm:-left-8 font-condiment text-neon mix-blend-exclusion text-[17px] sm:text-[34px] lg:text-[68px] normal-case">
              Go beyond
            </span>
            <div className="font-grotesk uppercase text-[16px] sm:text-[32px] lg:text-[60px] leading-[1.1] text-right">
              <div className="mb-4 sm:mb-8 lg:mb-12">JOIN US.</div>
              <div>REVEAL WHAT'S HIDDEN.</div>
              <div>DEFINE WHAT'S NEXT.</div>
              <div>FOLLOW THE SIGNAL.</div>
            </div>
          </div>
        </div>

        {/* Absolute Social Icons Container */}
        <div className="absolute z-20 left-[8%] bottom-[12%] sm:bottom-[16%] lg:bottom-[20%]">
          <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.875rem] lg:rounded-[1.25rem] flex flex-col">
            {[Mail, FaTwitter, FaGithub].map((Icon, idx) => (
              <button 
                key={idx} 
                className={`
                  flex items-center justify-center
                  w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem]
                  h-[14vw] sm:h-[4.5rem] lg:h-[5.5rem]
                  hover:bg-white/10 transition-colors
                  ${idx !== 2 ? 'border-b border-white/10' : ''}
                `}
              >
                <Icon className="text-cream w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;