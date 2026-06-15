import { randomUUID } from "node:crypto";

type Mark =
  | { _type: "span"; text: string; marks?: string[]; _key?: string };

type Block = {
  _type: "block";
  _key?: string;
  style?: string;
  children: Mark[];
  markDefs?: { _key: string; _type: string; href?: string }[];
  level?: number;
  listItem?: "bullet" | "number";
};

export type PortableText = Block[];

const key = () => randomUUID().slice(0, 12);

function span(text: string, marks: string[] = []): Mark {
  return { _type: "span", _key: key(), text, marks };
}

function parseInline(text: string): { children: Mark[]; markDefs: { _key: string; _type: string; href?: string }[] } {
  // Supports **bold**, *italic*, [text](href). Minimal — enough for seed content.
  const markDefs: { _key: string; _type: string; href?: string }[] = [];
  const children: Mark[] = [];
  const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      children.push(span(text.slice(lastIndex, match.index)));
    }
    if (match[2]) {
      children.push(span(match[2], ["strong"]));
    } else if (match[3]) {
      children.push(span(match[3], ["em"]));
    } else if (match[4] && match[5]) {
      const linkKey = key();
      markDefs.push({ _key: linkKey, _type: "link", href: match[5] });
      children.push(span(match[4], [linkKey]));
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    children.push(span(text.slice(lastIndex)));
  }
  return { children, markDefs };
}

export function p(text: string): Block {
  const { children, markDefs } = parseInline(text);
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    children,
    markDefs,
  };
}

export function h2(text: string): Block {
  const { children, markDefs } = parseInline(text);
  return {
    _type: "block",
    _key: key(),
    style: "h2",
    children,
    markDefs,
  };
}

export function h3(text: string): Block {
  const { children, markDefs } = parseInline(text);
  return {
    _type: "block",
    _key: key(),
    style: "h3",
    children,
    markDefs,
  };
}

export function quote(text: string): Block {
  const { children, markDefs } = parseInline(text);
  return {
    _type: "block",
    _key: key(),
    style: "blockquote",
    children,
    markDefs,
  };
}

export function bullet(text: string): Block {
  const { children, markDefs } = parseInline(text);
  return {
    _type: "block",
    _key: key(),
    style: "normal",
    listItem: "bullet",
    level: 1,
    children,
    markDefs,
  };
}

export function bullets(items: string[]): Block[] {
  return items.map(bullet);
}

export function pt(...blocks: (Block | Block[])[]): PortableText {
  return blocks.flat();
}

export function slug(current: string) {
  return { _type: "slug", current };
}

export function ref(_ref: string) {
  return { _type: "reference", _ref, _key: key() };
}

export function refArray(ids: string[]) {
  return ids.map((id) => ref(id));
}
