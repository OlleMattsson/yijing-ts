import { TrueHexagram, BinaryHexagram, uint8 } from "./types";
import { Provider } from "rng-ts";
export interface HexagramInterface {
    make(): Promise<void>;
    makeFuture(): Promise<void>;
    get({ binary }: {
        binary?: boolean;
    }): TrueHexagram | BinaryHexagram;
    getFuture({ binary }: {
        binary?: boolean;
    }): TrueHexagram | BinaryHexagram;
    getChanges(): boolean[];
    getRandomNumbers(): uint8[] | null;
    getProvider(): Provider;
}
export declare class Hexagram implements HexagramInterface {
    private randomNumbers;
    private hexagram;
    private futureHexagram;
    private rngProvider;
    constructor({ provider }?: {
        provider?: Provider;
    });
    make(): Promise<void>;
    makeFuture(): Promise<void>;
    get({ binary }?: {
        binary?: boolean;
    }): TrueHexagram;
    getFuture({ binary }?: {
        binary?: boolean;
    }): TrueHexagram;
    getChanges(): boolean[];
    getRandomNumbers(): uint8[] | null;
    getProvider(): Provider;
}
