import React from 'react';
import {
  GraduationCap,
  Sparkles,
  Home,
  BookOpen,
  History,
  Lightbulb,
  Award,
  Smartphone,
  CheckCircle2,
} from 'lucide-react';
import { ActiveMainTab } from '../types';

interface HeaderProps {
  activeTab: ActiveMainTab;
  setActiveTab: (tab: ActiveMainTab) => void;
  onOpenTips: () => void;
  onOpenInstall: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenTips,
  onOpenInstall,
}) => {
  const mainTabs = [
    {
      id: 'home' as ActiveMainTab,
      label: 'Home',
      hindiLabel: 'मुख्य पृष्ठ',
      icon: Home,
    },
    {
      id: 'subjects' as ActiveMainTab,
      label: 'Subjects',
      hindiLabel: 'सभी 6 विषय',
      icon: BookOpen,
      badge: 'NCERT',
    },
    {
      id: 'pyq' as ActiveMainTab,
      label: 'PYQ (2016-2026)',
      hindiLabel: '10 साल के पेपर्स',
      icon: History,
      badge: 'Official',
    },
    {
      id: 'ai-teacher' as ActiveMainTab,
      label: 'AI Teacher',
      hindiLabel: 'फोटो डाउट समाधान',
      icon: GraduationCap,
      badge: 'Live',
    },
    {
      id: 'tricks' as ActiveMainTab,
      label: 'Tricks',
      hindiLabel: 'ट्रिक से समझो',
      icon: Lightbulb,
      badge: 'शॉर्टकट',
    },
    {
      id: 'math-solutions' as ActiveMainTab,
      label: 'Math Solutions',
      hindiLabel: 'गणित हल (1-15)',
      icon: BookOpen,
      badge: 'प्रश्नावली',
    },
  ];

  return (
    <header className="bg-stone-900/95 border-b border-stone-800 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-2.5 sm:py-3 gap-2.5 sm:gap-3">
          {/* Logo and App Title: "Padhega Bihar - Class 10" */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-stone-950 font-bold group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-2xl font-extrabold text-white tracking-tight">
                  Padhega Bihar <span className="text-amber-400 font-black">- Class 10</span>
                </h1>
                <span className="hidden xs:inline-flex items-center gap-1 text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  <Sparkles className="w-3 h-3" />
                  BSEB 2025-26
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-stone-400">
                बिहार बोर्ड कक्षा 10वीं NCERT हिंदी माध्यम • 100% सटीक तैयारी
              </p>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              id="header-install-app-btn"
              onClick={onOpenInstall}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-sm transition-all cursor-pointer"
              title="अपने Android फोन में यह ऐप इंस्टॉल करें"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>फोन में ऐप इंस्टॉल करें</span>
            </button>

            <button
              id="header-board-tips-btn"
              onClick={onOpenTips}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700 hover:text-white transition-colors cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">बोर्ड परीक्षा रणनीति & टिप्स</span>
              <span className="sm:hidden">रणनीति</span>
            </button>
          </div>
        </div>

        {/* Desktop / Tablet Navigation Tabs */}
        <nav className="hidden sm:flex space-x-1.5 overflow-x-auto pb-2 scrollbar-none pt-1 border-t border-stone-800/60">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`desktop-nav-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20 font-bold'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
                <span className={`text-[10px] hidden md:inline ${isActive ? 'text-stone-900/80 font-normal' : 'text-stone-500'}`}>
                  ({tab.hindiLabel})
                </span>
                {tab.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded font-bold ${
                      isActive
                        ? 'bg-stone-950/20 text-stone-950'
                        : 'bg-stone-800 text-stone-400'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
