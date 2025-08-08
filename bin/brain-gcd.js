#!/usr/bin/env node

import gameEngine from '../src/lib/engine.js'
import { rules, generateLvl } from '../src/games/gcd.js'

gameEngine(rules, generateLvl)
