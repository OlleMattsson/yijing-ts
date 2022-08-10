"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexagram = void 0;
const rng_ts_1 = require("rng-ts");
const _1 = require(".");
class Hexagram {
    constructor({ provider = rng_ts_1.Provider.MathRand } = {}) {
        this.randomNumbers = null;
        this.hexagram = null;
        this.futureHexagram = null;
        this.rngProvider = provider;
    }
    make() {
        return __awaiter(this, void 0, void 0, function* () {
            const rng = new rng_ts_1.RNG({ provider: this.rngProvider });
            // optimization: fetch a larger batch of random numbers
            // 4 numbers are needed per line, 6 lines are needed for the hexagram,
            // ie 24 random numbers in total
            this.randomNumbers = (yield rng.get({ count: 24 }));
            const hexagram = new Array(6);
            for (var i = 0; i < 6; i++) {
                const coins = this.randomNumbers.slice(i * 4, i * 4 + 4); // pick next 4 numbers from our set of 24
                const normalizedCoins = _1.YiJing.normalizeFourUintNumbers(coins);
                hexagram[i] = _1.YiJing.makeLine(normalizedCoins);
            }
            this.hexagram = hexagram;
        });
    }
    makeFuture() {
        return __awaiter(this, void 0, void 0, function* () {
            const { hexagram } = this;
            if (hexagram === null) {
                throw "make() must be called at least once before makeFuture()";
            }
            const futureHexagram = new Array(6);
            for (var i = hexagram.length - 1; i >= 0; i--) {
                switch (hexagram[i]) {
                    // changing yin
                    case 0:
                        futureHexagram[i] = 4; // becomes yang
                        break;
                    // changing yang
                    case 1:
                    case 2:
                    case 3:
                        futureHexagram[i] = 9; // becomes yin
                        break;
                    default:
                        futureHexagram[i] = hexagram[i];
                        break;
                }
            }
            this.futureHexagram = futureHexagram;
        });
    }
    get({ binary = false } = {}) {
        if (this.hexagram === null) {
            throw "no hexgram exists, call make() first ";
        }
        if (binary) {
            return _1.YiJing.hexagramToBinaryHexagram(this.hexagram);
        }
        return this.hexagram;
    }
    getFuture({ binary = false } = {}) {
        if (this.futureHexagram === null) {
            throw "no future hexagram exists, call makeFuture() first ";
        }
        if (binary) {
            return _1.YiJing.hexagramToBinaryHexagram(this.futureHexagram);
        }
        return this.futureHexagram;
    }
    getChanges() {
        if (this.hexagram === null || this.futureHexagram === null) {
            throw "make() and makeFuture() must be called at least once before getChanges()";
        }
        return this.hexagram.map((hexagramLine, i) => {
            var _a;
            const futureLine = (_a = this.futureHexagram) === null || _a === void 0 ? void 0 : _a[i];
            if (hexagramLine === futureLine) {
                return false;
            }
            else {
                return true;
            }
        });
    }
    getRandomNumbers() {
        return this.randomNumbers;
    }
    getProvider() {
        return this.rngProvider;
    }
}
exports.Hexagram = Hexagram;
