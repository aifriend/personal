import type { ImageMetadata } from 'astro';

// Importing photos from src/assets lets Astro auto-generate WebP/AVIF + responsive sizes.
import photo1 from '../assets/photos/photo-1.jpg';
import photo2 from '../assets/photos/photo-2.jpg';
import photo3 from '../assets/photos/photo-3.jpg';
import photo4 from '../assets/photos/photo-4.jpg';

export interface Plate {
  image: ImageMetadata;
  no: string;
  title: string;   // honest description of what's in the frame — not invented narrative
  caption?: string; // used only where a factual note is genuinely true
  serifSize: string;
}

// Titles describe what is actually in each photo. Captions were invented and
// have been removed — add true ones in your own words later (see AUTHENTICITY-PASS.md).
// Shared by the homepage Photography section and the /photos gallery page.
export const plates: Plate[] = [
  {
    image: photo1,
    no: '01',
    title: 'A cross of carnations.',
    serifSize: 'text-[26px]',
  },
  {
    image: photo2,
    no: '02',
    title: 'Ferns at the base of a tree.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo3,
    no: '03',
    title: 'A stone Christ.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo4,
    no: '04',
    title: 'Pluto.',
    caption: "New Horizons, NASA — the one picture here I didn't take.",
    serifSize: 'text-[24px]',
  },
];
