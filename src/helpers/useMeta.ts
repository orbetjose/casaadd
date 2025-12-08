// useMeta.js
import { useEffect } from "react";

type OpenGraphMeta = {
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
  site_name?: string;
  locale?: string;
};

type TwitterMeta = {
  card?: string;
  title?: string;
  description?: string;
  image?: string;
  site?: string;
  creator?: string;
};

export interface MetaTags {
  title?: string;
  description?: string;
  keywords?: string;
  robots?: string;
  canonical?: string;
  og?: OpenGraphMeta;
  twitter?: TwitterMeta;
}

export function useMeta(meta: MetaTags) {
  useEffect(() => {
    const { title, description, keywords, robots, canonical, og, twitter } = meta;

    const upsertMeta = (attr: "name" | "property", name: string, content?: string) => {
      if (!content) return;
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const upsertLink = (rel: string, href?: string) => {
      if (!href) return;
      let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // --- SEO básico ---
    if (title) document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "robots", robots ?? "index, follow");
    upsertLink("canonical", canonical);

    // --- Open Graph ---
    if (og) {
      Object.entries(og).forEach(([key, value]) => {
        if (value) upsertMeta("property", `og:${key}`, value);
      });
    }

    // --- Twitter ---
    if (twitter) {
      Object.entries(twitter).forEach(([key, value]) => {
        if (value) upsertMeta("name", `twitter:${key}`, value);
      });
    }

  }, [JSON.stringify(meta)]);
}