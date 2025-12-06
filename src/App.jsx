 import React, { useState, useEffect } from 'react';
import { Moon, Skull, Zap, Bot, Users, Code, Shield, Crown, Terminal, Flame, Swords, Trophy, Star, Menu, X, ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react';

const TELEGRAM_LINK = 'https://t.me/Lord_devine';

const MEMBERS = [
  {
    id: 'lord-devine',
    name: 'LORD DEVINE',
    rank: 'The Architect of Chaos',
    level: 99,
    avatar: '👑',
    desc: 'The mastermind whose presence alone commands the battlefield. The visionary who turns code into weapons, silence into fear.',
    stats: { power: 100, strategy: 99, leadership: 100 }
  },
  {
    id: 'obito-uchiha',
    name: 'OBITO UCHIHA',
    rank: 'The Right Hand of Destruction',
    level: 95,
    avatar: '🔥',
    desc: 'The loyal warrior feared for his calm precision and razor-sharp strategy. Where others see chaos, he sees opportunity.',
    stats: { power: 95, strategy: 98, leadership: 92 }
  },
  {
    id: 'anonymous',
    name: 'ANONYMOUS™',
    rank: 'The Unseen Operator',
    level: 88,
    avatar: '👤',
    desc: 'The unseen operator, moving through digital shadows. No one sees him coming.',
    stats: { power: 88, strategy: 95, leadership: 85 }
  },
  {
    id: 'deluxe',
    name: 'DELUXE',
    rank: 'The Velvet Blade',
    level: 85,
    avatar: '💎',
    desc: 'Smooth but lethal, the velvet blade. Elegance meets destruction.',
    stats: { power: 85, strategy: 87, leadership: 83 }
  },
  {
    id: 'reaper',
    name: 'REAPER',
    rank: 'The Cold Finisher',
    level: 90,
    avatar: '💀',
    desc: 'The cold finisher, where hope goes to die. Final and absolute.',
    stats: { power: 92, strategy: 85, leadership: 88 }
  },
  {
    id: 'dave',
    name: 'DAVE',
    rank: 'The Reliable Edge',
    level: 82,
    avatar: '⚔️',
    desc: 'Steady and sharp, the reliable edge. Always there when needed.',
    stats: { power: 82, strategy: 84, leadership: 85 }
  },
  {
    id: 'big-dave',
    name: 'BIG DAVE',
    rank: 'The Powerhouse',
    level: 87,
    avatar: '💪',
    desc: 'The powerhouse who shakes the ground. Pure strength incarnate.',
    stats: { power: 95, strategy: 78, leadership: 82 }
  },
  {
    id: 'deedee',
    name: 'DEEDEE',
    rank: 'The Chaotic Wind',
    level: 80,
    avatar: '🌪️',
    desc: 'Swift and unpredictable, the chaotic wind. Strikes from nowhere.',
    stats: { power: 80, strategy: 88, leadership: 79 }
  },
  {
    id: 'mr-virus',
    name: 'MR VIRUS',
    rank: 'Digital Disruptor',
    level: 91,
    avatar: '🦠',
    desc: 'The digital disruptor, infecting systems with purpose. Code is his weapon.',
    stats: { power: 91, strategy: 94, leadership: 86 }
  },
  {
    id: 'fearless',
    name: 'FEARLESS',
    rank: 'The Unbreakable',
    level: 84,
    avatar: '🛡️',
    desc: 'Stands firm in any storm, unbreakable. Fear is unknown to him.',
    stats: { power: 84, strategy: 82, leadership: 90 }
  },
  {
    id: 'mrs-heat',
    name: 'MRS HEAT',
    rank: 'The Burning Fury',
    level: 86,
    avatar: '🔥',
    desc: 'Bringing fire to every clash, the burning fury. Passion and power combined.',
    stats: { power: 89, strategy: 83, leadership: 85 }
  },
  {
    id: 'demon-soul',
    name: 'DEMON SOUL',
    rank: 'Fear Itself',
    level: 89,
    avatar: '👿',
    desc: 'The intimidating spirit, fear itself. Darkness personified.',
    stats: { power: 91, strategy: 87, leadership: 88 }
  },
  {
    id: 'fearless-ecom',
    name: 'FEARLESS_ECOM',
    rank: 'The Calculated Hunter',
    level: 83,
    avatar: '🎯',
    desc: 'The calculated hunter, precision personified. Every move is planned.',
    stats: { power: 83, strategy: 92, leadership: 81 }
  },
  {
    id: 'hex',
    name: 'HEX',
    rank: 'The Dark Enchanter',
    level: 88,
    avatar: '🔮',
    desc: 'Cursed with brilliance, the dark enchanter. Magic meets technology.',
    stats: { power: 88, strategy: 90, leadership: 84 }
  },
  {
    id: 'invisible-raider',
    name: 'INVISIBLE RAIDER',
    rank: 'The Silent Step',
    level: 87,
    avatar: '👻',
    desc: 'The step no one ever hears coming. Pure stealth.',
    stats: { power: 87, strategy: 93, leadership: 82 }
  },
  {
    id: 'slur',
    name: 'SLUR',
    rank: 'The Relentless Flurry',
    level: 81,
    avatar: '⚡',
    desc: 'Chaotic and rapid, the relentless flurry. Unstoppable momentum.',
    stats: { power: 85, strategy: 80, leadership: 78 }
  },
  {
    id: 'demon',
    name: 'DEMON',
    rank: 'Pure Menace',
    level: 92,
    avatar: '😈',
    desc: 'Pure menace, unfiltered destruction. Chaos incarnate.',
    stats: { power: 94, strategy: 86, leadership: 90 }
  },
  {
    id: 'gunslinger',
    name: 'ˢRᴀɪᴅᴇʀ☬✯╾━╤デ╦︻✯★⟵⃪͢',
    rank: 'The Iconic Gunslinger',
    level: 93,
    avatar: '🔫',
    desc: 'The iconic gunslinger, legend in the flesh. Quick draw master.',
    stats: { power: 93, strategy: 89, leadership: 91 }
  },
  {
    id: 'solo-alpha',
    name: '𝗦𝗢𝗟𝗢 ᴬˡᵖʰᵃ',
    rank: 'The Lone Wolf',
    level: 90,
    avatar: '🐺',
    desc: 'The lone wolf who walks his own path, answering to no one. Independent power.',
    stats: { power: 90, strategy: 91, leadership: 87 }
  },
  {
    id: 'korezy',
    name: '𝕽ᴬᴵᴰᴱᴿˢK̷o̷r̷e̷z̷y̷',
    rank: 'The Whirlwind',
    level: 85,
    avatar: '🌀',
    desc: 'The unpredictable force, a whirlwind of chaos that strikes before anyone can react.',
    stats: { power: 88, strategy: 86, leadership: 83 }
  }
];

// ========================================
// NIGHT RAIDERS EMPIRE - PART 2 OF 5
// Main Component & Navigation
// ========================================

export default function NightRaidersEmpire() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMember, setSelectedMember] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [stats, setStats] = useState({ bots: 0, members: 0, raids: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        bots: prev.bots < 47 ? prev.bots + 1 : 47,
        members: prev.members < 1337 ? prev.members + 37 : 1337,
        raids: prev.raids < 666 ? prev.raids + 18 : 666
      }));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setCurrentPage('profile');
  };

  const pages = {
    home: <HomePage setPage={setCurrentPage} stats={stats} />,
    about: <AboutPage />,
    clan: <ClanPage onMemberClick={handleMemberClick} />,
    profile: selectedMember && <ProfilePage member={selectedMember} onBack={() => setCurrentPage('clan')} />,
    bots: <BotsPage />,
    contact: <ContactPage />
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedMember(null); }}>
            <div className="relative">
              <Skull className="w-10 h-10 text-purple-500 animate-pulse" />
              <Crown className="w-6 h-6 text-yellow-500 absolute -top-3 -right-2" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
                NIGHT RAIDERS
              </h1>
              <p className="text-xs text-purple-400">【☠︎】 ʟᴏʀᴅ ᴅᴇᴠɪɴᴇ ᴇᴍᴘɪʀᴇ 【☠︎】</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {['Home', 'About', 'Clan', 'Bots', 'Contact'].map(page => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page.toLowerCase()); setSelectedMember(null); }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  currentPage === page.toLowerCase()
                    ? 'bg-purple-600 text-white'
                    : 'text-purple-300 hover:text-white hover:bg-purple-600/20'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-purple-400 hover:text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-purple-500/30">
            {['Home', 'About', 'Clan', 'Bots', 'Contact'].map(page => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page.toLowerCase()); setMenuOpen(false); setSelectedMember(null); }}
                className="w-full text-left px-6 py-3 text-purple-300 hover:bg-purple-600/20 hover:text-white transition-all"
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="pt-20 relative z-10">
        {pages[currentPage]}
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-b from-transparent to-black border-t border-purple-500/30 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Skull className="w-6 h-6 text-purple-500" />
            <span className="text-purple-400">【☠︎】 NIGHT RAIDERS EMPIRE 【☠︎】</span>
            <Skull className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-slate-500 text-sm mb-2">
            💀 "ɪɴ ᴛʜᴇ ᴅᴀʀᴋɴᴇss, ᴡᴇ ʀɪsᴇ. ɪɴ ᴛʜᴇ sʜᴀᴅᴏᴡs, ᴡᴇ ʀᴜʟᴇ." 💀
          </p>
          <p className="text-slate-600 text-xs">© 2025 Lord Devine. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// ========================================
// NIGHT RAIDERS EMPIRE - PART 3 OF 5
// Home Page & Clan Page Components
// ========================================

function HomePage({ setPage, stats }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-50 animate-pulse"></div>
            <Skull className="w-32 h-32 text-purple-500 relative animate-bounce" />
            <Crown className="w-16 h-16 text-yellow-500 absolute -top-8 left-1/2 -translate-x-1/2 animate-pulse" />
          </div>
          
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-red-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            NIGHT RAIDERS
          </h1>
          
          <p className="text-3xl text-red-500 mb-2 font-bold">
            【☠︎】 ᴛʜᴇ ʀᴜʟᴇʀs ᴏғ ᴡʜᴀᴛsᴀᴘᴘ 【☠︎】
          </p>
          
          <p className="text-xl text-purple-400 mb-8">
            👿 Peace & Harmony • Absolute Power • Eternal Legacy 👿
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button 
              onClick={() => setPage('clan')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Swords className="w-6 h-6" />
              Enter The Legion
            </button>
            <button 
              onClick={() => setPage('bots')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <Bot className="w-6 h-6" />
              Bot Arsenal
            </button>
            <a 
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <ExternalLink className="w-6 h-6" />
              Contact Lord
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <StatCard icon={Bot} label="Active Bots" value={stats.bots} color="purple" />
          <StatCard icon={Users} label="Raiders" value={stats.members} color="red" />
          <StatCard icon={Flame} label="Total Raids" value={stats.raids} color="orange" />
        </div>

        <div className="bg-gradient-to-r from-purple-600/10 to-red-600/10 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            "ᴡᴇ ᴀʀᴇ ɴᴏᴛ ᴍᴇʀᴇ ᴘʟᴀʏᴇʀs. ᴡᴇ ᴀʀᴇ ᴛʜᴇ ʀᴜʟᴇʀs."
          </h2>
          <p className="text-slate-300 mb-6">
            Where others seek attention, we command respect. Where others make noise, we create legends.
          </p>
          <button 
            onClick={() => setPage('clan')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold transition-all"
          >
            Discover The Legion
          </button>
        </div>
      </div>
    </div>
  );
}

function ClanPage({ onMemberClick }) {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <Swords className="w-20 h-20 text-red-500 mx-auto mb-4 animate-pulse" />
        <h1 className="text-6xl font-bold mb-4 text-red-500">【☠︎】 NIGHT RAIDERS 【☠︎】</h1>
        <p className="text-2xl text-purple-400 mb-8">ᴛʜᴇ ʟᴇɢɪᴏɴ ᴏғ ᴅᴏᴍɪɴᴀɴᴄᴇ</p>
        
        <div className="max-w-3xl mx-auto text-slate-300 leading-relaxed mb-8">
          <p className="mb-4">
            In the shadow-forged realm of Night Raiders, every member is a force carved from chaos.
          </p>
          <p className="text-purple-400 italic">
            "Together, they don't just fight — they dominate. When the【☠︎】badge appears, the battlefield already knows: Night Raiders have arrived."
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <div className="bg-red-600/20 border border-red-500/50 rounded-xl p-6 text-center">
          <Users className="w-10 h-10 text-red-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white">{MEMBERS.length}</div>
          <div className="text-red-400">Warriors</div>
        </div>
        <div className="bg-purple-600/20 border border-purple-500/50 rounded-xl p-6 text-center">
          <Trophy className="w-10 h-10 text-purple-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white">666</div>
          <div className="text-purple-400">Raids Won</div>
        </div>
        <div className="bg-orange-600/20 border border-orange-500/50 rounded-xl p-6 text-center">
          <Flame className="w-10 h-10 text-orange-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white">99%</div>
          <div className="text-orange-400">Win Rate</div>
        </div>
        <div className="bg-blue-600/20 border border-blue-500/50 rounded-xl p-6 text-center">
          <Star className="w-10 h-10 text-blue-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white">#1</div>
          <div className="text-blue-400">Global Rank</div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-purple-400 text-center">⚔️ The Legion ⚔️</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => onMemberClick(member)}
              className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all cursor-pointer group"
            >
              <div className="text-center">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{member.avatar}</div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-400 text-sm mb-3">{member.rank}</p>
                <div className="bg-purple-600 rounded-full px-3 py-1 text-xs inline-block">
                  LVL {member.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-600/20 to-purple-600/20 border border-red-500/50 rounded-2xl p-12 text-center">
        <Skull className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
        <h2 className="text-4xl font-bold text-white mb-4">JOIN THE RAIDERS</h2>
        <p className="text-xl text-slate-300 mb-6">
          Think you have what it takes to survive in the darkness?
        </p>
        <p className="text-purple-400 mb-8">
          ☠️ "ᴏɴʟʏ ᴛʜᴇ sᴛʀᴏɴɢ sᴜʀᴠɪᴠᴇ. ᴏɴʟʏ ᴛʜᴇ ᴡᴏʀᴛʜʏ ʀɪsᴇ." ☠️
        </p>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
        >
          Apply to Join
          <ExternalLink className="w-5 h-5" />
        </a>
        <div className="mt-6 text-sm text-slate-400">
          <p>📱 Telegram: @Lord_devine</p>
          <p className="text-purple-400">Reach the throne: {TELEGRAM_LINK}</p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// NIGHT RAIDERS EMPIRE - PART 4 OF 5
// Profile Page & Other Pages
// ========================================

function ProfilePage({ member, onBack }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-purple-400 hover:text-white mb-8 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Legion
      </button>

      <div className="bg-slate-900/50 border border-purple-500/30 rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="text-8xl">{member.avatar}</div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-2">{member.name}</h1>
            <p className="text-2xl text-purple-400 mb-4">{member.rank}</p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="bg-purple-600 rounded-full px-4 py-2">
                <span className="font-bold">LEVEL {member.level}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({length: 5}).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(member.level / 20) ? 'text-yellow-500 fill-yellow-500' : 'text-slate-600'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Profile</h2>
          <p className="text-slate-300 leading-relaxed">{member.desc}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <StatBar label="Power" value={member.stats.power} color="red" />
          <StatBar label="Strategy" value={member.stats.strategy} color="purple" />
          <StatBar label="Leadership" value={member.stats.leadership} color="blue" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600/20 to-red-600/20 border border-purple-500/50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          💀 "ɪɴ ᴛʜᴇ ᴅᴀʀᴋɴᴇss, ᴡᴇ ʀɪsᴇ" 💀
        </h3>
        <p className="text-slate-300 mb-6">
          Every member of Night Raiders carries the legacy of dominance. United we reign.
        </p>
        <button
          onClick={onBack}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-bold transition-all"
        >
          View Full Legion
        </button>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl font-bold mb-4 text-purple-500">About Night Raiders</h1>
      <p className="text-2xl text-slate-400 mb-8">【☠︎】 ᴛʜᴇ ʟᴇɢᴇɴᴅ 【☠︎】</p>
      <div className="bg-slate-900/50 border border-purple-500/30 rounded-2xl p-8 text-left">
        <p className="text-slate-300 leading-relaxed mb-4">
          In the shadow-forged realm of Night Raiders【☠︎】, every member is a force carved from chaos.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          We symbolize peace and harmony — but make no mistake, this is not weakness. Our peace is the calm before the storm.
        </p>
        <p className="text-purple-400 font-bold text-center mt-8">
          💀 "ɪɴ ᴛʜᴇ ᴅᴀʀᴋɴᴇss, ᴡᴇ ʀɪsᴇ. ɪɴ ᴛʜᴇ sʜᴀᴅᴏᴡs, ᴡᴇ ʀᴜʟᴇ." 💀
        </p>
      </div>
    </div>
  );
}

function BotsPage() {
  const bots = [
    { name: 'Night Raiders Bot', platform: 'WhatsApp', users: '10K+', status: 'online', desc: 'Ultimate WhatsApp automation' },
    { name: 'Devine Discord', platform: 'Discord', users: '25K+', status: 'online', desc: 'Music, moderation & fun' },
    { name: 'Raid Commander', platform: 'Telegram', users: '5K+', status: 'online', desc: 'Clan management & raids' },
    { name: 'Auto Responder', platform: 'WhatsApp', users: '8K+', status: 'online', desc: 'Smart AI responses' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <Bot className="w-20 h-20 text-purple-500 mx-auto mb-4 animate-bounce" />
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Bot Arsenal
        </h1>
        <p className="text-2xl text-purple-400">🤖 47+ Bots • Infinite Power 🤖</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {bots.map((bot, i) => (
          <div key={i} className="bg-slate-900/50 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500 transition-all group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{bot.name}</h3>
                <p className="text-purple-400">{bot.platform}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                bot.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {bot.status.toUpperCase()}
              </div>
            </div>
            <p className="text-slate-400 mb-4">{bot.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-purple-300">{bot.users} users</span>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all group-hover:scale-105">
                Deploy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/50 rounded-2xl p-12 text-center">
        <Terminal className="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h2 className="text-4xl font-bold text-white mb-4">Want a Custom Bot?</h2>
        <p className="text-xl text-slate-300 mb-8">
          Get a personalized bot built by LORD DEVINE himself
        </p>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all"
        >
          Order Custom Bot
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl font-bold mb-4 text-purple-500">Contact LORD DEVINE</h1>
      <p className="text-2xl text-slate-400 mb-12">👿 ʀᴇᴀᴄʜ ᴛʜᴇ ᴛʜʀᴏɴᴇ 👿</p>
      
      <div className="bg-slate-900/50 border border-purple-500/30 rounded-2xl p-12">
        <div className="mb-8">
          <Crown className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-slate-300 mb-8">
            Want to join Night Raiders? Need a custom bot? Have a business proposal?
          </p>
        </div>

        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all transform hover:scale-105 mb-6"
        >
          <ExternalLink className="w-6 h-6" />
          Message on Telegram
        </a>

        <div className="text-slate-400 text-sm">
          <p>📱 @Lord_devine</p>
          <p className="text-purple-400 mt-2">{TELEGRAM_LINK}</p>
        </div>
      </div>
    </div>
  );
}

// ========================================
// NIGHT RAIDERS EMPIRE - PART 5 OF 5
// Helper Components & Deployment Guide
// ========================================

function StatCard({ icon: Icon, label, value, color }) {
  const colors = {
    purple: 'from-purple-600/20 to-purple-800/20 border-purple-500/50',
    red: 'from-red-600/20 to-red-800/20 border-red-500/50',
    orange: 'from-orange-600/20 to-orange-800/20 border-orange-500/50'
  };

  return (
    <div className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-6 text-center`}>
      <Icon className="w-12 h-12 mx-auto mb-2 text-white" />
      <div className="text-4xl font-bold text-white mb-1">{value}</div>
      <div className="text-slate-300">{label}</div>
    </div>
  );
}

function StatBar({ label, value, color }) {
  const colors = {
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500'
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-slate-300">{label}</span>
        <span className="text-white font-bold">{value}%</span>
      </div>
      <div className="bg-slate-800 rounded-full h-3 overflow-hidden">
        <div 
          className={`${colors[color]} h-full transition-all duration-1000`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
    } 
