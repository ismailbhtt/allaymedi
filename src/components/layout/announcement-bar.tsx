import Link from "next/link";

export function AnnouncementBar({
  message,
  href,
}: {
  message?: string;
  href?: string;
}) {
  const text = message ?? "Free same-day pickup in Lake Oswego · FSA/HSA cards accepted · Call (971) 233-8121";
  const Content = (
    <span className="block truncate text-center text-sm font-medium">
      {text}
    </span>
  );
  return (
    <div className="bg-[var(--color-navy-800)] text-white">
      <div className="container-page py-2">
        {href ? <Link href={href}>{Content}</Link> : Content}
      </div>
    </div>
  );
}
