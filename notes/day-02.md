# Day 2 – 11 Nov 2026
Coder Army FDE #2 – How LLMs work

## Tokens
- LLMs don't read words; they read tokens (small chunks of text). "unbelievable" might be 3 tokens: "un", "believ", "able".
- In English, 1 token ≈ 4 characters ≈ ¾ of a word, so 100 words ≈ 130 tokens.
- Hindi, Marathi and many other languages use more tokens per word than English, so the same text costs more and fills the context faster.
- API pricing and limits are counted in tokens (input + output).

## Context window
- The maximum number of tokens the model can look at in one go: system prompt + chat history + documents + its own reply.
- The model has no memory between calls. A chatbot "remembers" only because we resend the history every time.
- When a chat gets longer than the window, the oldest parts must be cut or summarised, or the API returns an error. That's why a bot "forgets" early messages.

## Attention
- Attention lets every token look at all the other tokens and decide which ones matter for its meaning.
- Example: in "I sat on the river bank" vs "I went to the bank for a loan", attention links "bank" to "river" or "loan" to get the right meaning.
- Transformers stack many attention layers, which is how they understand long-range context.

## Temperature
- The model predicts a probability for every possible next token. Temperature controls how it picks.
- 0 → almost always the most likely token: consistent, predictable answers. Use for support replies, data extraction, code.
- 0.7–1 → more random and varied answers. Use for brainstorming and creative writing.
- Higher temperature = more creativity but also more risk of mistakes (hallucinations).

## Open question
- Since Indian languages use more tokens, how do FDEs keep cost and latency low for Hindi/Marathi users?
