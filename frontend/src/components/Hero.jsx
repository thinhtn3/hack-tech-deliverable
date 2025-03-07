import quotebook from "../assets/quotebook.png";

export default function Hero() {
  return (
    <div className="flex flex-col items-start w-screen mb-2.50 h-1.5/12 bg-[#733C30] py-4 px-10">
      <img src={quotebook} alt="Logo" className="w-20" />
      <h1 className="text-2xl font-bold">Hack at UCI Tech Deliverable</h1>
    </div>
  );
}
