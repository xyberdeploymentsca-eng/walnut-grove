/** @format */

// One layout for the content pages added in the Nov 2026 SEO plan (prices, same-day, emergency, small services).
// Same look as the service pages; the words live in each page's data, so a page is just its content.

import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "../ui/ctaButton";
import { AllServicesList } from "../services/allServicesList";
import { RelatedServices } from "../services/relatedServices";
import { Breadcrumbs } from "./breadcrumbs";
import { ServiceFaq } from "../services/serviceFaq";

/** Text with optional links: "plain text" or ["text ", { text: "a link", href: "/x" }, " more text"]. */
export type Rich = string | (string | { text: string; href: string })[];

export type Block =
  | { h2: string }
  | { p: Rich }
  | { list: Rich[] }
  | { table: { head: string[]; rows: string[][]; caption?: string } }
  | { note: { title: string; body: Rich[]; tone?: "urgent" | "info" } };

export interface ContentPageProps {
  breadcrumbs: { name: string; href: string }[];
  icon: string;
  h1: string;
  intro: Rich[];
  blocks: Block[];
  cta?: string;
  faqs?: { question: string; answer: string }[];
  related?: { name: string; href: string; icon: string }[];
  showAllServices?: boolean;
}

const text = "text-[16px] lg:text-[20px] text-primary-black font-nunito font-medium leading-relaxed lg:leading-[140%]";
const linkClass = "text-primary-green-dark hover:underline font-semibold";

export const RichText = ({ value }: { value: Rich }) => {
  if (typeof value === "string") return <>{value}</>;
  return (
    <>
      {value.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : part.href.startsWith("http") || part.href.startsWith("tel:") ? (
          <a key={i} href={part.href} className={linkClass}>
            {part.text}
          </a>
        ) : (
          <Link key={i} href={part.href} className={linkClass}>
            {part.text}
          </Link>
        ),
      )}
    </>
  );
};

const BlockView = ({ block }: { block: Block }) => {
  if ("h2" in block)
    return (
      <h2 className="text-[22px] lg:text-[28px] leading-tight font-bold font-nunito text-primary-black border-b-2 border-primary-purple w-fit pt-6">
        {block.h2}
      </h2>
    );
  if ("p" in block)
    return (
      <p className={text}>
        <RichText value={block.p} />
      </p>
    );
  if ("list" in block)
    return (
      <ul className="space-y-3">
        {block.list.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black">
            <span className="mt-2 w-2 h-2 rounded-full bg-primary-black flex-shrink-0" />
            <span>
              <RichText value={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  if ("table" in block)
    return (
      <div className="overflow-x-auto rounded-[16px] border border-[#F0EAF8] bg-[#FFFCF7]">
        <table className="w-full text-left font-nunito text-[15px] lg:text-[17px] text-primary-black">
          {block.table.caption && <caption className="text-left px-4 pt-4 font-bold">{block.table.caption}</caption>}
          <thead>
            <tr>
              {block.table.head.map((h) => (
                <th key={h} className="px-4 py-3 font-bold border-b border-[#E7D2FF]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, i) => (
              <tr key={i} className="border-b border-[#F0EAF8] last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 align-top">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  return (
    <div
      className={`rounded-[16px] py-6 px-6 lg:px-8 shadow-[0px_4px_30px_0px_rgba(87,87,87,0.06)] border ${
        block.note.tone === "urgent" ? "bg-[#FFF1EE] border-[#F5C6BC]" : "bg-[#FFFCF7] border-[#F0EAF8]"
      }`}
    >
      <p className="text-[18px] lg:text-[22px] font-bold font-nunito text-primary-black mb-3">{block.note.title}</p>
      <div className="space-y-2">
        {block.note.body.map((b, i) => (
          <p key={i} className="text-[16px] lg:text-[18px] font-nunito font-medium text-primary-black leading-relaxed">
            <RichText value={b} />
          </p>
        ))}
      </div>
    </div>
  );
};

/** The same content blocks, for adding sections to an existing service page. */
export const ContentBlocks = ({ blocks }: { blocks: Block[] }) => (
  <div className="space-y-4 mt-10">
    {blocks.map((b, i) => (
      <BlockView key={i} block={b} />
    ))}
  </div>
);

export const ContentPage = ({
  breadcrumbs,
  icon,
  h1,
  intro,
  blocks,
  cta = "Request An Appointment",
  faqs,
  related,
  showAllServices = true,
}: ContentPageProps) => (
  <div className="max-w-[1920px] mx-auto overflow-hidden bg-primary-white">
    <Image
      src={"/assets/commonBanner.svg"}
      alt="banner" priority
      height={466}
      width={1920}
      className="absolute top-0 left-0 z-0 w-full h-[250px] lg:h-auto object-cover"
    />
    <Image
      src="/assets/rightPaws.svg"
      alt="" aria-hidden="true"
      className="absolute top-50 h-[1485px] right-10 z-0 hidden lg:block"
      width={392}
      height={1484}
    />

    <Breadcrumbs items={breadcrumbs} />

    <div className="flex flex-col lg:flex-row justify-between items-start max-w-[1296px] mx-auto pt-6 lg:pt-8 px-6 lg:px-4 relative z-1">
      <div className="flex flex-col w-full rounded-[16px] p-6 lg:p-16 relative shrink-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-8 lg:mb-6 text-center lg:text-left">
          <Image src={icon} alt="" height={87} width={87} className="w-[54px] lg:w-[87px] h-auto" />
          <h1 className="text-[28px] lg:text-[48px] text-center lg:text-left font-otomanopee-one leading-tight lg:leading-[120%] text-primary-black uppercase">
            {h1}
          </h1>
        </div>

        <div className="space-y-4 max-w-[1000px]">
          {intro.map((p, i) => (
            <p key={i} className={text}>
              <RichText value={p} />
            </p>
          ))}
          {blocks.map((b, i) => (
            <BlockView key={i} block={b} />
          ))}
          <div className="flex justify-center lg:justify-start">
            <CtaButton className="mt-6 capitalize" icon="/icons/calender.svg">
              {cta}
            </CtaButton>
          </div>
        </div>
      </div>
    </div>
    <ServiceFaq faqs={faqs} />
    {related && related.length > 0 && <RelatedServices services={related} />}
    {showAllServices && <AllServicesList />}
  </div>
);
