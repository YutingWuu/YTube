import type { Accent } from "@/lib/projects";

export const accentBg: Record<Accent, string> = {
  yellow: "bg-m-yellow",
  red: "bg-m-red",
  blue: "bg-m-blue",
};

export function Squares({ size = "h-2.5 w-2.5" }: { size?: string }) {
  return (
    <span aria-hidden className="inline-flex gap-1">
      <span className={`${size} bg-m-yellow`} />
      <span className={`${size} bg-m-red`} />
      <span className={`${size} bg-m-blue`} />
    </span>
  );
}

/*
 * A small CSS homage to Mondrian's "Broadway Boogie Woogie" — the grid
 * that learned to dance. A few blocks pulse softly, like signals moving
 * along the lines. Any unfilled cells read as black blocks, which is
 * true to the painting.
 */
export function Boogie({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid aspect-square w-full max-w-sm grid-flow-dense grid-cols-6 grid-rows-6 gap-[3px] border-[3px] border-ink bg-ink ${className}`}
    >
      <div className="col-span-2 row-span-2 bg-m-yellow block-pulse" />
      <div className="col-span-3 bg-paper" />
      <div className="bg-m-red" />
      <div className="col-span-2 row-span-2 flex items-center justify-center bg-paper">
        <div className="h-1/3 w-1/3 bg-m-blue block-pulse [animation-delay:1.6s]" />
      </div>
      <div className="row-span-2 bg-paper" />
      <div className="bg-m-blue block-pulse [animation-delay:0.8s]" />
      <div className="col-span-2 bg-paper" />
      <div className="row-span-2 bg-m-red block-pulse [animation-delay:2.4s]" />
      <div className="col-span-2 flex items-center justify-center bg-paper">
        <div className="h-1/2 w-1/4 bg-m-yellow" />
      </div>
      <div className="bg-m-yellow" />
      <div className="col-span-2 bg-paper" />
      <div className="col-span-3 flex items-center justify-center bg-paper">
        <div className="h-1/3 w-1/6 bg-m-red block-pulse [animation-delay:3.2s]" />
      </div>
      <div className="bg-m-blue" />
      <div className="col-span-2 bg-paper" />
      <div className="bg-m-yellow block-pulse [animation-delay:4s]" />
      <div className="bg-m-red" />
      <div className="bg-paper" />
      <div className="bg-paper" />
      <div className="bg-paper" />
      <div className="bg-paper" />
    </div>
  );
}
