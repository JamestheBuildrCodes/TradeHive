import Reveal from "@/components/Reveal";
import { HiveLogo, ArrowRight } from "@/components/icons";

export default function FinalCta() {
  return (
    <section id="waitlist" className="py-24">
      <div className="th-container">
        <Reveal>
          <div className="th-card relative overflow-hidden text-center p-10 sm:p-16 glow-ring">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-60"
              style={{
                background:
                  "radial-gradient(40rem 20rem at 50% -20%, rgba(22,214,163,0.18), transparent 60%)",
              }}
            />
            <span className="mx-auto grid place-items-center w-14 h-14 rounded-2xl glow-ring text-[var(--th-primary)] anim-float">
              <HiveLogo width={30} height={30} />
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
              Join <span className="th-gradient-text">Tickrr</span>
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-[var(--th-muted)] text-lg">
              Create your account and start trading with verified track records, global rankings, and AI-powered insights.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <a href="/signup" className="btn-primary w-full justify-center">
                Create your account
                <ArrowRight width={18} height={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
