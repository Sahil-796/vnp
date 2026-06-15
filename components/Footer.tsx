import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { landingPageData, siteInfo } from "@/constants";
import { Logo } from "./Logo";

const socialIcons = {
  Instagram,
  LinkedIn: Linkedin,
};

const Footer = () => {
  const { footer } = landingPageData;

  return (
    <footer className="px-3 pb-3 md:px-4 md:pb-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 pt-14 text-white md:px-12 md:pt-20">
        <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* brand + contact */}
          <div className="lg:col-span-5">
            <div className="inline-flex rounded-2xl bg-white/95 px-3 py-2">
              <Logo size="full" imageClassName="w-36 md:w-40" />
            </div>
            <div className="mt-6 space-y-1.5 text-sm text-white/65 md:text-base">
              <p className="max-w-xs">{footer.address}</p>
              <p>
                <a
                  href={siteInfo.phoneHref}
                  className="transition-colors hover:text-white"
                >
                  {footer.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteInfo.email}
                </a>
              </p>
            </div>
          </div>

          {/* links */}
          <div className="lg:col-span-3 lg:col-start-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {footer.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-lg font-medium text-white/80 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* social */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              Follow
            </h4>
            <div className="mt-5 flex gap-3">
              {footer.socialLinks.map((link) => {
                const Icon =
                  socialIcons[link.label as keyof typeof socialIcons];
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:border-yellow hover:text-yellow"
                  >
                    {Icon ? (
                      <Icon className="h-5 w-5" aria-hidden />
                    ) : (
                      <span className="text-xs font-semibold">
                        {link.label.slice(0, 1)}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* oversized wordmark */}
        <div className="relative mt-12 select-none border-t border-white/10 pt-6">
          <p className="text-sm text-white/50">{footer.copyright}</p>
          <div
            aria-hidden
            className="font-display pointer-events-none mt-2 flex justify-between text-[18vw] font-extrabold leading-[0.8] tracking-tighter text-white/[0.05] md:text-[15vw]"
          >
            <span>Vision</span>
            <span className="text-yellow/15">&amp; Path</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
