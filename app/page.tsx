import HomeScreen from "@/components/screen/HomeScreen";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { BsGeoAlt, BsGeoAltFill } from "react-icons/bs";
import { BsClock, BsClockFill } from "react-icons/bs";
import { BsCupHot, BsCupHotFill } from "react-icons/bs";
import { BsGear, BsGearFill } from "react-icons/bs";

export default function Home() {
  return (
    <Tabs
      defaultValue="home"
      className="
        h-svh
        w-svw
        bg-white/20 dark:bg-black/30
        backdrop-blur-lg
        border border-white/30 dark:border-black/30
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
          bg-white/10 dark:bg-black/20
          backdrop-blur-sm
          border border-white/20 dark:border-black/20
        "
      >
        <HomeScreen />
      </TabsContent>

      <TabsContent
        value="map"
        className="
          h-svh w-full
          overflow-y-auto
          pointer-events-auto
          custom-scrollbar
          bg-white/10 dark:bg-black/20
          backdrop-blur-sm
          border border-white/20 dark:border-black/20
          flex items-center justify-center
        "
      >
        MAP CONTENT HERE
      </TabsContent>

      <TabsContent
        value="time"
        className="
          h-svh w-full
          overflow-y-auto
          pointer-events-auto
          custom-scrollbar
          bg-white/10 dark:bg-black/20
          backdrop-blur-sm
          border border-white/20 dark:border-black/20
          flex items-center justify-center
        "
      >
        TIME CONTENT HERE
      </TabsContent>

      <TabsContent
        value="food"
        className="
          h-svh w-full
          overflow-y-auto
          pointer-events-auto
          custom-scrollbar
          bg-white/10 dark:bg-black/20
          backdrop-blur-sm
          border border-white/20 dark:border-black/20
          flex items-center justify-center
        "
      >
        FOOD CONTENT HERE
      </TabsContent>

      <TabsContent
        value="settings"
        className="
          h-svh w-full
          overflow-y-auto
          pointer-events-auto
          custom-scrollbar
          bg-white/10 dark:bg-black/20
          backdrop-blur-sm
          border border-white/20 dark:border-black/20
          flex items-center justify-center
        "
      >
        SETTINGS CONTENT HERE
      </TabsContent>

      <TabsList
        className="
          bg-white/20 dark:bg-black/30
          backdrop-blur-sm
          w-[95%] max-w-md
          mx-auto
          fixed bottom-2 left-1/2 transform -translate-x-1/2
          z-20
          border border-white/30 dark:border-black/30
          rounded-full
          flex flex-row items-center justify-between
          p-1.5
          pointer-events-auto
        "
      >
        <TabsTrigger
          value="home"
          className="
            group flex flex-col items-center justify-center gap-1 flex-1
            rounded-full
            transition-colors
            bg-transparent
          "
        >
          <BsHouseDoor className="group-data-[state=active]:hidden h-6 w-6 text-primary" />
          <BsHouseDoorFill className="hidden group-data-[state=active]:block text-primary h-6 w-6" />
          <span className="text-[10px] group-data-[state=active]:text-primary text-primary text-center">
            HOME
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="map"
          className="
            group flex flex-col items-center justify-center gap-1 flex-1
            rounded-full
            transition-colors
            bg-transparent
          "
        >
          <BsGeoAlt className="group-data-[state=active]:hidden h-6 w-6 text-primary" />
          <BsGeoAltFill className="hidden group-data-[state=active]:block text-primary h-6 w-6" />
          <span className="text-[10px] group-data-[state=active]:text-primary text-primary text-center">
            MAP
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="time"
          className="
            group flex flex-col items-center justify-center gap-1 flex-1
            rounded-full
            transition-colors
            bg-transparent
          "
        >
          <BsClock className="group-data-[state=active]:hidden h-6 w-6 text-primary" />
          <BsClockFill className="hidden group-data-[state=active]:block text-primary h-6 w-6" />
          <span className="text-[10px] group-data-[state=active]:text-primary text-primary text-center">
            TIME
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="food"
          className="
            group flex flex-col items-center justify-center gap-1 flex-1
            rounded-full
            transition-colors
            bg-transparent
          "
        >
          <BsCupHot className="group-data-[state=active]:hidden h-6 w-6 text-primary" />
          <BsCupHotFill className="hidden group-data-[state=active]:block text-primary h-6 w-6" />
          <span className="text-[10px] group-data-[state=active]:text-primary text-primary text-center">
            FOOD
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="settings"
          className="
            group flex flex-col items-center justify-center gap-1 flex-1
            rounded-full
            transition-colors
            bg-transparent
          "
        >
          <BsGear className="group-data-[state=active]:hidden h-6 w-6 text-primary" />
          <BsGearFill className="hidden group-data-[state=active]:block text-primary h-6 w-6" />
          <span className="text-[10px] group-data-[state=active]:text-primary text-primary text-center">
            SETTINGS
          </span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}