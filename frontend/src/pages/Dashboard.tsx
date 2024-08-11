import { BookFlight } from "../components/BookFlight";
import { Header } from "../components/Header";

export default function DashboardPage() {
  return (
    <div className="bg-zinc-300 min-h-screen h-full">
      <div className="max-w-6xl mx-auto p-5 h-full">
        <Header />
        <div className="flex gap-10 h-full">
          <div className="w-4/5 h-full">
            <BookFlight />
          </div>
          <div className="bg-slate-800 w-1/5 h-full">buttons</div>
        </div>
      </div>
    </div>
  );
}
