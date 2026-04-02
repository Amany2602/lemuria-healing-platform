export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 relative z-10">
        <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center animate-pulse border border-brand-teal/20">
            <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-brand-teal animate-spin" />
        </div>
        <div className="flex flex-col items-center animate-pulse">
            <span className="text-xl font-serif text-brand-text/50 tracking-tight">
                Aligning <span className="text-brand-teal italic font-light">Frequencies</span>
            </span>
            <div className="w-12 h-[1px] bg-brand-gold/40 mt-3" />
        </div>
      </div>
    </div>
  );
}
