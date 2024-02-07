import { Dashboard } from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";
import Create from "@/components/posts/Create";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className="grid grid-cols-2 mt-8">
        <div className="ml-8 space-y-4">
          <Create/>
          <div id="posts">

          </div>
        </div>
        <Dashboard/>
      </div>
    </main>
  );
}
