// "Who is building this?" — the AI value chain as publicly traded companies.
// Figures verified in a deep-research pass (June 2026) against primary sources:
// company earnings releases / newsrooms (NVIDIA, TSMC, ASML, Vertiv, GE Vernova,
// Constellation), official blogs (Microsoft), and SEC filings. Figures are
// point-in-time and will drift — each carries its "as of" date.
//
// Layers run down the stack: chips → chip supply chain → clouds → labs →
// power → software. The throughline is concentration: the whole tower leans
// on a very small number of companies.

export const buildoutLayers = [
  {
    key: 'chips',
    title: 'The chips',
    blurb: 'The accelerators that do the actual math of training and running AI.',
    companies: [
      {
        name: 'NVIDIA',
        ticker: 'NVDA',
        exch: 'NASDAQ',
        role: 'Designs the GPUs almost all frontier AI is trained on — the center of gravity for the whole build-out.',
        stat: 'Record revenue of $81.6B in the quarter ended Apr 2026, up 85% year-over-year.',
        cite: 'NVIDIA Q1 FY2027 results, May 2026',
        url: 'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2027',
      },
      {
        name: 'AMD',
        ticker: 'AMD',
        exch: 'NASDAQ',
        role: 'NVIDIA’s main GPU challenger; its MI-series accelerators are the leading alternative for AI data centers.',
        stat: 'MI350-class accelerators are built on TSMC’s 3nm process — the leading edge of chipmaking.',
        cite: 'Deep-research synthesis, 2026',
        url: 'https://www.amd.com/en/products/accelerators/instinct.html',
      },
      {
        name: 'Broadcom',
        ticker: 'AVGO',
        exch: 'NASDAQ',
        role: 'Co-designs the custom AI chips (e.g. Google’s TPUs) and builds the networking that wires data centers together.',
        stat: 'A key partner behind hyperscalers’ in-house accelerators and AI networking silicon.',
        cite: 'Deep-research synthesis, 2026',
        url: 'https://www.broadcom.com/',
      },
    ],
  },
  {
    key: 'supply',
    title: 'The chip supply chain',
    blurb: 'A narrow funnel: the world’s advanced chips flow through a handful of irreplaceable suppliers.',
    companies: [
      {
        name: 'TSMC',
        ticker: 'TSM',
        exch: 'NYSE',
        role: 'Manufactures the advanced chips that AI designers (NVIDIA, AMD, Apple, Google) only design — they don’t build.',
        stat: 'Makes roughly 90% of the world’s leading-edge chips; Q1 2026 revenue ~$35.9B at a 66% gross margin.',
        cite: 'TSMC Q1 2026 results; TrendForce',
        url: 'https://investor.tsmc.com/english/quarterly-results',
      },
      {
        name: 'ASML',
        ticker: 'ASML',
        exch: 'NASDAQ',
        role: 'The single company on Earth that builds the EUV lithography machines required to make the most advanced chips.',
        stat: 'Q1 2026 net sales of €8.8B; its EUV monopoly is a true single point of failure for AI hardware.',
        cite: 'ASML Q1 2026 results, Apr 2026',
        url: 'https://www.asml.com/en/investors',
      },
      {
        name: 'Micron',
        ticker: 'MU',
        exch: 'NASDAQ',
        role: 'A leading maker of high-bandwidth memory (HBM) — the specialized memory stacked next to AI chips.',
        stat: 'Micron pegged the HBM market at ~$18B in 2024, growing to ~$35B in 2025.',
        cite: 'Micron TAM estimates, 2025',
        url: 'https://www.micron.com/products/memory/hbm',
      },
    ],
  },
  {
    key: 'clouds',
    title: 'The clouds',
    blurb: 'The hyperscalers renting out the compute — and pouring record capital into data centers.',
    companies: [
      {
        name: 'Microsoft',
        ticker: 'MSFT',
        exch: 'NASDAQ',
        role: 'Azure hosts much of OpenAI; Microsoft holds a ~27% stake in OpenAI’s for-profit arm valued around $135B.',
        stat: 'Public investors gain OpenAI exposure largely through MSFT.',
        cite: 'Microsoft, Oct 2025',
        url: 'https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/',
      },
      {
        name: 'Alphabet',
        ticker: 'GOOGL',
        exch: 'NASDAQ',
        role: 'Runs Google Cloud, builds its own TPU chips, owns DeepMind, and is a major Anthropic backer.',
        stat: 'Holds ~14% of Anthropic and committed up to $40B more in 2025.',
        cite: 'Deep-research synthesis, 2026',
        url: 'https://abc.xyz/investor/',
      },
      {
        name: 'Amazon',
        ticker: 'AMZN',
        exch: 'NASDAQ',
        role: 'AWS is Anthropic’s primary cloud and training partner; Amazon’s custom Trainium chips train Claude.',
        stat: 'Invested ~$8B in Anthropic (stake ~$74B on paper by Apr 2026) and committed up to $20B more.',
        cite: 'SEC filings, 2026',
        url: 'https://ir.aboutamazon.com/',
      },
      {
        name: 'Oracle',
        ticker: 'ORCL',
        exch: 'NYSE',
        role: 'A fast-growing AI cloud provider, building large data-center capacity contracted to AI labs.',
        stat: 'A core infrastructure partner in large-scale AI compute build-outs.',
        cite: 'Deep-research synthesis, 2026',
        url: 'https://investor.oracle.com/',
      },
    ],
  },
  {
    key: 'power',
    title: 'The power',
    blurb: 'AI’s appetite for electricity is reviving nuclear plants and straining the grid.',
    companies: [
      {
        name: 'Constellation Energy',
        ticker: 'CEG',
        exch: 'NASDAQ',
        role: 'The largest US nuclear operator — restarting Three Mile Island Unit 1 to power Microsoft data centers.',
        stat: '20-year deal with Microsoft; the reactor (~835 MW) is due back online in 2027 with a $1B DOE loan.',
        cite: 'Constellation Energy, 2025',
        url: 'https://www.constellationenergy.com/newsroom.html',
      },
      {
        name: 'Vistra',
        ticker: 'VST',
        exch: 'NYSE',
        role: 'An independent power producer signing nuclear power deals directly with cloud providers.',
        stat: 'Signed a 20-year PPA with AWS for up to 1,200 MW of carbon-free nuclear power.',
        cite: 'Vistra investor materials, 2025',
        url: 'https://investor.vistracorp.com/',
      },
      {
        name: 'GE Vernova',
        ticker: 'GEV',
        exch: 'NYSE',
        role: 'Builds the gas turbines and grid equipment utilities need to feed new data-center load.',
        stat: 'Ended FY2025 with a ~$150B backlog; $2.4B of data-center electrification orders in Q1 2026 alone.',
        cite: 'GE Vernova FY2025 / Q1 2026 results',
        url: 'https://www.gevernova.com/investors',
      },
      {
        name: 'Vertiv',
        ticker: 'VRT',
        exch: 'NYSE',
        role: 'Makes the power and cooling systems that keep dense AI server racks from melting.',
        stat: 'Q1 2025 sales of ~$2.0B (up 24%) with a $7.9B backlog of data-center infrastructure orders.',
        cite: 'Vertiv Q1 2025 results',
        url: 'https://investors.vertiv.com/',
      },
    ],
  },
  {
    key: 'software',
    title: 'The software',
    blurb: 'Public companies turning AI models into products for businesses and governments.',
    companies: [
      {
        name: 'Palantir',
        ticker: 'PLTR',
        exch: 'NASDAQ',
        role: 'Sells AI/data platforms to enterprises and governments, including a core role in a US Army data layer.',
        stat: 'FY2025 revenue of $4.48B, up 56% year-over-year.',
        cite: 'Palantir FY2025 results',
        url: 'https://investors.palantir.com/',
      },
      {
        name: 'Salesforce',
        ticker: 'CRM',
        exch: 'NYSE',
        role: 'Embeds AI “agents” across its enterprise software and holds a stake in Anthropic.',
        stat: 'Its Anthropic stake is reported to be worth around $5B.',
        cite: 'Deep-research synthesis, 2026',
        url: 'https://investor.salesforce.com/',
      },
    ],
  },
]

// The headline takeaway the whole layer is built to deliver.
export const buildoutConcentration = {
  headline: 'One company. One factory. The whole tower.',
  body:
    'Almost every frontier model is trained on NVIDIA chips, and roughly 90% of the world’s advanced chips are made by a single foundry, TSMC, using lithography machines only ASML can build. A technology sold as limitless rests on a remarkably narrow base.',
  cite: 'TrendForce; TSMC; ASML — 2025–2026',
  url: 'https://www.trendforce.com/',
}
