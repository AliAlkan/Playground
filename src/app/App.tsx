import AgentsResearcher from "../imports/AgentsResearcher";

export default function App() {
  return (
    <div className="agents-main-scroll h-screen overflow-x-auto overflow-y-hidden bg-[#0a0a0a]">
      <div className="relative h-full" style={{ minWidth: "1280px" }}>
        <AgentsResearcher />
      </div>
    </div>
  );
}
