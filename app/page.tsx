import DemoScreen from "@/components/screen/DemoScreen";
import HomeScreen from "@/components/screen/HomeScreen";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BsHouseDoor,
  BsHouseDoorFill,
  BsGrid,
  BsGridFill,
  BsBroadcast,
  BsMusicNoteList,
  BsSearch,
} from "react-icons/bs";

export default function Home() {
  // --- スタイルの定義 ---

  // ボタンのレスポンシブな正方形サイズ
  const triggerSize = "w-14 h-14 md:w-16 md:h-16";

  // 左側4つのタブ（Home, Newなど）のスタイル
  const mainTriggerClassName = `
    group
    flex flex-col items-center justify-center gap-1
    ${triggerSize}
    rounded-full
    transition-all duration-200 ease-in-out
    text-gray-500
    dark:text-gray-400
    /* アクティブ時の背景ハイライトは指定しない */
    data-[state=active]:text-red-500
  `;

  // 右側の検索タブのスタイル
  const searchTriggerClassName = `
    group
    flex items-center justify-center
    ${triggerSize}
    rounded-full
    transition-all duration-200 ease-in-out
    text-gray-600
    dark:text-gray-400
    /* アクティブ時の背景ハイライトは指定しない */
    data-[state=active]:text-red-500
  `;

  // アイコンのスタイル
  const iconClassName = "h-6 w-6";
  const activeIconClassName = "hidden group-data-[state=active]:block";
  const inactiveIconClassName = "group-data-[state=active]:hidden";

  // テキストラベルのスタイル
  const spanClassName = "text-xs font-medium";

  // すりガラス風の共通背景スタイル
  const sharedBackgroundClassName = `
    bg-gray-200/60
    dark:bg-gray-800/70
    backdrop-blur-lg
    border border-white/30 dark:border-black/30
  `;

  return (
    <Tabs defaultValue="home" className="h-svh w-svw border rounded-2xl">
      {/* ===== タブコンテンツ (変更なし) ===== */}
      <TabsContent value="home" className="h-full w-full overflow-y-auto pointer-events-auto custom-scrollbar"><HomeScreen /></TabsContent>
      <TabsContent value="new" className="h-full w-full flex items-center justify-center"><DemoScreen /></TabsContent>
      <TabsContent value="radio" className="h-full w-full flex items-center justify-center"><DemoScreen /></TabsContent>
      <TabsContent value="library" className="h-full w-full flex items-center justify-center"><DemoScreen /></TabsContent>
      <TabsContent value="search" className="h-full w-full flex items-center justify-center"><DemoScreen /></TabsContent>

      {/* ===== タブナビゲーション (変更なし) ===== */}
      <TabsList className="w-11/12 max-w-lg mx-auto fixed bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center pointer-events-auto bg-transparent h-auto p-0">
        
        <div
          className={`
            flex flex-1 flex-row items-center justify-around
            p-1 rounded-full ${sharedBackgroundClassName}
          `}
        >
          <TabsTrigger value="home" className={mainTriggerClassName}>
            <BsHouseDoor className={`${iconClassName} ${inactiveIconClassName}`} />
            <BsHouseDoorFill className={`${iconClassName} ${activeIconClassName}`} />
            <span className={spanClassName}>Home</span>
          </TabsTrigger>
          <TabsTrigger value="new" className={mainTriggerClassName}>
            <BsGrid className={`${iconClassName} ${inactiveIconClassName}`} />
            <BsGridFill className={`${iconClassName} ${activeIconClassName}`} />
            <span className={spanClassName}>New</span>
          </TabsTrigger>
          <TabsTrigger value="radio" className={mainTriggerClassName}>
            <BsBroadcast className={iconClassName} />
            <span className={spanClassName}>Radio</span>
          </TabsTrigger>
          <TabsTrigger value="library" className={mainTriggerClassName}>
            <BsMusicNoteList className={iconClassName} />
            <span className={spanClassName}>Library</span>
          </TabsTrigger>
        </div>

        <div className="w-3 flex-shrink-0" />

        <div className={`p-1 rounded-full ${sharedBackgroundClassName}`}>
          <TabsTrigger value="search" className={searchTriggerClassName}>
            <BsSearch className={iconClassName} />
          </TabsTrigger>
        </div>

      </TabsList>
    </Tabs>
  );
}