import DemoScreen from "@/components/screen/DemoScreen";
import HomeScreen from "@/components/screen/HomeScreen";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { BsGeoAlt, BsGeoAltFill } from "react-icons/bs";
import { BsClock, BsClockFill } from "react-icons/bs";
import { BsCupHot, BsCupHotFill } from "react-icons/bs";
import { BsGear, BsGearFill } from "react-icons/bs";

export default function Home() {
  const triggerClassName = "group flex flex-col items-center justify-center gap-0.5 w-16 h-16 rounded-full transition-colors duration-200 ease-in-out";
  const iconInactiveClassName = "group-data-[state=active]:hidden h-5 w-5 text-primary";
  const iconActiveClassName = "hidden group-data-[state=active]:block h-5 w-5 text-secondary";
  const spanClassName = "text-xs text-center text-primary group-data-[state=active]:text-secondary";
  const sharedBackgroundClassName = "rounded-full bg-foreground/40 backdrop-blur-md border transition-colors";

  return (
    <Tabs
      defaultValue="home"
      className="
        h-svh
        w-svw
        border
        rounded-2xl
      "
    >
      <TabsContent
        value="home"
        className="
          h-full w-full
          overflow-y-auto
          pointer-events-auto
          custom-scrollbar
          border
        "
      >
        <HomeScreen />
      </TabsContent>

      <TabsContent value="map"><DemoScreen /></TabsContent>
      <TabsContent value="time" className="h-full w-full flex items-center justify-center border custom-scrollbar overflow-y-auto pointer-events-auto"><DemoScreen /></TabsContent>
      <TabsContent value="food" className="h-full w-full flex items-center justify-center border custom-scrollbar overflow-y-auto pointer-events-auto"><DemoScreen /></TabsContent>
      <TabsContent value="settings" className="h-full w-full flex items-center justify-center border custom-scrollbar overflow-y-auto pointer-events-auto"><DemoScreen /></TabsContent>


      <TabsList
        className="
          w-11/12
          max-w-4xl
          mx-auto
          fixed bottom-4 left-1/2 transform -translate-x-1/2
          z-20
          flex flex-row items-center
          pointer-events-auto
          bg-transparent
        "
      >
        {/* 左側のグループ: flex-1で伸長させ、justify-aroundで内部を均等配置 */}
        <div className={`
          flex-1
          flex flex-row items-center justify-around
          ${sharedBackgroundClassName}
          border-secondary/10
        `}>
          <TabsTrigger value="home" className={triggerClassName}>
            <BsHouseDoor className={iconInactiveClassName} />
            <BsHouseDoorFill className={iconActiveClassName} />
            <span className={spanClassName}>HOME</span>
          </TabsTrigger>

          <TabsTrigger value="map" className={triggerClassName}>
            <BsGeoAlt className={iconInactiveClassName} />
            <BsGeoAltFill className={iconActiveClassName} />
            <span className={spanClassName}>MAP</span>
          </TabsTrigger>

          <TabsTrigger value="time" className={triggerClassName}>
            <BsClock className={iconInactiveClassName} />
            <BsClockFill className={iconActiveClassName} />
            <span className={spanClassName}>TIME</span>
          </TabsTrigger>

          <TabsTrigger value="food" className={triggerClassName}>
            <BsCupHot className={iconInactiveClassName} />
            <BsCupHotFill className={iconActiveClassName} />
            <span className={spanClassName}>FOOD</span>
          </TabsTrigger>
        </div>

        {/* アイコン一つ分の幅を持つ固定スペーサー */}
        <div className="w-11 flex-shrink-0" />

        {/* 独立したSettingsタブのトリガーに直接背景を適用 */}
        <TabsTrigger
          value="settings"
          className={`
            ${triggerClassName}
            ${sharedBackgroundClassName}
            border-primary/10
            data-[state=active]:bg-secondary/10
            data-[state=active]:border-secondary/20
          `}
        >
          <BsGear className={iconInactiveClassName} />
          <BsGearFill className={iconActiveClassName} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}