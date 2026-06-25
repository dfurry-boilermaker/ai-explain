// Single source of truth for the five rooms.
// Each theme drives the hub card, the route, and the room header.
//
// Field guide:
//   bigNumber / bigNumberLabel — the one-number-one-feeling headline hook
//   lens / tryThis             — framing + interaction prompt (hub + flow)
//   summary / askYourself      — plain-language explainer + reusable question
//   sources[]                  — the 2 load-bearing citations under the interaction
//   goDeeper[]                 — a sourced "go deeper" content layer (title/body/cite/url/type/date)
//
// Every claim was verified against primary or canonical sources in June 2026.
// `type` drives the citation chip styling: academic | regulation | report |
// frontier-lab | hyperscaler | journalism | standard.

export const themes = [
  {
    slug: 'power',
    title: 'Power',
    question: 'Who owns the machine?',
    accent: 'var(--power)',
    icon: 'power',
    bigNumber: '$1B+',
    bigNumberLabel: 'projected cost of the largest AI training runs by 2027 — pricing out all but a few',
    lens: 'The higher the price of building AI gets, the fewer people get to shape its future.',
    tryThis: 'Slide model cost upward and watch which actors disappear from the table.',
    summary:
      'Building a frontier AI model now costs hundreds of millions of dollars, and the price is climbing fast. The chips, the data centers, and the labs all narrow to a handful of companies — so a technology that touches everyone is steered by very few.',
    askYourself: 'Who can afford to build this — and who sets the rules the rest of us live under?',
    analogy:
      'Think of it like printing presses. When they were cheap, anyone could publish. When the press costs $1 billion, only a few own one — and they decide what gets printed.',
    sources: [
      {
        claim:
          'The cost to train frontier AI models has grown about 2.4× per year since 2016; if the trend holds, the largest training runs will exceed $1 billion by 2027.',
        cite: 'Cottier et al., “The rising costs of training frontier AI models,” Epoch AI',
        url: 'https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models',
        type: 'academic',
        date: '2024',
      },
      {
        claim:
          'Stanford’s AI Index estimated GPT-4 used about $78M of compute to train, and Google’s Gemini Ultra about $191M.',
        cite: 'Stanford HAI, AI Index Report 2024',
        url: 'https://hai.stanford.edu/ai-index/2024-ai-index-report',
        type: 'report',
        date: '2024',
      },
    ],
    goDeeper: [
      {
        title: 'One company supplies almost all the chips',
        body: 'NVIDIA held roughly 92% of the data-center GPU market in 2024, and in July 2025 became the first company ever to reach a $4 trillion market value. The hardware the whole industry trains on flows through a single vendor.',
        cite: 'IoT Analytics, 2025; Fortune, 2025',
        url: 'https://iot-analytics.com/leading-generative-ai-companies/',
        type: 'report',
        date: '2025',
      },
      {
        title: 'The supply chain narrows to a monopoly at every layer',
        body: 'TSMC made a record 70.2% of global foundry revenue in Q2 2025, and the EUV lithography machines needed to make the most advanced chips are built by exactly one company on Earth: ASML.',
        cite: 'TrendForce, 2025; ASML',
        url: 'https://www.asml.com/en/products/euv-lithography-systems',
        type: 'report',
        date: '2025',
      },
      {
        title: 'A few firms now spend hundreds of billions on AI infrastructure',
        body: 'In their latest fiscal years, Amazon (~$83B), Microsoft (~$65B), Meta (~$72B), and Alphabet (~$53B) poured record capital into data centers. Meta alone has guided to $115–135 billion of capital spending for 2026.',
        cite: 'SEC 10-K filings; Meta investor results, 2025–2026',
        url: 'https://www.sec.gov/Archives/edgar/data/789019/000095017025100235/msft-20250630.htm',
        type: 'hyperscaler',
        date: '2025',
      },
      {
        title: 'The labs are fused to the clouds',
        body: 'After OpenAI’s 2025 restructuring, Microsoft holds about 27% of the company and OpenAI committed to buy $250B of Azure compute. Anthropic raised $13B at a $183B valuation, trains on Amazon, and agreed to use up to a million Google TPUs.',
        cite: 'Microsoft Official Blog, 2025; Anthropic, 2025',
        url: 'https://blogs.microsoft.com/blog/2025/10/28/the-next-chapter-of-the-microsoft-openai-partnership/',
        type: 'frontier-lab',
        date: '2025',
      },
      {
        title: 'Compute is governable — which is why concentration matters',
        body: 'Researchers argue that computing power is uniquely “detectable, excludable, and quantifiable,” produced through an extremely concentrated supply chain. As of 2025, the US held ~75% of global AI-supercomputer performance, and industry’s share of AI compute rose from ~40% (2019) to ~80% (2025).',
        cite: 'Sastry, Heim, Belfield, Anderljung, Brundage et al., “Computing Power and the Governance of AI,” 2024; Epoch AI',
        url: 'https://arxiv.org/abs/2402.08797',
        type: 'academic',
        date: '2024',
      },
      {
        title: 'And it runs on a concentrated energy footprint',
        body: 'Data centers used about 415 TWh of electricity in 2024 (~1.5% of world demand); the IEA projects this more than doubles to ~945 TWh by 2030, with the US and China driving nearly 80% of the growth.',
        cite: 'IEA, “Energy and AI,” 2025',
        url: 'https://www.iea.org/reports/energy-and-ai',
        type: 'report',
        date: '2025',
      },
    ],
  },
  {
    slug: 'trust',
    title: 'Trust',
    question: 'Can you believe your eyes?',
    accent: 'var(--trust)',
    icon: 'trust',
    bigNumber: '55%',
    bigNumberLabel: 'how often people correctly spot a deepfake across 56 studies — barely better than a coin flip',
    lens: 'Synthetic media does not just create fakes; it makes real evidence easier to deny.',
    tryThis: 'Guess the AI portrait, then reveal the visual tells and the larger trust problem.',
    summary:
      'AI can fabricate convincing photos, voices, and video, and people cannot reliably tell the difference. “Seeing is believing” no longer holds — and once everyone knows fakes exist, bad actors can dismiss real evidence as fake too.',
    askYourself: 'Where did this come from, and can its origin be verified?',
    analogy:
      'Like a counterfeit bill so good no cashier can spot it. Once everyone knows perfect fakes exist, people start doubting the real money too.',
    sources: [
      {
        claim:
          'A 2024 meta-analysis of 56 studies and over 86,000 participants found people detect deepfakes with only ~55.5% accuracy — not meaningfully above chance.',
        cite: 'Diel et al., “Human performance in detecting deepfakes,” Computers in Human Behavior Reports',
        url: 'https://doi.org/10.1016/j.chbr.2024.100538',
        type: 'academic',
        date: '2024',
      },
      {
        claim:
          'Shown real vs. AI-generated faces, people judged them correctly only 48.2% of the time — and rated the fakes as more trustworthy than real faces.',
        cite: 'Nightingale & Farid, PNAS',
        url: 'https://www.pnas.org/doi/10.1073/pnas.2120481119',
        type: 'academic',
        date: '2022',
      },
    ],
    goDeeper: [
      {
        title: 'Your ears are no better than your eyes',
        body: 'In a 2023 study, listeners correctly identified speech deepfakes only about 73% of the time — and training did not reliably help. Voice cloning now needs only seconds of sample audio.',
        cite: 'Mai, Bray, Davies & Griffin, PLOS ONE',
        url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0285333',
        type: 'academic',
        date: '2023',
      },
      {
        title: 'The real danger is the “liar’s dividend”',
        body: 'Named by legal scholars in 2019, this is the idea that once fakes are everywhere, the guilty can wave away authentic evidence as “probably fake.” A 2025 study of 15,000+ people gave it the first experimental confirmation: crying “fake news” boosted support after real scandals.',
        cite: 'Chesney & Citron, California Law Review, 2019; Schiff et al., APSR, 2025',
        url: 'https://www.californialawreview.org/print/deep-fakes-a-looming-challenge-for-privacy-democracy-and-national-security',
        type: 'academic',
        date: '2019 · 2025',
      },
      {
        title: 'The fix isn’t your eyes — it’s provenance',
        body: 'The cross-industry C2PA “Content Credentials” standard attaches tamper-evident origin data to media. Its steering group includes Adobe, Google, Meta, Microsoft, OpenAI, Sony, and the BBC, and camera makers like Leica, Sony, and Nikon now ship it in hardware.',
        cite: 'Coalition for Content Provenance and Authenticity (C2PA)',
        url: 'https://c2pa.org/membership/members/',
        type: 'standard',
        date: '2024–2026',
      },
      {
        title: 'Labs are watermarking at massive scale',
        body: 'Google DeepMind reported that over 10 billion pieces of content had been watermarked with SynthID by May 2025, covering image, audio, text, and video, with the text method published in Nature.',
        cite: 'Google DeepMind, 2025; Dathathri et al., Nature, 2024',
        url: 'https://deepmind.google/technologies/synthid/',
        type: 'frontier-lab',
        date: '2025',
      },
      {
        title: 'The harm is already measured in billions',
        body: 'Deloitte projected that generative-AI-enabled fraud losses in the US could reach $40 billion by 2027, up from $12.3 billion in 2023. In one 2024 case, a deepfake video call impersonating executives cost a firm $25.6 million.',
        cite: 'Deloitte Center for Financial Services, 2024',
        url: 'https://www.deloitte.com/us/en/insights/industry/financial-services/deepfake-banking-fraud-risk-on-the-rise.html',
        type: 'report',
        date: '2024',
      },
      {
        title: 'Rules are starting to require disclosure',
        body: 'The EU AI Act’s Article 50 will require machine-readable marking of synthetic content from August 2026, and California’s AI Transparency Act requires disclosures from large providers starting January 2026.',
        cite: 'EU AI Act, Art. 50; California SB 942',
        url: 'https://artificialintelligenceact.eu/article/50/',
        type: 'regulation',
        date: '2026',
      },
    ],
  },
  {
    slug: 'money',
    title: 'Money',
    question: 'Why is "free" free?',
    accent: 'var(--money)',
    icon: 'money',
    bigNumber: '$513B',
    bigNumberLabel: 'projected global digital ad spend in 2025 — the business model behind "free"',
    lens: 'A free tool still has a customer, a cost, and a reason it wants your attention.',
    tryThis: 'Open the $0.00 receipt and itemize what a free service can collect instead.',
    summary:
      'Most “free” services are paid for with your data and attention. Your behavior is collected, combined, and turned into advertising revenue — and AI assistants are now being folded into the same model.',
    askYourself: 'If I am not paying with money, what am I paying with?',
    analogy:
      'Like a “free” magazine stuffed with ads. You’re not the reader being served — you’re the audience being sold to advertisers, page after page.',
    sources: [
      {
        claim:
          'Global digital advertising spend is projected to reach $513 billion in 2025 — about 63% of all advertising — funded largely by harvested personal data.',
        cite: 'Dentsu Global Ad Spend Forecasts 2025',
        url: 'https://www.dentsu.com/see/en/global-ad-spend-forecasts-2025-',
        type: 'report',
        date: '2024',
      },
      {
        claim:
          'EU law (the Digital Content Directive, 2019/770) explicitly covers contracts where consumers pay with personal data instead of money.',
        cite: 'Directive (EU) 2019/770, EUR-Lex',
        url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0770',
        type: 'regulation',
        date: '2019',
      },
    ],
    goDeeper: [
      {
        title: 'A name for the business model: surveillance capitalism',
        body: 'Scholar Shoshana Zuboff coined the term for the systematic capture of personal behavior as a free raw material that is turned into prediction products and sold. Her 2019 book made it the defining critique of the data economy.',
        cite: 'Shoshana Zuboff, The Age of Surveillance Capitalism, 2019',
        url: 'https://www.hachettebookgroup.com/titles/shoshana-zuboff/the-age-of-surveillance-capitalism/9781610395694/',
        type: 'academic',
        date: '2019',
      },
      {
        title: 'Regulators call it “vast surveillance”',
        body: 'A 2024 FTC staff report examined nine of the largest social media and streaming services and concluded they engaged in “vast surveillance” of users with inadequate safeguards, driven by behavioral-advertising business models.',
        cite: 'FTC Staff Report, “A Look Behind the Screens,” 2024',
        url: 'https://www.ftc.gov/reports/look-behind-screens-examining-data-practices-social-media-video-streaming-services',
        type: 'regulation',
        date: '2024',
      },
      {
        title: 'The feed optimizes for engagement, not you',
        body: 'A randomized study found that deactivating Facebook for four weeks reduced polarization and increased well-being — while internal Meta research, surfaced in 2021, showed Instagram made body-image issues worse for a third of affected teen girls.',
        cite: 'Allcott et al., American Economic Review, 2020; “Facebook Files,” 2021',
        url: 'https://www.aeaweb.org/articles?id=10.1257/aer.20190658',
        type: 'academic',
        date: '2020',
      },
      {
        title: 'Your data feeds a quarter-trillion-dollar trade',
        body: 'The global data-broker market was estimated at roughly $278 billion in 2024 — an industry built on buying, combining, and reselling personal information, most of it invisible to the people it describes.',
        cite: 'Grand View Research, 2024',
        url: 'https://www.grandviewresearch.com/industry-analysis/data-broker-market-report',
        type: 'report',
        date: '2024',
      },
      {
        title: 'AI is being pulled into the ad model too',
        body: 'OpenAI hit roughly $10 billion in annualized revenue by mid-2025, and in February 2026 began testing ads inside ChatGPT for free and low-cost tiers — a reversal of its earlier anti-advertising stance.',
        cite: 'TechCrunch, 2025–2026',
        url: 'https://techcrunch.com/2026/02/09/chatgpt-rolls-out-ads/',
        type: 'journalism',
        date: '2026',
      },
      {
        title: 'Your words are a licensed commodity',
        body: 'Content to train AI is now openly bought and sold: News Corp signed a licensing deal with OpenAI reported at over $250 million, and Reddit licensed its posts to Google for a reported ~$60 million per year.',
        cite: 'WSJ via Variety, 2024; CBS News, 2024',
        url: 'https://variety.com/2024/digital/news/news-corp-openai-licensing-deal-1236013734/',
        type: 'journalism',
        date: '2024',
      },
    ],
  },
  {
    slug: 'labor',
    title: 'Labor',
    question: 'Who is behind the curtain?',
    accent: 'var(--labor)',
    icon: 'labor',
    bigNumber: '$1.32/hr',
    bigNumberLabel: 'take-home pay reported for workers labeling toxic content to make ChatGPT safer',
    lens: 'What looks automatic often depends on hidden people doing repetitive, difficult work.',
    tryThis: 'Pull back the curtain on an automatic result to expose the workers behind it.',
    summary:
      'Behind “the AI did it automatically” is a vast, often invisible workforce — people labeling data, ranking answers, and moderating disturbing content. The intelligence is real; so are the people, and many are underpaid and out of sight.',
    askYourself: 'Whose labor made this "automatic" — and were they treated fairly?',
    analogy:
      'Like a spotless restaurant dining room. The “magic” depends on a hidden kitchen of people doing hard, unglamorous work you never see from your table.',
    sources: [
      {
        claim:
          'Kenyan workers, employed through an outsourcing firm, took home roughly $1.32–$2 per hour to label graphic content used to make ChatGPT less toxic.',
        cite: 'Billy Perrigo, TIME',
        url: 'https://time.com/6247678/openai-chatgpt-kenya-workers/',
        type: 'journalism',
        date: '2023',
      },
      {
        claim:
          'The World Bank estimates 154–435 million people do online gig work worldwide — up to 12% of the global labor force — much of it powering AI data tasks.',
        cite: 'World Bank, “Working Without Borders”',
        url: 'https://www.worldbank.org/en/news/press-release/2023/09/07/demand-for-online-gig-work-rapidly-rising-in-developing-countries',
        type: 'report',
        date: '2023',
      },
    ],
    goDeeper: [
      {
        title: 'The original name for it: “ghost work”',
        body: 'Researchers Mary Gray and Siddharth Suri documented the invisible global workforce that performs the labeling, moderation, and sorting people assume is fully automated — warning it risks creating “a new global underclass.”',
        cite: 'Gray & Suri, Ghost Work, 2019',
        url: 'https://ghostwork.info/',
        type: 'academic',
        date: '2019',
      },
      {
        title: 'Human feedback is what made chatbots usable',
        body: 'OpenAI’s 2022 InstructGPT work showed a 1.3-billion-parameter model fine-tuned on human demonstrations and human rankings was preferred over the 175-billion-parameter GPT-3. Modern assistants are aligned by armies of human raters.',
        cite: 'Ouyang et al., “Training language models to follow instructions with human feedback,” 2022',
        url: 'https://arxiv.org/abs/2203.02155',
        type: 'frontier-lab',
        date: '2022',
      },
      {
        title: 'Moderation can leave lasting psychological harm',
        body: 'In 2020, Facebook settled with about 11,250 US content moderators who developed PTSD, paying a minimum of $1,000 each and up to $50,000 for diagnoses. In Kenya, 140+ moderators were later diagnosed with PTSD in related litigation.',
        cite: 'The Verge / NPR, 2020; Reuters, 2024',
        url: 'https://www.theverge.com/2020/5/12/21255870/facebook-content-moderator-settlement-scola-ptsd-mental-health',
        type: 'journalism',
        date: '2020',
      },
      {
        title: 'Some labs are trying to take humans out of the worst of it',
        body: 'Anthropic’s “Constitutional AI” explicitly aims to reduce harm “without needing lots of humans to view large amounts of disturbing, traumatic content,” using AI feedback in place of some human harm-rating.',
        cite: 'Anthropic, “Claude’s Constitution,” 2023',
        url: 'https://www.anthropic.com/news/claudes-constitution',
        type: 'frontier-lab',
        date: '2023',
      },
      {
        title: 'It is a fast-growing industry built on cheap labor',
        body: 'The global data collection and labeling market was valued at about $3.8 billion in 2024 and is projected to reach $17 billion by 2030 — roughly 28% annual growth — much of the work routed to low-wage regions.',
        cite: 'Grand View Research, 2024',
        url: 'https://www.grandviewresearch.com/industry-analysis/data-collection-labeling-market',
        type: 'report',
        date: '2024',
      },
    ],
  },
  {
    slug: 'accountability',
    title: 'Accountability',
    question: 'When it\'s wrong, who pays?',
    accent: 'var(--account)',
    icon: 'account',
    bigNumber: '14',
    bigNumberLabel: 'people documented as wrongfully arrested in the US after a facial-recognition match',
    lens: 'When responsibility is spread across builders, sellers, and users, harm can fall through the gaps.',
    tryThis: 'Click each actor after a harm occurs and watch responsibility move in a circle.',
    summary:
      'When AI causes real harm — a wrongful arrest, a denied loan, a bad medical flag — responsibility scatters. The builder, the seller, and the user each point elsewhere, and the law is still catching up on who is liable.',
    askYourself: 'If this system harms someone, who can they actually hold responsible?',
    analogy:
      'Like a self-driving car with no one in the seat. After a crash, the maker, the owner, and the software vendor all point at each other — and the victim is left with no one to hold to account.',
    sources: [
      {
        claim:
          'As of April 2026, the ACLU had documented at least 14 known wrongful arrests in the US caused by police reliance on facial recognition — most of the victims Black.',
        cite: 'ACLU, Speech, Privacy & Technology Project',
        url: 'https://www.aclu.org/news/privacy-technology/more-than-a-dozen-wrongful-arrests-due-to-police-reliance-on-facial-recognition-technology',
        type: 'report',
        date: '2026',
      },
      {
        claim:
          'Scholars call this the “responsibility gap”: with self-learning machines, neither the maker, the operator, nor the machine can be cleanly held responsible.',
        cite: 'Matthias, Ethics and Information Technology',
        url: 'https://doi.org/10.1007/s10676-004-3422-1',
        type: 'academic',
        date: '2004',
      },
    ],
    goDeeper: [
      {
        title: 'A real case: arrested for an algorithm’s mistake',
        body: 'In January 2020, Detroit police wrongfully arrested Robert Williams in front of his family based on a false facial-recognition match — the first such case made public. His lawsuit ended in a 2024 settlement imposing some of the strongest US police limits on the technology.',
        cite: 'ACLU, Williams v. City of Detroit; NYT (Kashmir Hill), 2020',
        url: 'https://www.aclu.org/cases/williams-v-city-of-detroit-face-recognition-false-arrest',
        type: 'report',
        date: '2020–2024',
      },
      {
        title: 'Bias can hide inside “objective” software',
        body: 'ProPublica found a widely used recidivism tool flagged Black defendants as future criminals at nearly twice the false-positive rate of white defendants (44.9% vs. 23.5%) — an unfairness laundered through a risk score.',
        cite: 'Angwin, Larson, Mattu & Kirchner, ProPublica, “Machine Bias”',
        url: 'https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing',
        type: 'journalism',
        date: '2016',
      },
      {
        title: 'A health algorithm that quietly under-served Black patients',
        body: 'A widely deployed US healthcare algorithm predicted cost instead of illness; correcting that bias would have raised the share of Black patients flagged for extra care from 17.7% to 46.5%.',
        cite: 'Obermeyer, Powers, Vogeli & Mullainathan, Science',
        url: 'https://www.science.org/doi/10.1126/science.aax2342',
        type: 'academic',
        date: '2019',
      },
      {
        title: 'When a government trusted the model: the Dutch benefits scandal',
        body: 'A Dutch tax-authority risk algorithm that used nationality as a factor falsely accused tens of thousands of families of fraud, helping force the government’s resignation in 2021 — a vivid case of harm with no single accountable hand.',
        cite: 'Amnesty International, “Xenophobic Machines,” 2021',
        url: 'https://www.amnesty.org/en/latest/news/2021/10/xenophobic-machines-dutch-child-benefit-scandal/',
        type: 'report',
        date: '2021',
      },
      {
        title: 'Regulation is arriving — unevenly',
        body: 'The EU AI Act entered into force in 2024 with rules phasing in through 2026–2027, but the companion AI Liability Directive — meant to make it easier to sue over AI harm — was withdrawn by the Commission in 2025. In the US, the NIST AI Risk Management Framework remains voluntary.',
        cite: 'European Commission; NIST AI RMF 1.0, 2023',
        url: 'https://artificialintelligenceact.eu/implementation-timeline/',
        type: 'regulation',
        date: '2024–2026',
      },
      {
        title: 'Documentation is becoming the norm',
        body: 'The “model card” idea — publishing how a model was evaluated, including across demographic groups — was proposed in 2019 and now underpins the system cards OpenAI and Anthropic publish and the practices NIST recommends.',
        cite: 'Mitchell et al., “Model Cards for Model Reporting,” 2019',
        url: 'https://arxiv.org/abs/1810.03993',
        type: 'academic',
        date: '2019',
      },
    ],
  },
]

export const getTheme = (slug) => themes.find((t) => t.slug === slug)
