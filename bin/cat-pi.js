#!/usr/bin/env node
/**
 * Cat-Pi — wrapper that delegates to pi.
 * Same as running `pi`, but with Armory plugins pre-installed.
 */
import { main } from "@mariozechner/pi-coding-agent";
main(process.argv.slice(2));
