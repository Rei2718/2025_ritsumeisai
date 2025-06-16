import { Timeline } from "@/components/ui/timeline"

export default function EventTimeline() {
  const eventData = [
    {
      title: "09:00",
      content: (
        <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
          <h3 className="text-xl font-bold text-white mb-3">開場・受付開始</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            参加者の受付とウェルカムドリンクの提供を開始します。ネットワーキングタイムもお楽しみください。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#dbb778]/20 text-[#dbb778] text-sm font-medium rounded-full border border-[#dbb778]/30">
              受付
            </span>
            <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
              ネットワーキング
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "10:00",
      content: (
        <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
          <h3 className="text-xl font-bold text-white mb-3">基調講演：未来のテクノロジー</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            業界のリーダーによる最新技術トレンドと今後の展望についての講演です。AI、Web3、量子コンピューティングなどの話題を予定しています。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#dbb778]/20 text-[#dbb778] text-sm font-medium rounded-full border border-[#dbb778]/30">
              基調講演
            </span>
            <span className="px-3 py-1.5 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">
              メインホール
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "11:30",
      content: (
        <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
          <h3 className="text-xl font-bold text-white mb-3">パネルディスカッション：スタートアップの挑戦</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            成功したスタートアップの創業者たちが、起業の経験談や困難を乗り越えた方法について語ります。質疑応答の時間も設けています。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#dbb778]/20 text-[#dbb778] text-sm font-medium rounded-full border border-[#dbb778]/30">
              パネルディスカッション
            </span>
            <span className="px-3 py-1.5 bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full border border-orange-500/30">
              起業・経営
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "13:00",
      content: (
        <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
          <h3 className="text-xl font-bold text-white mb-3">ランチブレイク＆展示会</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            お食事をお楽しみいただきながら、スポンサー企業の展示ブースをご覧ください。最新のプロダクトやサービスを直接体験できます。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#dbb778]/20 text-[#dbb778] text-sm font-medium rounded-full border border-[#dbb778]/30">
              ランチタイム
            </span>
            <span className="px-3 py-1.5 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
              展示会
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "14:30",
      content: (
        <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
          <h3 className="text-xl font-bold text-white mb-3">技術セッション：React 19の新機能</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            最新のReact 19の新機能とベストプラクティスについて、実際のコード例を交えながら詳しく解説します。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#dbb778]/20 text-[#dbb778] text-sm font-medium rounded-full border border-[#dbb778]/30">
              技術セッション
            </span>
            <span className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
              React
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "16:00",
      content: (
        <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
          <h3 className="text-xl font-bold text-white mb-3">ワークショップ：AIアプリ開発体験</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            参加者の皆様に実際にAIアプリケーションを開発していただくハンズオン形式のワークショップです。初心者の方も歓迎です。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#dbb778]/20 text-[#dbb778] text-sm font-medium rounded-full border border-[#dbb778]/30">
              ワークショップ
            </span>
            <span className="px-3 py-1.5 bg-pink-500/20 text-pink-400 text-sm font-medium rounded-full border border-pink-500/30">
              AI・機械学習
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "17:30",
      content: (
        <div className="bg-[#171717] rounded-xl p-6 shadow-sm border border-[#dbb778]/20">
          <h3 className="text-xl font-bold text-white mb-3">クロージング＆アフターパーティー</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            イベントの締めくくりとして、参加者同士の交流を深めるアフターパーティーを開催します。軽食とドリンクをご用意しています。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-[#dbb778]/20 text-[#dbb778] text-sm font-medium rounded-full border border-[#dbb778]/30">
              クロージング
            </span>
            <span className="px-3 py-1.5 bg-red-500/20 text-red-400 text-sm font-medium rounded-full border border-red-500/30">
              アフターパーティー
            </span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="relative w-full">
      <Timeline data={eventData} />
    </div>
  )
}