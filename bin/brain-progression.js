#!/usr/bin/env node

import gameEngine from '../src/lib/engine.js'
import { rules, generateLvl } from '../src/games/progression.js'

gameEngine(rules, generateLvl)
