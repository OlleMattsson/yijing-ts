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
exports.runHelperBenchmarks = exports.runYiJingTests = void 0;
const _1 = require(".");
const rng_ts_1 = require("rng-ts");
const UnicodeHex1 = "\u4DC0";
const UnicodeHex2 = "\u4DC1";
function runYiJingTests() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`\n ${UnicodeHex1} YiJing Tests ${UnicodeHex2} \n`);
        console.log(`.: Helper Unit Tests:.`);
        const fuxi = 11;
        const binaryHexagram = [0, 0, 1, 0, 1, 1];
        const rng = new rng_ts_1.RNG();
        const coins = (yield rng.get({ count: 4 }));
        console.log(`fuxiToBinaryLegacy(${fuxi}): `, _1.YiJing.fuxiToBinaryLegacy(fuxi));
        console.log(`fuxiToBinary(${fuxi}): `, _1.YiJing.fuxiToBinary(fuxi));
        console.log(`binaryToFuxi([${binaryHexagram}]): `, _1.YiJing.binaryToFuxi(binaryHexagram));
        console.log(`binaryToKingWen([${binaryHexagram}])`, _1.YiJing.binaryToKingWen(binaryHexagram));
        // make a line the new way
        const normalizedCoins = _1.YiJing.normalizeFourUintNumbers(coins);
        console.log(`normalizeFourUintNumbers(${coins}): ${normalizedCoins}`);
        const line = _1.YiJing.makeLine(normalizedCoins);
        console.log(`makeLine(${normalizedCoins}): ${line}`);
        /*
          The new Hexagram API
        */
        console.log(`\n.: Hexagram API Tests :.`);
        const hexagram = new _1.YiJing.Hexagram(); //{ provider: Provider.AnuQrng });
        yield hexagram.make();
        hexagram.makeFuture();
        console.log(`hexagram.getProvider()      ${hexagram.getProvider()}`);
        console.log(`hexagram.getRandomNumbers() ${hexagram.getRandomNumbers()}`);
        console.log(`hexagram.get():             ${hexagram.get()}`);
        console.log(`hexagram.getFuture():       ${hexagram.getFuture()}`);
        console.log(`hexagram.get(binary):       ${hexagram.get({ binary: true })}`);
        console.log(`hexagram.getFuture(binary): ${hexagram.getFuture({ binary: true })}`);
        console.log(`hexagram.getChanges():      ${hexagram.getChanges()}`);
    });
}
exports.runYiJingTests = runYiJingTests;
/*
  Some code for benchmarking different functions
*/
function runHelperBenchmarks() {
    const iterations = 10000;
    var start1 = window.performance.now();
    for (let i = 0; i < iterations; i++) {
        // function to benchmark
        _1.YiJing.fuxiToBinaryLegacy(11);
    }
    var end1 = window.performance.now();
    var time1 = end1 - start1;
    console.log("darkmagic ", time1);
    var start2 = window.performance.now();
    for (let i = 0; i < iterations; i++) {
        // function to benchmark
        _1.YiJing.fuxiToBinary(11);
    }
    var end2 = window.performance.now();
    var time2 = end2 - start2;
    console.log("new ", time2);
}
exports.runHelperBenchmarks = runHelperBenchmarks;
runYiJingTests();
