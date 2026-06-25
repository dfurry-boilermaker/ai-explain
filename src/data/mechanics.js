// Content for the "How it actually works" layer.
// Sourced from a deep-research pass (verified 3-0 against primary sources:
// Epoch AI, Stanford HAI 2024 AI Index, Hugging Face FineWeb, the original
// "Attention Is All You Need" paper, Jay Alammar's Illustrated Transformer,
// the Polo Club Transformer Explainer, and Bycroft's LLM Visualization).
//
// Each concept: a plain-language explanation, an everyday analogy, one
// striking sourced fact, and the interactive demo (if any) that teaches it.

export const mechanics = [
  {
    slug: 'tokens',
    num: '01',
    title: 'Tokens & embeddings',
    short: 'Words become numbers',
    plain:
      'An AI model cannot read letters. Before anything happens, your text is chopped into chunks called “tokens,” and each token is turned into a long list of numbers — a vector — that captures its meaning.',
    analogy:
      'Think of it like a GPS coordinate for every word. Each token gets a position in a vast “meaning-space,” and words with similar meanings sit close together.',
    stat: {
      value: '512',
      label: 'numbers used to represent a single word in the original Transformer paper (modern models use thousands).',
      cite: 'Vaswani et al., “Attention Is All You Need,” 2017',
      url: 'https://arxiv.org/abs/1706.03762',
      type: 'academic',
    },
    demo: 'tokenizer',
  },
  {
    slug: 'attention',
    num: '02',
    title: 'Attention',
    short: 'Words look at each other',
    plain:
      'To understand a word, the model lets every token “look at” the others and decide which ones matter. This is attention — it’s how the model figures out what a word means in context.',
    analogy:
      'In “The animal didn’t cross the street because it was too tired,” attention is what links “it” back to “animal,” not “street.”',
    stat: {
      value: '“it” → “animal”',
      label: 'a real attention link: the model learns which earlier word a pronoun refers to.',
      cite: 'Alammar, “The Illustrated Transformer”',
      url: 'https://jalammar.github.io/illustrated-transformer/',
      type: 'reference',
    },
    demo: 'attention',
  },
  {
    slug: 'prediction',
    num: '03',
    title: 'Next-token prediction',
    short: 'It guesses the next word',
    plain:
      'At its core the model does one thing over and over: score every possible next token, turn those scores into probabilities that add up to 100%, and pick one. Then it repeats. That is the entire engine behind a chatbot.',
    analogy:
      'Like the world’s most well-read autocomplete — it has read much of the internet, so its guess for “the next word” is usually fluent. “Temperature” is the dial between predictable and creative.',
    stat: {
      value: '100%',
      label: 'the probabilities across all possible next words always sum to 1.0 — the model is always just picking from a ranked list.',
      cite: 'Alammar, “The Illustrated Transformer”; Polo Club, Transformer Explainer',
      url: 'https://poloclub.github.io/transformer-explainer/',
      type: 'reference',
    },
    demo: 'prediction',
  },
  {
    slug: 'training-data',
    num: '04',
    title: 'Training on the internet',
    short: 'It learned by reading everything',
    plain:
      'A model is “pretrained” by reading an enormous slice of the internet and repeatedly guessing the next word, correcting itself each time. No one programs in facts — patterns are absorbed from the text itself.',
    analogy:
      'Like a student who read a library so large that no human could finish it in a thousand lifetimes — then learned to write by imitation.',
    stat: {
      value: '15 trillion',
      label: 'tokens of filtered web text (about 44 terabytes) in Hugging Face’s open FineWeb dataset — a sense of pretraining scale.',
      cite: 'Hugging Face, FineWeb dataset, 2024',
      url: 'https://huggingface.co/datasets/HuggingFaceFW/fineweb',
      type: 'frontier-lab',
    },
    demo: null,
  },
  {
    slug: 'rlhf',
    num: '05',
    title: 'Human feedback (RLHF)',
    short: 'People taught it manners',
    plain:
      'A raw pretrained model is fluent but unruly. To make it helpful and safe, humans rank its answers; those rankings train a separate “reward model,” which is then used to nudge the AI toward responses people prefer.',
    analogy:
      'Like coaching a brilliant but tactless intern: you don’t rewrite their brain, you give constant feedback until their instincts match what you want.',
    stat: {
      value: 'Humans in the loop',
      label: 'the model’s “personality,” politeness, and refusals are trained in by human raters — they are not natural.',
      cite: 'Ouyang et al., “Training language models to follow instructions with human feedback” (InstructGPT), 2022',
      url: 'https://arxiv.org/abs/2203.02155',
      type: 'frontier-lab',
    },
    demo: null,
  },
  {
    slug: 'parameters',
    num: '06',
    title: 'Parameters & weights',
    short: 'Billions of tiny dials',
    plain:
      'Everything the model “knows” lives in its parameters (also called weights) — numerical dials that get tuned during training. More parameters means more capacity to capture patterns.',
    analogy:
      'Imagine a mixing board with billions of tiny knobs. Training is the slow process of setting every knob; the final settings are the model.',
    stat: {
      value: '175 billion',
      label: 'parameters in GPT-3 (2020). Frontier models today are far larger — too many knobs for any person to set by hand.',
      cite: 'Brown et al., “Language Models are Few-Shot Learners” (GPT-3), 2020',
      url: 'https://arxiv.org/abs/2005.14165',
      type: 'frontier-lab',
    },
    demo: null,
  },
  {
    slug: 'compute',
    num: '07',
    title: 'The compute behind it',
    short: 'Mountains of math, briefly',
    plain:
      'A “training run” is months of nonstop arithmetic across tens of thousands of specialized chips. The amount of computation is measured in FLOPs (floating-point operations) — and it has been exploding.',
    analogy:
      'If next-token prediction is one push-up, training a frontier model is doing them nonstop, on thousands of machines, for months — burning a small power plant’s worth of electricity.',
    stat: {
      value: '4–5× / year',
      label: 'the rate at which the computation used to train frontier AI models has grown since 2010.',
      cite: 'Epoch AI, “Training compute of frontier AI models grows by 4–5x per year,” 2024',
      url: 'https://epoch.ai/blog/training-compute-of-frontier-ai-models-grows-by-4-5x-per-year',
      type: 'academic',
    },
    demo: null,
    extra: [
      {
        text: 'GPT-4 took an estimated 2×10²⁵ FLOP and about $78M of compute; Gemini Ultra about 5×10²⁵ FLOP and $191M.',
        cite: 'Stanford HAI, AI Index 2024; Epoch AI',
        url: 'https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models',
        type: 'report',
      },
      {
        text: 'If the trend holds, the largest training runs will cost more than $1 billion by 2027.',
        cite: 'Epoch AI, 2024',
        url: 'https://epoch.ai/blog/how-much-does-it-cost-to-train-frontier-ai-models',
        type: 'academic',
      },
    ],
  },
]

export const getConcept = (slug) => mechanics.find((m) => m.slug === slug)
