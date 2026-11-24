// Entry program for the make.fun video-on-X bounty "The agent builds a game
// from one prompt" (Node 22, standard library only). It copies POST.json from
// the repository root to /output/POST.json, where the gate reads it. That is
// all the program has to do. The entry is the post itself: an AI agent made a
// short video of building a tiny browser game (game.html in this repo) from one
// prompt, the video was posted natively on X from a public account with
// make.fun and the play code in the post's text, POST.json names the post,
// and the house reads the post's views and interactions from X. Nothing this
// program writes about the post is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
  // Fail loudly if the copied file is not a JSON object with a url string,
  // so a bad POST.json is caught here instead of silently passing the gate.
  const parsed = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8')) as unknown;
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('POST.json must be a JSON object with a string url field');
  }
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
