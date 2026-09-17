import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  History,
  Lightbulb,
  Camera,
  Award,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flame,
  Target,
  Zap,
} from 'lucide-react';
import { ActiveMainTab, SubjectId } from '../types';
import { CLASS_10_DATABASE } from '../data/class10SubjectData';

interface HomeScreenProps {
  onNavigateTab: (tab: ActiveMainTab) => void;
  onSelectSubject: (subjectId: SubjectId) => void;
  onOpenTips: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateTab,
  onSelectSubject,
  onOpenTips,
}) => {
  // Quick Daily Challenge Question
  const [dailyAnswered, setDailyAnswered] = useState<number | null>(null);

  const dailyQuiz = {
    subject: 'विज्ञान (Chemistry)',
    chapter: '1. रासायनिक अभिक्रियाएं एवं समीकरण',
    question: 'जब मैग्नीशियम रिबन को वायु में जलाया जाता है, तो उत्पन्न आग की लौ किस रंग की होती है?',
    options: ['पीली (Yellow)', 'नीली (Blue)', 'चमकीला श्वेत (Dazzling White)', 'लाल (Red)'],
    correctIndex: 2,
    explanation: 'मैग्नीशियम रिबन वायु की ऑक्सीजन के साथ क्रिया करके चमकदार श्वेत (Dazzling White) लौ के साथ जलता है और मैग्नीशियम ऑक्साइड (MgO) का श्वेत चूर्ण बनाता है: 2Mg + O₂ → 2MgO।',
  };

  const subjectList = [
    {
      id: 'maths' as SubjectId,
      name: 'गणित (Maths)',
      sub: 'वास्तविक संख्याएँ, त्रिकोणमिति, द्विघात, ज्यामिति',
      icon: '📐',
      color: 'from-blue-600/20 to-blue-500/5 border-blue-500/30 hover:border-blue-400',
      tagColor: 'text-blue-400 bg-blue-500/10',
    },
    {
      id: 'science' as SubjectId,
      name: 'विज्ञान (Science)',
      sub: 'भौतिकी, रसायनशास्त्र, जीवविज्ञान (100% NCERT)',
      icon: '🧪',
      color: 'from-emerald-600/20 to-emerald-500/5 border-emerald-500/30 hover:border-emerald-400',
      tagColor: 'text-emerald-400 bg-emerald-500/10',
    },
    {
      id: 'social_science' as SubjectId,
      name: 'सामाजिक विज्ञान',
      sub: 'इतिहास, भूगोल, राजनीति, अर्थशास्त्र, आपदा',
      icon: '🌍',
      color: 'from-amber-600/20 to-amber-500/5 border-amber-500/30 hover:border-amber-400',
      tagColor: 'text-amber-400 bg-amber-500/10',
    },
    {
      id: 'hindi' as SubjectId,
      name: 'हिंदी (Hindi)',
      sub: 'गोधूलि (भाग 2), वर्णिका (भाग 2) व हिंदी व्याकरण',
      icon: '📖',
      color: 'from-rose-600/20 to-rose-500/5 border-rose-500/30 hover:border-rose-400',
      tagColor: 'text-rose-400 bg-rose-500/10',
    },
    {
      id: 'sanskrit' as SubjectId,
      name: 'संस्कृत (Sanskrit)',
      sub: 'पीयूषम् (भाग 2), श्लोक अर्थ, व्याकरण व अनुवाद',
      icon: '📜',
      color: 'from-purple-600/20 to-purple-500/5 border-purple-500/30 hover:border-purple-400',
      tagColor: 'text-purple-400 bg-purple-500/10',
    },
    {
      id: 'english' as SubjectId,
      name: 'अंग्रेज़ी (English)',
      sub: 'Panorama Part 2, Prose, Poetry & Grammar',
      icon: '🔤',
      color: 'from-sky-600/20 to-sky-500/5 border-sky-500/30 hover:border-sky-400',
      tagColor: 'text-sky-400 bg-sky-500/10',
    },
  ];

  return (
    <div className="space-y-6 pb-20 animate-fade-in">
      {/* Hero Welcome Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border border-stone-800 p-5 sm:p-6 shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>बिहार विद्यालय परीक्षा समिति (BSEB) 2025-26</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Padhega Bihar - Class 10
            </h1>
            <p className="text-stone-300 text-sm mt-1 max-w-xl">
              100% NCERT हिंदी माध्यम — सभी 6 विषय, पिछले 10 साल के PYQ (2016-2026), फोटो डाउट के साथ AI Teacher और याद रखने की जादुई ट्रिक्स!
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => onNavigateTab('ai-teacher')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 shadow-md shadow-amber-500/20 cursor-pointer transition-all active:scale-95"
            >
              <Camera className="w-4 h-4" />
              <span>फोटो खींचकर डाउट पूछें</span>
            </button>
            <button
              onClick={onOpenTips}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-colors"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>टॉपर रणनीति</span>
            </button>
          </div>
        </div>

        {/* Motivation Pill */}
        <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center gap-2 text-xs text-stone-400">
          <Flame className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-stone-200 font-medium">आज का विचार:</strong> “मेहनत इतनी खामोशी से करो कि तुम्हारी सफलता का शोर पूरे बिहार में गूंजे!”
          </span>
        </div>
      </div>

      {/* Feature Navigation Triad */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {/* Card 1: AI Teacher */}
        <div
          onClick={() => onNavigateTab('ai-teacher')}
          className="group relative overflow-hidden rounded-xl bg-stone-900 border border-stone-800 p-4 hover:border-amber-500/50 transition-all cursor-pointer shadow-sm hover:shadow-amber-500/5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="w-9 h-9 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400">
              <Camera className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              फोटो + टेक्स्ट
            </span>
          </div>
          <h3 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors flex items-center gap-1">
            AI Teacher से पूछें
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            किताब या कॉपी की फोटो खींचें, AI शिक्षक तुरंत चरणबद्ध हल समझाएंगे।
          </p>
        </div>

        {/* Card 2: PYQ Papers 2016-2026 */}
        <div
          onClick={() => onNavigateTab('pyq')}
          className="group relative overflow-hidden rounded-xl bg-stone-900 border border-stone-800 p-4 hover:border-blue-500/50 transition-all cursor-pointer shadow-sm hover:shadow-blue-500/5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center text-blue-400">
              <History className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
              2016 - 2026
            </span>
          </div>
          <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition-colors flex items-center gap-1">
            पिछले 10 साल के पेपर्स
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            बिहार बोर्ड के ऑफिशियल 10 वर्ष के प्रश्न-पत्र, विस्तृत हिंदी हल के साथ।
          </p>
        </div>

        {/* Card 3: Tricks Hub */}
        <div
          onClick={() => onNavigateTab('tricks')}
          className="group relative overflow-hidden rounded-xl bg-stone-900 border border-stone-800 p-4 hover:border-purple-500/50 transition-all cursor-pointer shadow-sm hover:shadow-purple-500/5"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="w-9 h-9 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400">
              <Lightbulb className="w-5 h-5" />
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30">
              शॉर्टकट & Mnemonics
            </span>
          </div>
          <h3 className="font-bold text-white text-base group-hover:text-purple-300 transition-colors flex items-center gap-1">
            ट्रिक से समझो
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            कठिन सूत्रों, अभिक्रियाओं और इतिहास की तारीखों को याद रखने की देसी ट्रिक्स।
          </p>
        </div>
      </div>

      {/* Featured Special Banner: Math Prashnawali Solutions */}
      <div
        onClick={() => onNavigateTab('math-solutions')}
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 border-2 border-emerald-500/40 p-4 sm:p-5 hover:border-emerald-400 transition-all cursor-pointer shadow-lg hover:shadow-emerald-500/10"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 text-stone-950 flex items-center justify-center font-black text-xl shadow-md shrink-0 group-hover:scale-105 transition-transform">
              ∑
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  नवीनतम विशेष फीचर (NCERT Math)
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-stone-950">
                  हर चैप्टर की हर प्रश्नावली
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                गणित सम्पूर्ण प्रश्नावली हल (1.1 से 15.2 तक)
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-stone-300 mt-0.5">
                अध्याय 1 से 15 के सभी प्रश्नों के चरणबद्ध उत्तर, यूक्लिड प्रमेय, त्रिकोणमिति सर्वसमिकाएं, थेल्स व पाइथागोरस प्रमेय उपपत्ति।
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <span className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs shadow-md transition-all">
              प्रश्नावली हल खोलें ➡️
            </span>
          </div>
        </div>
      </div>

      {/* Subject Selection Section */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-400" />
              बिहार बोर्ड कक्षा 10वीं — सभी 6 विषय
            </h2>
            <p className="text-xs text-stone-400">
              NCERT नोट्स, 4-विकल्प MCQ टेस्ट, 1-अंकीय वस्तुनिष्ठ, 2-3 व 5 अंक उत्तर तथा ट्रिक्स
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('subjects')}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>सभी देखें</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {subjectList.map((sub) => (
            <div
              key={sub.id}
              onClick={() => {
                onSelectSubject(sub.id);
                onNavigateTab('subjects');
              }}
              className={`rounded-xl border bg-gradient-to-br ${sub.color} p-4 transition-all duration-200 cursor-pointer shadow-sm hover:scale-[1.01]`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{sub.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {sub.name}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-1 mt-0.5">
                      {sub.sub}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 mt-1 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily NCERT Challenge Quiz */}
      <div className="rounded-2xl bg-stone-900 border border-stone-800 p-5 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/15 text-amber-400">
              <Zap className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                आज का NCERT अभ्यास प्रश्न
              </span>
              <h3 className="text-sm font-bold text-white">
                {dailyQuiz.subject} • {dailyQuiz.chapter}
              </h3>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-stone-800 text-stone-300">
            1 अंक (वस्तुनिष्ठ)
          </span>
        </div>

        <p className="text-stone-200 text-sm font-medium mb-4">
          {dailyQuiz.question}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
          {dailyQuiz.options.map((opt, idx) => {
            const isSelected = dailyAnswered === idx;
            const isCorrect = idx === dailyQuiz.correctIndex;
            let btnClass = 'bg-stone-800/80 hover:bg-stone-750 text-stone-200 border-stone-750';

            if (dailyAnswered !== null) {
              if (isCorrect) {
                btnClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/80 font-bold';
              } else if (isSelected) {
                btnClass = 'bg-rose-500/20 text-rose-300 border-rose-500/80 font-semibold';
              } else {
                btnClass = 'opacity-50 border-transparent text-stone-400';
              }
            }

            return (
              <button
                key={idx}
                disabled={dailyAnswered !== null}
                onClick={() => setDailyAnswered(idx)}
                className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnClass}`}
              >
                <span>{opt}</span>
                {dailyAnswered !== null && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                )}
                {dailyAnswered !== null && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {dailyAnswered !== null && (
          <div className="mt-3 p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-300 animate-fade-in">
            <span className="font-bold text-amber-400 block mb-1">
              NCERT प्रामाणिक व्याख्या:
            </span>
            <p>{dailyQuiz.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};
