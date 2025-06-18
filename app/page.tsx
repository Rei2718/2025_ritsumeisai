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
    <Tabs defaultValue="home" className="h-svh w-svw rounded-2xl bg-background">
      <TabsContent value="home" className="w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="new" className="h-full w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="radio" className="h-full w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="library" className="h-full w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>
      <TabsContent value="search" className="h-full w-full flex items-center justify-center">
        <HomeScreen />
      </TabsContent>

      <TabsList className="w-11/12 max-w-lg mx-auto fixed bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center pointer-events-auto bg-transparent p-0">
        <div className="flex flex-1 flex-row items-center justify-around p-1 rounded-full bg-muted backdrop-blur-lg xs:w-10 xs:h-10 xs:h-10 sm:w-15 sm:h-15 md:w-12 md:h-12 lg:w-13 lg:h-13  xl:w-14 xl:h-14">
          <TabsTrigger
            value="home"
            className="group flex flex-col items-center justify-center rounded-full transition-all duration-200 ease-in-out text-primary data-[state=active]:text-secondary"
          >
            <BsHouseDoor className="h-6 w-6 group-data-[state=active]:hidden" />
            <BsHouseDoorFill className="h-6 w-6 hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-primary data-[state=active]:text-secondary"
          >
            <BsGrid className="h-6 w-6 group-data-[state=active]:hidden" />
            <BsGridFill className="h-6 w-6 hidden group-data-[state=active]:block" />
          </TabsTrigger>
          <TabsTrigger
            value="radio"
            className="group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-primary data-[state=active]:text-secondary"
          >
            <BsBroadcast className="h-6 w-6" />
          </TabsTrigger>
          <TabsTrigger
            value="library"
            className="group flex flex-col items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-primary data-[state=active]:text-secondary"
          >
            <BsMusicNoteList className="h-6 w-6" />
          </TabsTrigger>
        </div>
        <div className="w-3 flex-shrink-0" />
        <div className="p-1 rounded-full bg-muted backdrop-blur-lg">
          <TabsTrigger
            value="search"
            className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full transition-all duration-200 ease-in-out text-primary data-[state=active]:text-secondary"
          >
            <BsSearch className="h-6 w-6" />
          </TabsTrigger>
        </div>
      </TabsList>
    </Tabs>
  );
}