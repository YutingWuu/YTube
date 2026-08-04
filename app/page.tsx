import Link from "next/link";
import DayReel from "@/components/day-reel";
import { withBasePath } from "@/lib/site";

const resumePdfHref = withBasePath("/Yuting_Wu_Resume_UA.pdf");

const dayFrames = [
  {
    time: "07:05",
    place: "the table",
    note: "breakfast, water, and a slow beginning before the day asks for anything",
    imageSrc: "/day-table.png",
    imagePosition: "center 52%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 1 as const,
  },
  {
    time: "08:10",
    place: "the body",
    note: "starting with movement so the mind does not wake up too narrow",
    imageSrc: "/day-gym.jpg",
    imagePosition: "center 34%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 1 as const,
  },
  {
    time: "11:40",
    place: "the window",
    note: "work feels lighter when the frame stays open to distance",
    imageSrc: "/day-window-work.png",
    imagePosition: "center 52%",
    href: "#essay",
    orientation: "landscape" as const,
    row: 1 as const,
  },
  {
    time: "14:20",
    place: "the desk",
    note: "one task at a time, one clear surface to return to",
    imageSrc: "/day-desk.jpg",
    imagePosition: "center 60%",
    href: "/case-studies/",
    orientation: "landscape" as const,
    row: 1 as const,
  },
  {
    time: "18:25",
    place: "the court",
    note: "after work, the rhythm changes but the attention stays clean",
    imageSrc: "/day-tennis.png",
    imagePosition: "center 48%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 2 as const,
  },
  {
    time: "19:10",
    place: "the road",
    note: "the in-between hour, when the city starts loosening its grip",
    imageSrc: "/day-road.png",
    imagePosition: "center 56%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 2 as const,
  },
  {
    time: "20:15",
    place: "the gallery",
    note: "looking closely is another way of slowing the day down",
    imageSrc: "/day-museum.jpg",
    imagePosition: "center 44%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 2 as const,
  },
  {
    time: "21:40",
    place: "the light",
    note: "soft evening light, a room settling, and the day folding inward",
    imageSrc: "/day-light.png",
    imagePosition: "center 55%",
    href: "#essay",
    orientation: "portrait" as const,
    row: 2 as const,
  },
];

export default function Home() {
  return (
    <div className="bg-[#cfd5d1] text-[#20231f]">
      <section className="relative min-h-screen overflow-hidden bg-[#5f6c71] text-white">
        {/* Static export on GitHub Pages needs a literal base-path-aware image URL. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={withBasePath("/welcome-world-field.png")}
          alt="A wide Grand Teton field beneath snow-capped mountains"
          className="absolute inset-0 h-full w-full object-cover object-[60%_48%] sm:object-[58%_46%]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(7,13,16,0)_0%,rgba(7,13,16,0.04)_24%,rgba(7,13,16,0.14)_48%,rgba(7,13,16,0.28)_72%,rgba(7,13,16,0.42)_100%),linear-gradient(98deg,rgba(8,14,16,0.8)_4%,rgba(8,14,16,0.56)_28%,rgba(8,14,16,0.18)_56%,rgba(8,14,16,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,rgba(99,108,105,0)_0%,rgba(99,108,105,0.38)_64%,#cfd5d1_100%)]" />

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
              <p>Let life bloom in a quiet and certain rhythm.</p>
              <p lang="zh-CN" className="text-white/84">
                让生活在安静而确定的节奏里绽放。
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
              <IconLink href="/" label="About">
                <CirclePersonIcon />
              </IconLink>
              <IconLink href="/case-studies/" label="Work">
                <BriefcaseIcon />
              </IconLink>
              <IconLink href={resumePdfHref} label="Resume">
                <DocumentIcon />
              </IconLink>
              <IconLink href="mailto:t112255zl@gmail.com" label="Contact">
                <MailIcon />
              </IconLink>
            </div>
          </div>
        </div>
      </section>

      <main className="bg-[radial-gradient(circle_at_top,rgba(235,237,231,0.42)_0%,rgba(235,237,231,0)_28%),linear-gradient(180deg,#bcc5bf_0%,#c6cec7_18%,#cfd5d1_56%,#bcc4bf_100%)] pb-24 pt-14 sm:pt-20">
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
                The Life I Want to Build
              </p>
              <h2 className="mt-4 [font-family:var(--font-display)] text-3xl leading-[1.02] tracking-tight text-[#232724] sm:text-4xl">
                The Life I Want to Build
              </h2>
              <p
                lang="zh-CN"
                className="mt-3 [font-family:var(--font-display)] text-2xl leading-tight text-[#3f4848] sm:text-3xl"
              >
                我想要建造的人生
              </p>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6 text-[1.02rem] leading-8 text-[#4f5857]">
                <p>
                  For a long time, I believed freedom was something that had to
                  be earned through achievement. I imagined that once I had
                  found a better job, saved more money, and accumulated enough
                  security, I would finally reach a point at which I could say,
                  with certainty, that my life belonged to me.
                </p>
                <p>
                  It took me time to understand that freedom is not a
                  destination one eventually arrives at. It is a way of
                  inhabiting one&apos;s life. For me, it begins with the ability
                  to hear my own judgment clearly, and with no longer feeling
                  compelled to justify every decision to the people around me.
                </p>
                <p>
                  I still care deeply about my career, and I have ambitions of
                  my own. I find genuine satisfaction in thinking through a
                  difficult problem until its underlying structure becomes
                  visible, then turning what was once vague or disordered into
                  something useful. I want the work I do to be rigorous without
                  becoming impersonal. Even as I build systems, I want to
                  remain attentive to the people who must live and make choices
                  within them.
                </p>
                <p>
                  Perhaps this is why understanding has always mattered so much
                  to me. Whenever I grasp something more fully, the world feels
                  a little less remote. It may be a pattern concealed within
                  data, the motive behind a person&apos;s behaviour, the reason a
                  relationship has changed, or the logic beneath an apparently
                  ordinary decision. Understanding gives form to experience. It
                  allows me to move through life with greater clarity and
                  confidence. At times, it feels like discovering the
                  instruction manual after opening a box of unfamiliar
                  furniture. What first appeared fragmented and confusing
                  gradually becomes coherent.
                </p>
                <p>
                  My desire to create comes from the same place. Creation is
                  how I enter into conversation with the world. It may take the
                  form of a product, an image, a piece of writing, or simply an
                  idea expressed at the right moment. Its value lies in whether
                  it reaches another person and leaves some trace, however
                  subtle, in the way they see, feel, or choose.
                </p>
                <p>
                  The life I hope to build must be spacious enough to contain
                  all of this: work worthy of sustained attention, a healthy
                  body that allows me to move freely, relationships defined by
                  clarity and mutual care, quiet mornings, good food,
                  restorative travel, and time that remains genuinely mine.
                </p>
                <p>
                  I do not need every day to be extraordinary. I only want to
                  be fully present within my own life, rather than watching it
                  pass by at the edges of my attention.
                </p>
                <p>
                  Ultimately, what I want is simple. I want to understand the
                  world more deeply, leave behind something that carries the
                  imprint of my own voice, and remain awake to the life
                  unfolding before me.
                </p>
                <p className="[font-family:var(--font-display)] text-[1.28rem] leading-8 text-[#2f3738]">
                  Freedom gives me the room to become myself. Understanding
                  teaches me how to live. Creation allows some part of me to
                  endure.
                </p>
              </div>

              <div
                id="night"
                className="space-y-6 border-t border-white/35 pt-1 text-[1.02rem] leading-8 text-[#4f5857] lg:border-t-0 lg:border-l lg:border-white/35 lg:pl-16 lg:pt-0"
              >
                <p>
                  在很长一段时间里，我以为自由是要等到某个成就达成之后，
                  才会出现的东西。等我找到更好的工作，攒下更多的钱，积累
                  足够的安全感。直到那一天，我才可以确定，这一生真正属于
                  我自己。
                </p>
                <p>
                  可后来我才慢慢明白，自由不是某个终点，而是一种活着的方
                  式。它始于我能够听清自己内心的判断，不再需要为每一个选
                  择，反复向别人解释。
                </p>
                <p>
                  我仍然在意自己的事业，也有着自己的野心。我喜欢把一个复
                  杂的问题真正想明白时的满足感，喜欢从混乱中解析出结构，
                  再把一个模糊的想法做成真正有用的东西。我希望自己做的事
                  既合乎逻辑，也不丢掉对人的体贴和关切。做成一个系统的同
                  时，我不想忘记那些生活在系统里的人。
                </p>
                <p>
                  也许正因为这样，“理解”对我才格外重要。每理解一件事，
                  我就觉得世界离我近了一点。数据里的规律，一个人做某件事
                  背后的动机，一段关系为什么会发生变化，或者一个再普通不
                  过的选择之下藏着的逻辑。理解让经验有了形状，也让我在生
                  活里走得更远。它像拆开一件新家具后找到的组装说明书，让
                  整个世界逐渐变得清晰而有序。
                </p>
                <p>
                  我想去创造，也是出于同样的原因。创造是我回应这个世界的
                  方式。它可以是一件产品、一张图、一段文字，也可以只是
                  在关键时刻出现的一个想法。它真正有没有意义，要看它是否
                  抵达了另一个人，并悄悄改变了那个人看待、感受或选择事物
                  的方式。
                </p>
                <p>
                  我想过的生活，得能装得下这一切：值得投入、让人专注的工
                  作，健康而自由的身体，清楚而彼此在意的关系，安静的早晨，
                  美味的食物，一段心情舒畅的旅行，还有仍然真正归我自己支
                  配的时间。
                </p>
                <p>
                  我不需要每一天都过得精彩，只希望自己真正浸入生活，而不
                  是让它从身边匆匆流逝。
                </p>
                <p>
                  说到底，我想要的人生其实并不复杂。我想对这个世界理解得
                  更深一点，留下一些带着自己声音的东西，也始终对正在发生
                  的生活保持清醒。
                </p>
                <p className="[font-family:var(--font-display)] text-[1.28rem] leading-8 text-[#2f3738]">
                  自由让我有空间成为自己，理解教会我如何生活，而创造，让
                  我的一部分得以留下来。
                </p>
              </div>
            </div>

            <div className="mt-10 flex gap-5 text-sm text-[#4d5556]">
              <Link
                href="/"
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
                href={resumePdfHref}
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

  if (href.endsWith(".pdf")) {
    return (
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
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
