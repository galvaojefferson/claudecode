import type { ContactInfo } from "@/lib/contact-info";

type ContactInfoCardProps = {
  info: ContactInfo;
};

export function ContactInfoCard({ info }: ContactInfoCardProps) {
  return (
    <li className="rounded-2xl bg-background p-6 shadow-sm">
      <span aria-hidden className="text-3xl">
        {info.icon}
      </span>
      <p className="mt-3 text-sm text-foreground/60">{info.label}</p>
      <p className="mt-1 font-semibold">{info.value}</p>
    </li>
  );
}
