import Link from 'next/link';
import { BsCalendar3, BsMap, BsMegaphone, BsPeople } from "react-icons/bs";

export default function HomeScreen() {
  return (
    // ページ全体を縦方向のフレックスコンテナとし、スクロール可能にする
    <main className="flex flex-col items-center w-full text-secondary bg-background">

      {/* ===== ファーストビュー ===== */}
      <section className="relative flex flex-col items-center w-full h-svh text-center">
        {/* メインコンテンツ */}
        <div className="relative flex flex-col items-center justify-center flex-grow z-10">
          {/* 日付 */}
          <p className="mt-4 mb-1 text-lg md:text-2xl lg:text-3xl">
            2025.7.5 (Sat) - 2025.7.6 (Sun)
          </p>

          {/* サブタイトル */}
          <p className="text-base lg:text-lg">~ TEST TITLE ~</p>
        </div>

        {/* スタートボタン (画面下部に配置) */}
        <div className="z-10 w-7/12 mb-24">
          <Link href="/start">
            <button className="bg-primary h-16 max-w-md mx-auto backdrop-blur-sm shadow-md py-3 px-4 w-full text-lg rounded-full hover:bg-primary/80 transition-colors">
              GET STARTED →
            </button>
          </Link>
        </div>
      </section>

      {/* ===== 追加コンテンツエリア ===== */}
      <section className="w-full bg-background/80 backdrop-blur-sm py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-16">

          {/* --- イベント概要 --- */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">What is TESTTEXT?</h3>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              「TESTTEXT」へようこそ！今年で30周年を迎えるこのイベントは、音楽、アート、そしてテクノロジーが融合する祭典です。最高の体験と新たな発見が、あなたを待っています。
            </p>
          </div>

          {/* --- コンテンツリンク --- */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">Contents</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <ContentCard icon={<BsCalendar3 size={32} />} title="TIMETABLE" href="/timetable" />
              <ContentCard icon={<BsMap size={32} />} title="AREA MAP" href="/map" />
              <ContentCard icon={<BsPeople size={32} />} title="ARTISTS" href="/artists" />
              <ContentCard icon={<BsMegaphone size={32} />} title="GOODS" href="/goods" />
            </div>
          </div>

          {/* --- お知らせ --- */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">News</h3>
            <div className="max-w-xl mx-auto">
              <ul className="space-y-4">
                <NewsItem date="2025.06.10" title="公式サイトをオープンしました。" />
                <NewsItem date="2025.06.01" title="第1弾アーティストを発表しました。" />
                <NewsItem date="2025.05.15" title="チケットの先行販売を開始しました。" />
              </ul>
            </div>
          </div>

          {/* --- スポンサー --- */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-8">Sponsors</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              <p className="text-xl font-semibold opacity-60">SPONSOR A</p>
              <p className="text-xl font-semibold opacity-60">SPONSOR B</p>
              <p className="text-xl font-semibold opacity-60">SPONSOR C</p>
              <p className="text-xl font-semibold opacity-60">SPONSOR D</p>
              <p className="text-xl font-semibold opacity-60">SPONSOR E</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

// コンテンツカードコンポーネント
const ContentCard = ({ icon, title, href }) => (
  <Link href={href}>
    <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 flex flex-col items-center justify-center gap-4 aspect-square hover:bg-primary/20 hover:scale-105 transition-all duration-300">
      <div className="text-primary">{icon}</div>
      <h4 className="font-bold text-lg text-secondary">{title}</h4>
    </div>
  </Link>
);

// お知らせアイテムコンポーネント
const NewsItem = ({ date, title }) => (
  <li className="flex items-baseline gap-4 border-b border-secondary/10 pb-2">
    <p className="text-sm text-secondary/60">{date}</p>
    <p className="font-medium text-secondary">{title}</p>
  </li>
);