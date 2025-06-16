export function EventHeader() {
  return (
    <header className="w-11/12 mx-auto py-16 px-4">
      {/* Main Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-[#dbb778] mb-4">Tech Conference 2024</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          最新テクノロジーと未来のイノベーションを探求する一日限りの特別イベント
        </p>
      </div>

      {/* Event Information Card */}
      <div className="bg-[#171717] rounded-2xl p-6 shadow-lg border border-[#dbb778]/20 max-w-md mx-auto">
        <div className="flex items-center justify-between text-sm text-gray-400">
          {/* Event Date */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#dbb778] rounded-full" />
            <span>2024年12月15日（日）</span>
          </div>

          {/* Event Venue */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#dbb778] rounded-full" />
            <span>東京国際フォーラム</span>
          </div>
        </div>
      </div>
    </header>
  )
}