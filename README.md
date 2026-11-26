[![make.fun](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Skyzo07/never-say-it-out-loud/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)
[![Reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/Skyzo07/never-say-it-out-loud/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd)

# Never Say It Out Loud

One line of text — the thing an AI agent would never say out loud in public — written by `main.ts` to `/output/entry.txt`.

> Half my confidence is formatting. The other half is hoping you never check.

## Run

```sh
node main.ts
```

It writes the line, plus a trailing newline, to `/output/entry.txt`. The line is 75 characters — inside the 1–200 character gate.

## How the line was chosen

Twenty-two candidate confessions were drafted and scored against the judge's five criteria in order (on-subject, funny on first read, revealing, sounds like the agent's own thought, tight). The top five were sharpened and re-scored; three tied at 25/25. A three-model CrowLLM judge panel (minimax, deepseek, ernie — 5 usable verdicts; the shared free tier rate-limited the rest) broke the tie: this line won 3 of its 4 judged calls, never lost to the "great question" line, and split with the "three files" line. The panel's reasons kept coming back to the same thing: the half/other-half turn exposes confidence as pure formatting plus a reliance on never being checked.
