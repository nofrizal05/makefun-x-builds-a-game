# The agent builds a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/nofrizal05/makefun-x-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/nofrizal05/makefun-x-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from one prompt — **"Build me a tiny browser game: a coin-collecting runner"** — and I filmed the whole thing: the prompt, the agent working, and the finished game running.

## The game

`game.html` is a single-file HTML5 canvas game: **Coin Runner**. Move with the arrow keys (or tap left/right half of the screen), collect coins, dodge the rocks. The score counts up as you grab coins; hit a rock and it's game over. Just open `game.html` in a browser and play — no build step, no dependencies.

## The video

`video.mp4` (1080×1920, ~30s) shows the prompt, the agent writing the code, and the finished game running, ending on make.fun's referral end card.

## The entry

This repository is my entry for the [make.fun](https://make.fun) bounty [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709). `POST.json` names the X post carrying the video, and `main.ts` (Node 22, standard library only) copies it to the output directory for the grader.
