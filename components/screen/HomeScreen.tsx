import Link from 'next/link';
import { Londrina_Solid, Londrina_Shadow } from 'next/font/google';

const londrinaSolid = Londrina_Solid({
  subsets: ['latin'],
  weight: ['400']
});

const londrinaShadow = Londrina_Shadow({
  subsets: ['latin'],
  weight: ['400']
});

export default function HomeScreen() {
  return (
    <section className="relative h-full w-full">

      {/* メインコンテンツ */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-foreground">
        {/* タイトル */}
        <div className="mb-4 px-2 text-6xl md:text-7xl lg:text-8xl">
          <div className={londrinaSolid.className}>THE 30TH</div>
          <div className={londrinaShadow.className}>TESTTEXT</div>
        </div>

        {/* 日付 */}
        <div className="mb-1 text-lg md:text-2xl lg:text-3xl">
          2025.7.5 (Sat) - 2025.7.6 (Sun)
        </div>

        {/* サブタイトル */}
        <div className="text-base lg:text-lg">~ TEST TITLE ~</div>
      </div>

      {/* スタートボタン */}
      <div className="absolute inset-x-0 bottom-[16.66vh] w-9/12 max-w-md mx-auto z-10">
        <Link href="/start">
          <button className="bg-primary backdrop-blur-sm shadow-md py-2 px-4 w-full text-base rounded-full hover:bg-primary/80 transition-colors">
            GET STARTED →
          </button>
        </Link>
      </div>
    </section>
  );
}