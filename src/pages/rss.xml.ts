// Adapted from Astro Nano's RSS endpoint (MIT).
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '../site';
export async function GET(context: APIContext) {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  const items = [...notes, ...projects].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({ title: site.title, description: site.description, site: context.site!, customData: '<language>zh-cn</language>', items: items.map(item => ({ title: item.data.title, description: item.data.description, pubDate: item.data.date, link: `/${item.collection === 'projects' ? 'ai' : 'notes'}/${item.id}/` })) });
}
