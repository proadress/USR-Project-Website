import Sidebar from "@/components/Sidebar";
import { HomeSlider, HotRowCard, NewRowCard } from "@/components/home";
import { redirect } from "next/navigation";

export default function Home() {
  const cardDatas: string[][] = [[], []];
  redirect("http://140.121.17.140:8080")
  // return (
  //   <>
  //     <div className="flex">
  //       <Sidebar planNum={5} itemNum={0} />
  //       <div className="py-20 mx-auto w-2/3 space-y-10">
  //         <HomeSlider />
  //         <HotRowCard />
  //         <NewRowCard />
  //       </div>
  //     </div>
  //   </>
  // )
}
