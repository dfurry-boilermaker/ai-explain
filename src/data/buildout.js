// The investable AI build-out — the value chain as public tickers.
//
// Figures verified in a deep-research pass (June 2026) with 3-vote adversarial
// checking against PRIMARY sources: company earnings releases / investor pages
// (NVIDIA, Microsoft, Meta, Broadcom, GE Vernova, Vertiv, Constellation),
// Epoch AI's AI-Chip-Components Explorer, and official ETF issuer pages
// (VanEck SMH, iShares SOXX, Global X AIQ/BOTZ).
//
// ALL FIGURES ARE POINT-IN-TIME (2025–2026) AND FOR EDUCATION ONLY — NOT
// INVESTMENT ADVICE. ETF holdings/AUM change daily.
//
// `capexWeight` (hyperscalers) and `flowWeight` (chain layers) drive the
// money-flow Sankey: dollars start as hyperscaler capex and fan down the stack.

export const NOT_ADVICE =
  'Educational only — not investment advice. Figures are point-in-time (2025–2026) from the cited primary sources and change over time. Nothing here is a recommendation to buy or sell any security.'

// ---- The value chain, top (where money enters) to bottom (where it lands) ----
export const chainLayers = [
  {
    key: 'hyperscalers',
    title: 'Hyperscalers',
    role: 'The spenders',
    blurb: 'Big tech pours capital into AI data centers. Their capex is the river everything downstream drinks from.',
    flowWeight: 100,
    companies: [
      {
        name: 'Microsoft', ticker: 'MSFT', exch: 'NASDAQ',
        role: 'Azure cloud + the largest backer of OpenAI.',
        stat: 'Capex hit $16.7B in a single quarter (FY25 Q3), up from $11.0B a year earlier; Azure grew 33%.',
        cite: 'Microsoft FY25 Q3 results', url: 'https://news.microsoft.com/2025/04/30/microsoft-cloud-strength-drives-third-quarter-results/',
      },
      {
        name: 'Meta', ticker: 'META', exch: 'NASDAQ',
        role: 'Builds its own AI data centers and custom silicon.',
        stat: 'Raised 2025 capex guidance to $64–72B explicitly for AI data centers.',
        cite: 'Meta Q1 2025 results', url: 'https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-First-Quarter-2025-Results/default.aspx',
      },
      {
        name: 'Alphabet', ticker: 'GOOGL', exch: 'NASDAQ',
        role: 'Google Cloud, its own TPU chips, and a major Anthropic backer.',
        stat: 'Designs custom TPUs (built by Broadcom) and is a primary Anthropic investor.',
        cite: 'Deep-research synthesis, 2026', url: 'https://abc.xyz/investor/',
      },
      {
        name: 'Amazon', ticker: 'AMZN', exch: 'NASDAQ',
        role: 'AWS + Anthropic’s main cloud and training partner.',
        stat: 'Custom Trainium chips train Claude; invested ~$8B in Anthropic.',
        cite: 'Deep-research synthesis, 2026', url: 'https://ir.aboutamazon.com/',
      },
      {
        name: 'Oracle', ticker: 'ORCL', exch: 'NYSE',
        role: 'Fast-growing AI cloud; a Stargate data-center partner.',
        stat: 'Said it will spend ~$40B on NVIDIA chips for an OpenAI data center.',
        cite: 'Deep-research synthesis, 2026', url: 'https://investor.oracle.com/',
      },
    ],
  },
  {
    key: 'chips',
    title: 'Chip designers',
    role: 'The brains',
    blurb: 'They design the accelerators that do AI’s math. This is where the most capex lands first.',
    flowWeight: 64,
    companies: [
      {
        name: 'NVIDIA', ticker: 'NVDA', exch: 'NASDAQ',
        role: 'Designs the GPUs almost all frontier AI trains on — the center of gravity.',
        stat: 'Data-center revenue of $39.1B in one quarter (up 73% YoY) — about 89% of all revenue.',
        cite: 'NVIDIA Q1 FY2026 results', url: 'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2026',
      },
      {
        name: 'AMD', ticker: 'AMD', exch: 'NASDAQ',
        role: 'The leading GPU challenger; OpenAI struck a chip-buying deal with an option for up to ~10% of AMD.',
        stat: 'MI-series accelerators are the main merchant-GPU alternative to NVIDIA.',
        cite: 'Deep-research synthesis, 2026', url: 'https://www.amd.com/en/products/accelerators/instinct.html',
      },
      {
        name: 'Broadcom', ticker: 'AVGO', exch: 'NASDAQ',
        role: 'Builds hyperscalers’ custom AI chips (Google, Meta, OpenAI) and AI networking.',
        stat: 'Disclosed a ~$73B AI backlog and confirmed a fifth custom-silicon customer (Dec 2025).',
        cite: 'Broadcom Q4 FY2025 results', url: 'https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-fourth-quarter-and-fiscal-year-2025',
      },
    ],
  },
  {
    key: 'foundry',
    title: 'Foundry & equipment',
    role: 'The factory',
    blurb: 'Chip designers don’t build chips — they outsource to a tiny set of irreplaceable manufacturers and toolmakers.',
    flowWeight: 40,
    companies: [
      {
        name: 'TSMC', ticker: 'TSM', exch: 'NYSE',
        role: 'Manufactures the advanced chips NVIDIA, AMD, Apple, and Google only design.',
        stat: 'Makes ~90% of the world’s leading-edge chips and ~80–85% of advanced (CoWoS) packaging.',
        cite: 'Epoch AI, AI-Chip-Components Explorer', url: 'https://epoch.ai/latest/introducing-the-ai-chip-components-explorer',
      },
      {
        name: 'ASML', ticker: 'ASML', exch: 'NASDAQ',
        role: 'The only company on Earth that builds the EUV lithography machines for advanced chips.',
        stat: 'A genuine single point of failure: no ASML, no leading-edge AI chips.',
        cite: 'Deep-research synthesis, 2026', url: 'https://www.asml.com/en/investors',
      },
      {
        name: 'Applied Materials / Lam / KLA', ticker: 'AMAT · LRCX · KLAC', exch: 'NASDAQ',
        role: 'Make the deposition, etch, and inspection tools every fab needs.',
        stat: 'The “arms dealers to the arms dealers” — sells to every foundry regardless of who wins.',
        cite: 'Deep-research synthesis, 2026', url: 'https://ir.appliedmaterials.com/',
      },
    ],
  },
  {
    key: 'memory',
    title: 'Memory (HBM)',
    role: 'The bottleneck',
    blurb: 'High-bandwidth memory stacks beside each AI chip. In 2025 it became the binding supply constraint.',
    flowWeight: 30,
    companies: [
      {
        name: 'SK Hynix', ticker: '000660.KS', exch: 'KRX',
        role: 'The HBM market leader; customers reportedly offer to fund its expansion.',
        stat: 'HBM demand drove ~$20B of the ~$30B one-year jump in AI chip-component spending.',
        cite: 'Epoch AI, 2026', url: 'https://epoch.ai/latest/introducing-the-ai-chip-components-explorer',
      },
      {
        name: 'Micron', ticker: 'MU', exch: 'NASDAQ',
        role: 'The US HBM maker; all three HBM suppliers were reportedly sold out into 2027.',
        stat: 'AI chip-component spending more than doubled — $22B → $52B in a single year.',
        cite: 'Epoch AI, 2026', url: 'https://epoch.ai/latest/introducing-the-ai-chip-components-explorer',
      },
      {
        name: 'Samsung', ticker: '005930.KS', exch: 'KRX',
        role: 'The third HBM supplier, also a foundry and memory giant.',
        stat: 'One of three firms that make all the world’s HBM.',
        cite: 'Deep-research synthesis, 2026', url: 'https://www.samsung.com/semiconductor/',
      },
    ],
  },
  {
    key: 'power',
    title: 'Power & infrastructure',
    role: 'The new bottleneck',
    blurb: 'AI’s appetite for electricity is reviving nuclear and straining the grid. The build-out can’t run without power.',
    flowWeight: 26,
    companies: [
      {
        name: 'Constellation Energy', ticker: 'CEG', exch: 'NASDAQ',
        role: 'Largest US nuclear operator; signing power deals straight to hyperscalers.',
        stat: '20-year, 1,121 MW nuclear deal with Meta (Clinton plant), explicitly to power AI.',
        cite: 'Constellation, Jun 2025', url: 'https://www.constellationenergy.com/news/2025/constellation-meta-sign-20-year-deal-for-clean-reliable-nuclear-energy-in-illinois.html',
      },
      {
        name: 'GE Vernova', ticker: 'GEV', exch: 'NYSE',
        role: 'Builds the gas turbines and grid gear utilities need for data-center load.',
        stat: '$2.4B of data-center electrification orders in Q1 2026 — more than all of the prior year. ~$163B backlog.',
        cite: 'GE Vernova Q1 2026 results', url: 'https://www.gevernova.com/news/press-releases/ge-vernova-reports-first-quarter-2026-financial',
      },
      {
        name: 'Vertiv', ticker: 'VRT', exch: 'NYSE',
        role: 'Power and cooling systems that keep dense AI racks from melting.',
        stat: 'Q4 2025 backlog of $15.0B, up 109% YoY, with orders up ~252%.',
        cite: 'Vertiv Q4 2025 results', url: 'https://investors.vertiv.com/',
      },
      {
        name: 'Vistra / Talen / Oklo', ticker: 'VST · TLN · OKLO', exch: 'NYSE',
        role: 'Independent power producers and next-gen nuclear (SMR) plays courting data centers.',
        stat: 'Signing nuclear PPAs and SMR projects aimed squarely at AI demand.',
        cite: 'Deep-research synthesis, 2026', url: 'https://investor.vistracorp.com/',
      },
    ],
  },
  {
    key: 'software',
    title: 'Software & applications',
    role: 'The products',
    blurb: 'The companies turning AI models into tools for businesses and governments.',
    flowWeight: 18,
    companies: [
      {
        name: 'Palantir', ticker: 'PLTR', exch: 'NASDAQ',
        role: 'AI/data platforms for enterprises and governments.',
        stat: 'FY2025 revenue of $4.48B, up 56% year-over-year.',
        cite: 'Palantir FY2025 results', url: 'https://investors.palantir.com/',
      },
      {
        name: 'ServiceNow / Salesforce', ticker: 'NOW · CRM', exch: 'NYSE',
        role: 'Embedding AI “agents” across enterprise software.',
        stat: 'Salesforce also holds an Anthropic stake reported around $5B.',
        cite: 'Deep-research synthesis, 2026', url: 'https://investor.salesforce.com/',
      },
      {
        name: 'Snowflake', ticker: 'SNOW', exch: 'NYSE',
        role: 'The data platform AI models are increasingly trained and run against.',
        stat: 'A core “data layer” beneficiary of enterprise AI adoption.',
        cite: 'Deep-research synthesis, 2026', url: 'https://investors.snowflake.com/',
      },
    ],
  },
]

// ---- Hyperscaler capex sources for the money-flow viz (relative weights) ----
export const capexSources = [
  { name: 'Microsoft', ticker: 'MSFT', weight: 67, note: '$16.7B/quarter' },
  { name: 'Meta', ticker: 'META', weight: 68, note: '$64–72B/yr guided' },
  { name: 'Alphabet', ticker: 'GOOGL', weight: 55, note: 'TPU + cloud' },
  { name: 'Amazon', ticker: 'AMZN', weight: 60, note: 'AWS + Trainium' },
  { name: 'Oracle', ticker: 'ORCL', weight: 40, note: '~$40B NVIDIA order' },
]

// ---- Key investing concepts a novice needs ----
export const investingConcepts = [
  {
    slug: 'picks-and-shovels',
    title: 'Picks and shovels',
    plain:
      'In a gold rush, selling picks and shovels can beat mining for gold. The clearest AI winners so far aren’t the apps — they’re the firms selling the chips, tools, and power every AI company must buy.',
    stat: 'NVIDIA earns ~89% of its revenue from data-center chips — the “shovels” of the AI rush.',
    cite: 'NVIDIA Q1 FY2026 results',
    url: 'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2026',
  },
  {
    slug: 'capex',
    title: 'Follow the capex',
    plain:
      'Capex is what a company spends building long-term assets — here, AI data centers. Hyperscaler capex is the single biggest driver of demand for everything downstream, so investors watch it like a tide table.',
    stat: 'Microsoft spent $16.7B in one quarter (up ~53% YoY); Meta guided $64–72B for the year.',
    cite: 'Microsoft FY25 Q3; Meta Q1 2025',
    url: 'https://news.microsoft.com/2025/04/30/microsoft-cloud-strength-drives-third-quarter-results/',
  },
  {
    slug: 'concentration',
    title: 'Concentration risk',
    plain:
      'The whole build-out leans on a handful of companies. That’s great while they execute — and dangerous if any one stumbles. Even “diversified” chip ETFs are startlingly concentrated.',
    stat: 'The VanEck SMH ETF holds just 26 names; its top 10 are ~69% of assets, led by NVIDIA at ~18%.',
    cite: 'VanEck SMH fund page, Jun 2026',
    url: 'https://www.vaneck.com/us/en/investments/semiconductor-etf-smh/',
  },
  {
    slug: 'circular',
    title: 'Circular financing',
    plain:
      'A growing worry: the same dollars circle the ecosystem. NVIDIA invests in customers who then buy NVIDIA chips. It can amplify real growth — or inflate the appearance of demand.',
    stat: 'NVIDIA pledged up to $100B to OpenAI (Sept 2025); analysts flagged “circular” financing concerns.',
    cite: 'Fortune; Bernstein, 2025',
    url: 'https://fortune.com/2025/09/28/nvidia-openai-circular-financing-ai-bubble/',
  },
  {
    slug: 'backlog',
    title: 'Backlog as a crystal ball',
    plain:
      'Backlog (orders signed but not yet delivered) hints at future revenue. Surging backlogs in power and cooling are some of the clearest forward signals of the build-out’s momentum.',
    stat: 'Vertiv’s backlog jumped to $15.0B, up 109% YoY; GE Vernova’s topped ~$163B.',
    cite: 'Vertiv Q4 2025; GE Vernova Q1 2026',
    url: 'https://investors.vertiv.com/',
  },
  {
    slug: 'power-bottleneck',
    title: 'The power bottleneck',
    plain:
      'Chips are useless without electricity to run them. Power has become the constraint that decides how fast AI can grow — turning utilities and nuclear operators into AI plays.',
    stat: 'Meta signed a 20-year, 1,121 MW nuclear deal explicitly to power its AI ambitions.',
    cite: 'Constellation Energy, Jun 2025',
    url: 'https://www.constellationenergy.com/news/2025/constellation-meta-sign-20-year-deal-for-clean-reliable-nuclear-energy-in-illinois.html',
  },
  {
    slug: 'risks',
    title: 'The big risks',
    plain:
      'Three loom largest: export controls (China), overcapacity (a glut if demand cools), and custom silicon — hyperscalers building their own chips to cut NVIDIA out.',
    stat: 'Export limits on China forced NVIDIA into a $4.5B charge and ~$8B of lost quarterly revenue.',
    cite: 'NVIDIA Q1 FY2026 results',
    url: 'https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2026',
  },
  {
    slug: 'valuation',
    title: 'Valuation & the Mag 7',
    plain:
      'Price isn’t value. A P/E ratio compares price to earnings; high multiples bake in big expectations. A handful of AI-heavy giants — the “Magnificent Seven” — now dominate the whole market.',
    stat: 'Seven tech companies make up over 35% of the S&P 500’s value — more than $20 trillion.',
    cite: 'Deep-research synthesis, 2026',
    url: 'https://fortune.com/2025/09/28/nvidia-openai-circular-financing-ai-bubble/',
  },
]

// ---- ETFs: one-ticker exposure (and a concentration teaching tool) ----
export const etfs = [
  {
    ticker: 'SMH', name: 'VanEck Semiconductor', exch: 'NASDAQ',
    aum: '$72.9B', fee: '0.35%', holdings: 26,
    note: 'Whole chip value chain in one ticker — but top 10 ≈ 69%, NVDA ≈ 18%, TSM ≈ 9%.',
    url: 'https://www.vaneck.com/us/en/investments/semiconductor-etf-smh/',
  },
  {
    ticker: 'SOXX', name: 'iShares Semiconductor', exch: 'NASDAQ',
    aum: '$45.5B', fee: '0.34%', holdings: 34,
    note: 'Broad US semiconductor exposure across the value chain.',
    url: 'https://www.ishares.com/us/products/239705/',
  },
  {
    ticker: 'AIQ', name: 'Global X AI & Technology', exch: 'NASDAQ',
    aum: '$10.4B', fee: '0.68%', holdings: 84,
    note: 'Broader AI theme; top holdings are memory/chip makers (SK Hynix, Micron).',
    url: 'https://www.globalxetfs.com/funds/aiq/',
  },
  {
    ticker: 'BOTZ', name: 'Global X Robotics & AI', exch: 'NASDAQ',
    aum: '$3.4B', fee: '0.68%', holdings: 62,
    note: 'More a robotics/automation play (ABB, Keyence, Fanuc) than a chip fund.',
    url: 'https://www.globalxetfs.com/funds/botz/',
  },
]

// ---- The headline concentration takeaway ----
export const concentration = {
  headline: 'One company. One factory. One toolmaker.',
  body:
    'Almost every frontier model trains on NVIDIA chips; roughly 90% of the world’s advanced chips are made by a single foundry, TSMC, using machines only ASML can build. The top four AI chip buyers soak up ~80–85% of the world’s advanced packaging. A market sold as limitless rests on a remarkably narrow base — the single most important risk to understand.',
  cite: 'Epoch AI, AI-Chip-Components Explorer, 2026',
  url: 'https://epoch.ai/latest/introducing-the-ai-chip-components-explorer',
}
