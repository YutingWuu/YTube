"use client";

import { trackEvent } from "@/lib/gtag";
import { withBasePath } from "@/lib/site";

const RESUME_DOWNLOAD_LOG_KEY = "resume-download-events";

type ResumeDownloadLinkProps = {
  className: string;
};

export default function ResumeDownloadLink({
  className,
}: ResumeDownloadLinkProps) {
  const href = withBasePath("/Yuting_Wu_Resume_UA.pdf");

  function handleClick() {
    const payload = {
      type: "resume_download",
      file: "Yuting_Wu_Resume_UA.pdf",
      path: window.location.pathname,
      referrer: document.referrer || "direct",
      timestamp: new Date().toISOString(),
    };

    trackEvent("resume_download", {
      file_name: payload.file,
      page_path: payload.path,
      referrer: payload.referrer,
    });
    window.dataLayer?.push({
      event: "resume_download",
      file_name: payload.file,
      page_path: payload.path,
      referrer: payload.referrer,
    } as Record<string, string>);

    try {
      const existing = window.localStorage.getItem(RESUME_DOWNLOAD_LOG_KEY);
      const parsed = existing ? (JSON.parse(existing) as typeof payload[]) : [];
      parsed.push(payload);
      window.localStorage.setItem(
        RESUME_DOWNLOAD_LOG_KEY,
        JSON.stringify(parsed.slice(-50)),
      );
    } catch {
      // Ignore storage failures so the download never gets blocked.
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      download
      onClick={handleClick}
      className={className}
    >
      Download PDF
      <span aria-hidden>-&gt;</span>
    </a>
  );
}
