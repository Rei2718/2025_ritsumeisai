import HomeScreen from "@/components/screen/HomeScreen";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  return (
    <Tabs defaultValue="home" className="h-svh w-svw rounded-2xl bg-background">
      {/* 各タブのコンテンツ */}
      <TabsContent value="home" className="w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="new" className="w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="radio" className="w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="library" className="w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="search" className="w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>

      {/* アイコンサイズなどの共通設定をここで一括定義 */}
      <TabsList
        className={`
          w-[87%] max-w-xl mx-auto
          fixed bottom-3 left-1/2 -translate-x-1/2 z-20
          flex items-center pointer-events-auto bg-transparent p-0
          [&_button]:flex [&_button]:items-center [&_button]:justify-center
          [&_button]:rounded-full [&_button]:transition-all
          [&_button]:duration-200 [&_button]:ease-in-out
          [&_button]:text-primary [&_button]:data-[state=active]:text-secondary
          [&_button]:w-14 [&_button]:h-14
        `}
      >
        <div className="flex flex-1 items-center justify-around p-1 rounded-full bg-muted backdrop-blur-lg">
          <TabsTrigger value="home" className="group">
            <BsHouseDoor className="h-7 w-7 group-data-[state=active]:hidden" />
            <BsHouseDoorFill className="h-7 w-7 hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger value="new" className="group">
            <BsGrid className="h-7 w-7 group-data-[state=active]:hidden" />
            <BsGridFill className="h-7 w-7 hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger value="radio" className="group">
            <BsBroadcast className="h-7 w-7" />
          </TabsTrigger>
          <TabsTrigger value="library" className="group">
            <BsMusicNoteList className="h-7 w-7" />
          </TabsTrigger>
        </div>

        <div className="w-6 flex-shrink-0" />

        <div className="flex p-1 rounded-full bg-muted backdrop-blur-lg">
          <DropdownMenu>
            <DropdownMenuTrigger value="search" className="group">
              <BsSearch className="h-7 w-7" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"             // 上方向に展開
              align="end"            // 右寄せ
              className="
                bottom-4            /* ビューポート下から 3rem 上 */
                right-0              /* ビューポート右から 1rem 内側 */
                w-48                 /* 幅 12rem */
                h-auto               /* 高さは中身に合わせる */
                bg-muted
              "
            >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </TabsList>
    </Tabs>
  );
}