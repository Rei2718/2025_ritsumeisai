// timeLine/TimeLine.tsx

"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EVENT_SCHEDULE, type EventData } from './Data'; // データをインポート

// --- UIコンポーネント ---

/**
 * イベント情報を表示するカードコンポーネント
 */
const EventCard: React.FC<Omit<EventData, 'time'>> = ({ title, description, tags }) => {
  // タグの色をTailwindのクラスに変換するマッピング
  const TAG_COLOR_VARIANTS = {
    primary: "bg-[#dbb778]/20 text-[#dbb778] border-[#dbb778]/30",
    emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.label}
            className={`px-3 py-1.5 text-sm font-medium rounded-full border ${TAG_COLOR_VARIANTS[tag.color]}`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
};

/**
 * タイムラインの各項目（時間、点、線、イベントカード）を表示するコンポーネント
 */
const TimelineItem: React.FC<{
  item: EventData;
  isLast: boolean;
  index: number;
  totalItems: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}> = ({ item, isLast, index, totalItems, scrollYProgress }) => {
  // 各アイテムのアニメーションが開始・終了するスクロール位置を計算
  const start = index / totalItems;
  const end = (index + 1) / totalItems;

  // スクロール進捗(0~1)を、線の成長(scaleY)とフェードイン(opacity)のアニメーション値に変換
  const lineProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const lineOpacity = useTransform(scrollYProgress, [start, start + 0.1], [0, 1]);

  return (
    <div className="flex pt-8 md:pt-12 relative w-full max-w-4xl mx-auto">
      {/* 1. 時間表示 */}
      <div className="w-2/12 md:w-1/12 flex justify-end pr-4 md:pr-8">
        <time className="text-sm md:text-base font-medium text-gray-500 font-mono">{item.time}</time>
      </div>

      {/* 2. タイムラインの点と線 */}
      <div className="relative flex flex-col items-center mx-4">
        <div className="w-3 h-3 bg-[#dbb778] rounded-full border-2 border-[#121212] z-10" />
        {!isLast && (
          <div className="absolute top-3 w-0.5 overflow-hidden" style={{ height: "calc(100% + 2rem)" }}>
            {/* 静的な背景線 */}
            <div className="absolute inset-0 bg-[#dbb778]/30" />
            {/* アニメーションするプログレス線 */}
            <motion.div
              className="absolute inset-x-0 top-0 w-0.5 h-full bg-[#dbb778] origin-top"
              style={{ scaleY: lineProgress, opacity: lineOpacity }}
            />
          </div>
        )}
      </div>

      {/* 3. イベントカード */}
      <div className="w-10/12 md:w-11/12 pl-4 md:pl-8">
        <EventCard {...item} />
      </div>
    </div>
  );
};


/**
 * メインのイベントタイムラインコンポーネント
 */
export default function TimeLine() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // コンテナ要素のスクロール進捗を監視
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"], // ビューポートの10%〜90%の範囲でスクロールを監視
  });

  return (
    <div className="w-full font-sans bg-[#121212] min-h-screen text-white">
      {/* --- ヘッダーセクション --- */}
      <header className="w-full py-12 md:py-16 px-4">
        <div className="text-center mb-6 md:mb-8 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#dbb778] mb-4">
            Tech Conference 2024
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            最新テクノロジーと未来のイノベーションを探求する一日限りの特別イベント
          </p>
        </div>
        <div className="bg-[#171717] rounded-2xl p-4 md:p-6 shadow-lg border border-[#dbb778]/20 max-w-md mx-auto">
          <div className="flex items-center justify-between text-xs md:text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#dbb778] rounded-full" />
              <span>2024年12月15日（日）</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#dbb778] rounded-full" />
              <span>東京国際フォーラム</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- タイムラインセクション --- */}
      <main ref={containerRef} className="w-full px-4">
        <div className="relative pb-16 md:pb-20">
          {EVENT_SCHEDULE.map((item, index) => (
            <TimelineItem
              key={item.title}
              item={item}
              isLast={index === EVENT_SCHEDULE.length - 1}
              index={index}
              totalItems={EVENT_SCHEDULE.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </main>
    </div>
  );
}