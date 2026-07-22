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
 * A CSS homage to Mondrian — a calm 4x4 composition with a few large
 * color fields. Two blocks pulse softly, like signals on the grid.
 */
export function Boogie({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`grid aspect-square w-full max-w-sm grid-flow-dense grid-cols-4 grid-rows-4 gap-[3px] border-[3px] border-ink bg-ink ${className}`}
    >
      <div className="col-span-2 row-span-2 bg-m-yellow" />
      <div className="col-span-2 bg-paper" />
      <div className="bg-m-blue block-pulse" />
      <div className="bg-paper" />
      <div className="row-span-2 bg-paper" />
      <div className="col-span-2 bg-m-red" />
      <div className="flex items-center justify-center bg-paper">
        <div className="h-1/3 w-1/3 bg-m-yellow block-pulse [animation-delay:2.5s]" />
      </div>
      <div className="col-span-2 bg-paper" />
      <div className="bg-paper" />
    </div>
  );
}
