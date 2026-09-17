import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { HomeScreen } from './components/HomeScreen';
import { SubjectsExplorer } from './components/SubjectsExplorer';
import { Pichhle10SaalPYQ } from './components/Pichhle10SaalPYQ';
import { AITeacherChatbot } from './components/AITeacherChatbot';
import { TrickSeSamjho } from './components/TrickSeSamjho';
import { MathPrashnawaliSolutions } from './components/MathPrashnawaliSolutions';
import { StudyTipsModal } from './components/StudyTipsModal';
import { InstallAppModal } from './components/InstallAppModal';
import { ActiveMainTab, SubjectId } from './types';
import { GraduationCap, ShieldCheck } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveMainTab>('home');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('maths');
  const [aiTeacherSubject, setAiTeacherSubject] = useState<string>('गणित (Maths)');
  const [aiTeacherChapter, setAiTeacherChapter] = useState<string>('');
  const [isTipsModalOpen, setIsTipsModalOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

  // Navigate to AI Teacher with context
  const handleNavigateToAITeacherWithContext = (subjectName: string, chapterName: string) => {
    setAiTeacherSubject(subjectName);
    setAiTeacherChapter(chapterName);
    setActiveTab('ai-teacher');
  };

  // Direct ask on PYQ
  const handleAskAITeacherPYQ = (questionText: string, subjectName: string, chapterName: string) => {
    setAiTeacherSubject(subjectName);
    setAiTeacherChapter(chapterName);
    setActiveTab('ai-teacher');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenTips={() => setIsTipsModalOpen(true)}
        onOpenInstall={() => setIsInstallModalOpen(true)}
      />

      {/* Main Screen Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-6 pb-24 sm:pb-28">
        {/* 1. Home Tab */}
        {activeTab === 'home' && (
          <HomeScreen
            onNavigateTab={setActiveTab}
            onSelectSubject={(subId) => {
              setSelectedSubjectId(subId);
              setActiveTab('subjects');
            }}
            onOpenTips={() => setIsTipsModalOpen(true)}
          />
        )}

        {/* 2. Subjects Tab (Class_10 > Subject > Chapter > Notes, MCQs, Objective, Subjective, Trick) */}
        {activeTab === 'subjects' && (
          <SubjectsExplorer
            selectedSubjectId={selectedSubjectId}
            onSelectSubject={setSelectedSubjectId}
            onNavigateToAITeacher={handleNavigateToAITeacherWithContext}
          />
        )}

        {/* 3. PYQ Tab (2016-2026 Pichhle 10 Saal Ke Papers) */}
        {activeTab === 'pyq' && (
          <Pichhle10SaalPYQ onAskAITeacher={handleAskAITeacherPYQ} />
        )}

        {/* 4. AI Teacher Tab (Gemini AI Chatbot with Photo & Text Doubts) */}
        {activeTab === 'ai-teacher' && (
          <AITeacherChatbot
            initialSubject={aiTeacherSubject}
            initialChapter={aiTeacherChapter}
          />
        )}

        {/* 5. Tricks Tab (Trick Se Samjho) */}
        {activeTab === 'tricks' && (
          <TrickSeSamjho onAskAITeacher={handleAskAITeacherPYQ} />
        )}

        {/* 6. Dedicated NCERT Math Prashnawali Solutions (All Chapters 1-15) */}
        {activeTab === 'math-solutions' && (
          <MathPrashnawaliSolutions
            onAskAITeacher={(q, ch) => handleAskAITeacherPYQ(q, 'गणित (Maths)', ch)}
          />
        )}
      </main>

      {/* Bottom Navigation with 5 Tabs (Home, Subjects, PYQ 2016-2026, AI Teacher, Tricks) */}
      <BottomNavigation activeTab={activeTab} onChangeTab={setActiveTab} />

      {/* Board Exam Strategy Modal */}
      <StudyTipsModal
        isOpen={isTipsModalOpen}
        onClose={() => setIsTipsModalOpen(false)}
      />

      {/* Android Mobile App Install Modal */}
      <InstallAppModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-stone-800 py-6 mb-14 sm:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-amber-500 flex items-center justify-center text-stone-950 font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium text-stone-300">
              Padhega Bihar - Class 10 • बिहार विद्यालय परीक्षा समिति (BSEB) 2025-26
            </span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% NCERT शुद्ध हिंदी माध्यम
            </span>
            <span>•</span>
            <button
              onClick={() => setIsTipsModalOpen(true)}
              className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              टॉपर रणनीति & टिप्स
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
