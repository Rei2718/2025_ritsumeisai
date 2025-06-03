import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BsHouseDoor, BsHouseDoorFill } from "react-icons/bs";
import { BsGeoAlt, BsGeoAltFill } from "react-icons/bs";
import { BsClock, BsClockFill } from "react-icons/bs";
import { BsCupHot, BsCupHotFill } from "react-icons/bs";
import { BsGear, BsGearFill } from "react-icons/bs";

export default function Home() {
  return (
    <Tabs defaultValue="home" className="h-svh">
      <TabsContent value="home" className="h-svh w-full overflow-y-auto pointer-events-auto custom-scrollbar">
        <div className="flex items-center justify-center min-h-[300svh] py-20">
          <div className="text-white text-4xl font-bold bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
            HOME CONTENT HERE
          </div>
        </div>
      </TabsContent>
      <TabsContent value="map" className="h-svh w-full overflow-y-auto pointer-events-auto custom-scrollbar">
        <div className="flex items-center justify-center min-h-full">
          <div className="text-white text-4xl font-bold bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
            MAP CONTENT HERE
          </div>
        </div>
      </TabsContent>
      <TabsContent value="time" className="h-svh w-full overflow-y-auto pointer-events-auto custom-scrollbar">
        <div className="flex items-center justify-center min-h-full">
          <div className="text-white text-4xl font-bold bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
            TIME CONTENT HERE
          </div>
        </div>
      </TabsContent>
      <TabsContent value="food" className="h-svh w-full overflow-y-auto pointer-events-auto custom-scrollbar">
        <div className="flex items-center justify-center min-h-full">
          <div className="text-white text-4xl font-bold bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
            FOOD CONTENT HERE
          </div>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="h-svh w-full overflow-y-auto pointer-events-auto custom-scrollbar">
        <div className="flex items-center justify-center min-h-full">
          <div className="text-white text-4xl font-bold bg-black/30 p-8 rounded-2xl backdrop-blur-sm">
            SETTINGS CONTENT HERE
          </div>
        </div>
      </TabsContent>

      <TabsList
        className="w-[95%] max-w-md mx-auto fixed bottom-2 left-1/2 transform -translate-x-1/2 z-20 bg-gray-800/70 backdrop-blur-sm rounded-full flex flex-row items-center justify-between p-1.5 pointer-events-auto"
      >
        <TabsTrigger
          value="home"
          className="group flex flex-col items-center justify-center gap-1 flex-1 rounded-full transition-colors"
        >
          <BsHouseDoor className="group-data-[state=active]:hidden h-5 w-5 text-gray-300"/>
          <BsHouseDoorFill className="hidden group-data-[state=active]:block text-white h-5 w-5" />
          <span className="text-[10px] group-data-[state=active]:text-white text-gray-300 text-center">
            HOME
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="map"
          className="group flex flex-col items-center justify-center gap-1 flex-1 rounded-full transition-colors"
        >
          <BsGeoAlt className="group-data-[state=active]:hidden h-5 w-5 text-gray-300"/>
          <BsGeoAltFill className="hidden group-data-[state=active]:block text-white h-5 w-5" />
          <span className="text-[10px] group-data-[state=active]:text-white text-gray-300 text-center">
            MAP
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="time"
          className="group flex flex-col items-center justify-center gap-1 flex-1 rounded-full transition-colors"
        >
          <BsClock className="group-data-[state=active]:hidden h-5 w-5 text-gray-300"/>
          <BsClockFill className="hidden group-data-[state=active]:block text-white h-5 w-5" />
          <span className="text-[10px] group-data-[state=active]:text-white text-gray-300 text-center">
            TIME
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="food"
          className="group flex flex-col items-center justify-center gap-1 flex-1 rounded-full transition-colors"
        >
          <BsCupHot className="group-data-[state=active]:hidden h-5 w-5 text-gray-300"/>
          <BsCupHotFill className="hidden group-data-[state=active]:block text-white h-5 w-5" />
          <span className="text-[10px] group-data-[state=active]:text-white text-gray-300 text-center">
            FOOD
          </span>
        </TabsTrigger>

        <TabsTrigger
          value="settings"
          className="group flex flex-col items-center justify-center gap-1 flex-1 rounded-full transition-colors"
        >
          <BsGear className="group-data-[state=active]:hidden h-5 w-5 text-gray-300"/>
          <BsGearFill className="hidden group-data-[state=active]:block text-white h-5 w-5" />
          <span className="text-[10px] group-data-[state=active]:text-white text-gray-300 text-center">
            SETTINGS
          </span>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}