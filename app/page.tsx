import { Dashboard } from "@/components/Dashboard";
import { Navbar } from "@/components/Navbar";
import { Create } from "@/components/posts/Create";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div>
        <div>
          <Create/>
          <div id="posts">

          </div>
        </div>
        <Dashboard/>
      </div>
    </main>
  );
}
