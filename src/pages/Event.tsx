import { Video } from "../components/Video";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
}
