import JitsiComponent from "~/_components/Jitsi";

export default function Meeting() {
  return (
    <main className="h-screen bg-black">
      <div className="w-[150px]  absolute top-6 left-6 bg-inherit">
        <img src="/images/opreamIcon.png" alt="Opream Logo" />
      </div>
      <JitsiComponent />
    </main>
  );
}
