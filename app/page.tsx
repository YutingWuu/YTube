import Link from "next/link";
import DayReel from "@/components/day-reel";
import { withBasePath } from "@/lib/site";

const dayFrames = [
  {
    time: "07:10",
    place: "the body",
    note: "starting with the body before anything else",
    imageSrc: "/day-gym.jpg",
    imagePosition: "center 36%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 1 as const,
  },
  {
    time: "08:40",
    place: "the court",
    note: "movement first, before the screen begins to speak",
    imageSrc: "/day-tennis.png",
    imagePosition: "center 48%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 1 as const,
  },
  {
    time: "11:40",
    place: "the window",
    note: "work feels lighter when the frame stays open",
    imageSrc: "/day-window-work.png",
    imagePosition: "center 52%",
    href: "#essay",
    orientation: "landscape" as const,
    row: 1 as const,
  },
  {
    time: "14:20",
    place: "the desk",
    note: "one task at a time, one clean surface to return to",
    imageSrc: "/day-desk.jpg",
    imagePosition: "center 60%",
    href: "/case-studies/",
    orientation: "landscape" as const,
    row: 2 as const,
  },
  {
    time: "17:20",
    place: "the park",
    note: "shade, benches, and the ordinary calm of other people",
    imageSrc: "/day-green-park.jpg",
    imagePosition: "center 52%",
    href: "#essay",
    orientation: "landscape" as const,
    row: 2 as const,
  },
  {
    time: "19:40",
    place: "the gallery",
    note: "looking closely is another way of slowing down",
    imageSrc: "/day-museum.jpg",
    imagePosition: "center 44%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 2 as const,
  },
  {
    time: "22:10",
    place: "the room",
    note: "lamplight, a screen, and the day folding back into itself",
    imageSrc: "/day-evening-room.jpg",
    imagePosition: "center 48%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 2 as const,
  },
];

export default function Home() {
  return (
    <div className="bg-[#d9dddc] text-[#20231f]">
      <section className="relative min-h-screen overflow-hidden bg-[#5f6c71] text-white">
        {/* Static export on GitHub Pages needs a literal base-path-aware image URL. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/welcome-world-field.png")}
          alt="A wide Grand Teton field beneath snow-capped mountains"
          className="absolute inset-0 h-full w-full object-cover object-[60%_48%] sm:object-[58%_46%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(7,13,16,0)_0%,rgba(7,13,16,0.04)_24%,rgba(7,13,16,0.14)_48%,rgba(7,13,16,0.28)_72%,rgba(7,13,16,0.42)_100%),linear-gradient(98deg,rgba(8,14,16,0.8)_4%,rgba(8,14,16,0.56)_28%,rgba(8,14,16,0.18)_56%,rgba(8,14,16,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(111,122,126,0)_0%,rgba(111,122,126,0.4)_68%,#d9dddc_100%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-9 pt-28 sm:px-10 sm:pt-32">
          <div className="hero-dock max-w-[44rem] pt-[8vh] sm:pt-[12vh] lg:pt-[15vh]">
            <div className="flex items-center gap-3 text-white/88">
              <span
                aria-hidden
                className="h-px w-9 bg-[linear-gradient(90deg,rgba(244,241,232,0.96),rgba(244,241,232,0.18))]"
              />
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/88">
                A QUIET DAY, HELD IN RHYTHM
              </p>
            </div>
            <h1 className="hero-title text-white">
              <span data-line className="hero-title-main mt-7 block max-w-[12ch]">
                Welcome
                <br />
                to my world
              </span>
            </h1>
            <div className="hero-copy mt-7 max-w-[35rem] space-y-2 text-[0.96rem] leading-[1.6] text-white/88 sm:text-[1.02rem]">
              <p>
                I like wide grass, clear routines, and a life with room to
                breathe.
              </p>
              <p lang="zh-CN" className="text-white/84">
                我喜欢辽阔，也喜欢有秩序地过每一天。
              </p>
              <p className="text-white/78">
                The work is here too, but first this is where I begin.
              </p>
            </div>
            <Link
              href="#day-title"
              className="group mt-9 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-white/86 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#edf0e3]"
            >
              <span className="relative pb-1">
                Follow the day
                <span className="absolute inset-x-0 bottom-0 h-px bg-white/48 transition group-hover:bg-white/80" />
              </span>
              <span className="inline-flex items-center pb-1 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-auto flex justify-end pt-14">
            <div className="hero-dock flex flex-wrap items-start justify-end gap-3 sm:gap-4">
              <IconLink href="/about/" label="About">
                <CirclePersonIcon />
              </IconLink>
              <IconLink href="/case-studies/" label="Work">
                <BriefcaseIcon />
              </IconLink>
              <IconLink href="/resume/" label="Resume">
                <DocumentIcon />
              </IconLink>
              <IconLink href="mailto:t112255zl@gmail.com" label="Contact">
                <MailIcon />
              </IconLink>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[radial-gradient(circle_at_top,rgba(234,238,239,0.48)_0%,rgba(234,238,239,0)_28%),linear-gradient(180deg,#bfc8cb_0%,#c8d0d2_18%,#d9dddc_58%,#c7cecd_100%)] pb-24 pt-14 sm:pt-20">
        <section aria-labelledby="day-title">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 sm:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#566168]">
                A chosen sequence
              </p>
              <h2
                id="day-title"
                className="mt-3 [font-family:var(--font-display)] text-3xl tracking-tight text-[#232724] sm:text-4xl"
              >
                A day I want to keep.
              </h2>
            </div>
            <p className="hidden max-w-44 text-right text-xs leading-5 text-[#5f6967] sm:block">
              One path, no repeats, only the moments that still feel true.
            </p>
          </div>
          <DayReel items={dayFrames} />
        </section>

        <section
          id="essay"
          className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 sm:px-10"
        >
          <div className="border-t border-white/45 pt-8">
            <div className="max-w-4xl">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#566168]">
                The Life I Am Learning to Choose
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[#232724] sm:text-4xl">
                The Life I Am Learning to Choose
              </h2>
              <p className="mt-3 [font-family:var(--font-display)] text-2xl leading-tight text-[#3f4848] sm:text-3xl">
                我正在学着选择的人生
              </p>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5857]">
                <p>
                  For a long time, I thought freedom would arrive as the result
                  of achievement. A better job, more money, a stronger sense of
                  security, and one day I would finally feel that my life
                  belonged to me.
                </p>
                <p>
                  Now I see freedom differently. It is less a destination than
                  a way of living. It begins when I can hear my own judgment
                  clearly, make choices without constantly explaining them, and
                  allow my days to follow a rhythm that feels honest to me.
                </p>
                <p>
                  I still care about work and ambition. I like the quiet
                  satisfaction of understanding a difficult problem, finding the
                  structure hidden inside confusion, and turning an idea into
                  something useful. I want my work to carry both precision and
                  feeling. I want to understand systems without losing sight of
                  the people living inside them.
                </p>
                <p>
                  Perhaps this is why understanding matters so much to me. Each
                  time I see something more clearly, the world feels less
                  distant. A pattern in data, a motive behind someone&apos;s
                  behavior, the reason a relationship changes, the logic beneath
                  an ordinary decision. Understanding gives shape to experience.
                  It helps me move through life with greater steadiness, and it
                  also makes life more vivid.
                </p>
                <p>
                  I want to create for the same reason. Creation is my way of
                  answering the world. It may become a product, an image, a
                  piece of writing, or simply a thought expressed at the right
                  moment. Its meaning lies in whether it reaches another person
                  and leaves behind a small change in how they see, feel, or
                  choose.
                </p>
                <p>
                  The life I hope to build has room for all of this. Focused
                  work, a healthy body, clear and mutual relationships, quiet
                  mornings, good food, travel, beauty, and time that still
                  feels like my own. I do not need every day to be remarkable. I
                  only want to feel present inside it.
                </p>
                <p>
                  In the end, the life I want is simple to describe. I want to
                  understand the world more deeply, contribute something that
                  carries my own voice, and remain awake to the life unfolding
                  around me.
                </p>
                <p className="[font-family:var(--font-display)] text-[1.28rem] leading-8 text-[#2f3738]">
                  Freedom gives me the space to become myself. Understanding
                  teaches me how to live. Creation allows a part of me to
                  remain.
                </p>
              </div>

              <div
                id="night"
                className="space-y-6 border-t border-white/35 pt-1 text-[1.02rem] leading-8 text-[#4f5857] lg:border-t-0 lg:border-l lg:border-white/35 lg:pl-16 lg:pt-0"
              >
                <p>
                  很长一段时间里，我以为自由会在某种成就之后到来。找到更好的工作，拥有更多财富，积累足够的安全感，直到某一天，我终于能够确定，这一生真正属于我自己。
                </p>
                <p>
                  后来我逐渐意识到，自由并不是终点，而是一种生活方式。它始于我能够听清自己的判断，不再需要为每一个选择反复解释，也能够让生活按照一种诚实、舒展的节奏向前展开。
                </p>
                <p>
                  我依然在意事业，也依然有野心。我喜欢理解一个复杂问题时那种安静的满足感，喜欢从混乱中找到结构，再把模糊的想法变成真正有用的东西。我希望自己的工作既有精确的逻辑，也保留对人的感受。理解系统的同时，我不想忘记生活在系统中的人。
                </p>
                <p>
                  也许正因如此，理解对我而言格外重要。每当我看清一件事，世界就离我更近一点。数据中的规律，一个人行为背后的动机，一段关系发生变化的原因，或者某个普通选择之下隐藏的逻辑。理解让经验有了形状，也让我能够更稳定地行走于生活之中。更重要的是，它让世界变得具体而鲜明。
                </p>
                <p>
                  我想要创造，也是出于同样的原因。创造是我回应世界的方式。它可以是一件产品、一幅图像、一段文字，也可以是在恰当的时刻，被准确表达出来的一个想法。它真正的意义，在于是否抵达了另一个人，并悄悄改变了对方看待、感受或选择事物的方式。
                </p>
                <p>
                  我希望建立的生活，可以容纳这一切。专注而有价值的工作，健康自由的身体，清晰而相互的关系，安静的早晨，好吃的食物，旅行，美，以及仍然真正属于自己的时间。我不需要每一天都显得精彩，只希望自己始终身处其中，而不是匆忙地从生活旁边经过。
                </p>
                <p>
                  归根结底，我想要的人生并不复杂。我想更深地理解这个世界，留下带有自己声音的东西，也始终对正在发生的生活保持清醒。
                </p>
                <p className="[font-family:var(--font-display)] text-[1.28rem] leading-8 text-[#2f3738]">
                  自由让我有空间成为自己，理解教会我如何生活，而创造，让我的一部分得以停留。
                </p>
              </div>
            </div>

            <div className="mt-10 flex gap-5 text-sm text-[#4d5556]">
              <Link
                href="/about/"
                className="border-b border-[#7b8281] pb-1 transition hover:border-transparent"
              >
                About
              </Link>
              <Link
                href="/case-studies/"
                className="border-b border-[#7b8281] pb-1 transition hover:border-transparent"
              >
                Work
              </Link>
              <Link
                href="/resume/"
                className="border-b border-[#7b8281] pb-1 transition hover:border-transparent"
              >
                Resume
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const className =
    "group inline-flex w-[4.65rem] flex-col items-center gap-2 text-center text-[10px] uppercase tracking-[0.22em] text-white/72 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/85";
  const shellClassName =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/28 bg-white/4 text-white/88 transition group-hover:border-white/80 group-hover:bg-white/10 group-hover:text-white";

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} aria-label={label} className={className}>
        <span className={shellClassName}>{children}</span>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={label} className={className}>
      <span className={shellClassName}>{children}</span>
      <span>{label}</span>
    </Link>
  );
}

function CirclePersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <circle cx="12" cy="12" r="9" strokeWidth="1.4" />
      <circle cx="12" cy="9" r="2.3" strokeWidth="1.4" />
      <path
        d="M7.8 16.6c1-1.9 2.5-2.9 4.2-2.9s3.2 1 4.2 2.9"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <rect x="4.5" y="7.5" width="15" height="10.5" rx="2" strokeWidth="1.4" />
      <path
        d="M9 7.5V6.4c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6v1.1M4.5 12.2h15"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <path
        d="M8 4.8h6l3 3v11.4c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V6.6C6.2 5.6 7 4.8 8 4.8Z"
        strokeWidth="1.4"
      />
      <path
        d="M14 4.8v3.3h3M9.2 12h5.6M9.2 15.2h5.6"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-none stroke-current">
      <rect x="4.5" y="6.5" width="15" height="11" rx="2" strokeWidth="1.4" />
      <path
        d="m6.5 8.3 5.5 4.6 5.5-4.6"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
