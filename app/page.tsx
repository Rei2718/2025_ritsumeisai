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
  return (
    <Tabs defaultValue="home" className="h-svh w-full bg-[var(--background)]">
      <TabsContent value="home" className="h-full w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="new" className="h-full w-full flex items-center justify-center">
        <DemoScreen />
      </TabsContent>
      <TabsContent value="radio" className="h-full w-full flex items-center justify-center">
        <DemoScreen />
      </TabsContent>
      <TabsContent value="library" className="h-full w-full flex items-center justify-center">
        <DemoScreen />
      </TabsContent>
      <TabsContent value="search" className="h-full w-full flex items-center justify-center">
        <DemoScreen />
      </TabsContent>

      <TabsList className="w-11/12 max-w-xs mx-auto fixed bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center pointer-events-auto bg-transparent p-0">
        <div className="flex flex-1 flex-row items-center justify-around p-1 rounded-full bg-[#282828] backdrop-blur-lg">
          <TabsTrigger
            value="home"
            className="group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-[var(--primary)] data-[state=active]:text-[var(--secondary)]"
          >
            <BsHouseDoor className="h-6 w-6 group-data-[state=active]:hidden" />
            <BsHouseDoorFill className="h-6 w-6 hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-[var(--primary)] data-[state=active]:text-[var(--secondary)]"
          >
            <BsGrid className="h-6 w-6 group-data-[state=active]:hidden" />
            <BsGridFill className="h-6 w-6 hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger
            value="radio"
            className="group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-[var(--primary)] data-[state=active]:text-[var(--secondary)]"
          >
            <BsBroadcast className="h-6 w-6" />
          </TabsTrigger>
          <TabsTrigger
            value="library"
            className="group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-[var(--primary)] data-[state=active]:text-[var(--secondary)]"
          >
            <BsMusicNoteList className="h-6 w-6" />
          </TabsTrigger>
        </div>
        <div className="w-3 flex-shrink-0" />
        <div className="p-1 rounded-full bg-[#282828] backdrop-blur-lg">
          <TabsTrigger
            value="search"
            className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-[var(--primary)] data-[state=active]:text-[var(--secondary)]"
          >
            <BsSearch className="h-6 w-6" />
          </TabsTrigger>
        </div>
      </TabsList>
    </Tabs>
  );
}