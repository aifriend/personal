// Canonical order of research pieces. Used by both the index (Research.astro)
// and the per-piece page ([slug].astro) so prev/next stays in sync with the index.

export interface ResearchRow {
  no: string;
  group: string;
  title: string;
  slug: string;
  kind: string;
  hoverBg: string;
}

export const researchRows: ResearchRow[] = [
  { no: 'I',    group: 'Mind & Cognition',  title: 'Models of the Mind',                slug: 'models-of-the-mind',               kind: 'theory',      hoverBg: 'hover:bg-rose/27' },
  { no: 'II',   group: 'Mind & Cognition',  title: 'Computational Neuroscience',        slug: 'computational-neuroscience',       kind: 'course',      hoverBg: 'hover:bg-rose/27' },
  { no: 'III',  group: 'Mind & Cognition',  title: 'Metacognitions',                    slug: 'metacognitions',                   kind: 'practice',    hoverBg: 'hover:bg-rose/27' },
  { no: 'IV',   group: 'Mind & Cognition',  title: 'Consciousness',                     slug: 'consciousness',                    kind: 'inquiry',     hoverBg: 'hover:bg-rose/27' },
  { no: 'V',    group: 'Mind & Cognition',  title: 'Attention Revolution',              slug: 'attention-revolution',             kind: 'practice',    hoverBg: 'hover:bg-rose/27' },
  { no: 'VI',   group: 'Neuroscience',      title: 'Imaging Neuroscience',              slug: 'imaging-neuroscience',             kind: 'course',      hoverBg: 'hover:bg-periwinkle/27' },
  { no: 'VII',  group: 'Neuroscience',      title: 'Medical Neuroscience',              slug: 'medical-neuroscience',             kind: 'course',      hoverBg: 'hover:bg-periwinkle/27' },
  { no: 'VIII', group: 'Memory & Learning', title: 'Memory Mastery',                    slug: 'memory-mastery',                   kind: 'method',      hoverBg: 'hover:bg-sage/27' },
  { no: 'IX',   group: 'Memory & Learning', title: 'Mathematics for Machine Learning',  slug: 'mathematics-for-machine-learning', kind: 'foundation',  hoverBg: 'hover:bg-sage/27' },
  { no: 'X',    group: 'AI & Agents',       title: 'Self-Improving Agents',             slug: 'self-improving-agents',            kind: 'research',    hoverBg: 'hover:bg-periwinkle/27' },
  { no: 'XI',   group: 'AI & Agents',       title: 'Nested Learning',                   slug: 'nested-learning',                  kind: 'research',    hoverBg: 'hover:bg-periwinkle/27' },
  { no: 'XII',  group: 'Field & Practice',  title: 'Alhambra',                          slug: 'alhambra',                         kind: 'fieldwork',   hoverBg: 'hover:bg-rose/27' },
  { no: 'XIII', group: 'Field & Practice',  title: 'PhD',                               slug: 'phd',                              kind: 'in progress', hoverBg: 'hover:bg-sage/27' },
];
