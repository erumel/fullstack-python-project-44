#!/usr/bin/env node

import gameEngine from '../src/lib/engine.js'
import { rule, generateLvl } from '../src/games/even.js'

gameEngine(rule, generateLvl)
