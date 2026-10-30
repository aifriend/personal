import type { ImageMetadata } from 'astro';

// Importing photos from src/assets lets Astro auto-generate WebP/AVIF + responsive sizes.
import photo1 from '../assets/photos/photo-1.jpg';
import photo2 from '../assets/photos/photo-2.jpg';
import photo3 from '../assets/photos/photo-3.jpg';
import photo4 from '../assets/photos/photo-4.jpg';
import photo5 from '../assets/photos/photo-5.jpg';
import photo6 from '../assets/photos/photo-6.jpg';
import photo7 from '../assets/photos/photo-7.jpg';
import photo8 from '../assets/photos/photo-8.jpg';
import photo9 from '../assets/photos/photo-9.jpg';
import photo10 from '../assets/photos/photo-10.jpg';
import photo11 from '../assets/photos/photo-11.jpg';
import photo12 from '../assets/photos/photo-12.jpg';
import photo13 from '../assets/photos/photo-13.jpg';
import photo14 from '../assets/photos/photo-14.jpg';

export interface Plate {
  image: ImageMetadata;
  no: string;
  title: string;   // honest description of what's in the frame — not invented narrative
  caption?: string; // used only where a factual note is genuinely true
  serifSize: string;
}

// Titles describe what is actually in each photo. Captions were invented and
// have been removed — add true ones in your own words later.
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
  {
    image: photo5,
    no: '05',
    title: 'A painted staircase.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo6,
    no: '06',
    title: 'A tree in a courtyard.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo7,
    no: '07',
    title: 'A fountain, at night.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo8,
    no: '08',
    title: 'A statue in an arch.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo9,
    no: '09',
    title: 'A river god, in green.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo10,
    no: '10',
    title: 'A street of steps.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo11,
    no: '11',
    title: 'A flower bed.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo12,
    no: '12',
    title: 'A ceiling of lamps.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo13,
    no: '13',
    title: 'Oleander.',
    serifSize: 'text-[24px]',
  },
  {
    image: photo14,
    no: '14',
    title: 'A spiral topiary.',
    serifSize: 'text-[24px]',
  },
];
