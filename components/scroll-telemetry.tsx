/** Fixed HUD readout of page scroll, driven entirely by CSS scroll timelines. */
export function ScrollTelemetry() {
  return (
    <div
      aria-hidden="true"
      className="telemetry text-muted-foreground pointer-events-none fixed top-1/2 right-5 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 font-mono text-[10px] xl:flex"
    >
      <span className="[writing-mode:vertical-rl]">scroll</span>
      <div className="bg-border relative h-32 w-px">
        <div className="telemetry-bar bg-primary absolute inset-0 origin-top shadow-[0_0_8px_var(--primary)]" />
      </div>
      <span className="telemetry-value text-primary" />
      <span className="telemetry-anomaly text-secondary">anomaly</span>
    </div>
  )
}
