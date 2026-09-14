import { LogoMark } from "./logo";

export function OfflineScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#f4f1ea] px-6">
      <div className="flex flex-col items-center text-center gap-7 max-w-md" style={{ animation: "offline-in 1s cubic-bezier(0.22,1,0.36,1) both" }}>
        <span className="text-[#14181a] opacity-90"><LogoMark size={56} /></span>
        <div className="flex flex-col gap-3">
          <h1 className="text-[#14181a] t-titre md:t-titre font-medium tracking-tight" style={{ fontFamily: "var(--font-dm-serif)" }}>Ce site n&apos;est plus disponible.</h1>
          <p className="text-[#4b5256] t-sec leading-relaxed">Cette maquette n&apos;était accessible que pendant <span className="text-[#14181a] font-medium">48&nbsp;heures</span>, dans le cadre de la présentation du projet. Accès prolongé sur demande.</p>
        </div>
        <span className="h-px w-24 bg-gradient-to-r from-transparent via-[#2d5c9c]/60 to-transparent" />
        <p className="text-[#4b5256]/60 mq-mention">Maquette — Logipro Web</p>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `@keyframes offline-in{from{opacity:0;transform:translateY(14px);filter:blur(8px)}to{opacity:1;transform:translateY(0);filter:blur(0)}}` }} />
    </div>
  );
}
