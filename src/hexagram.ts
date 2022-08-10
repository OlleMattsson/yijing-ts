import {TrueHexagram, BinaryHexagram, Fuxi, Kingwen}from "./types"
import {fuxiToBinary} from "./fuxiToBinary"
import {YiJing} from "./"

interface HexagramInterface{
    setFuxi(fuxi: Fuxi): void
    getFuxi(): Fuxi
    setKingwen(kingwen: number): void
    getKingwen(): Kingwen
    setLines(lines: TrueHexagram): void
    getLines(): TrueHexagram
    setBinarySequence(binarySequece: BinaryHexagram): void
    getBinarySequence(): BinaryHexagram
}

export class Hexagram implements HexagramInterface {
    private fuxi: Fuxi = 0;
    private kingwen: Kingwen = 0;
    private lines: TrueHexagram = new Array(6) as TrueHexagram
    private binarySequence: BinaryHexagram = new Array(6) as BinaryHexagram

    constructor({
        fuxi = 0, 
        kingwen = 1, 
        binarySequence = new Array(6) as BinaryHexagram, 
        lines = new Array(6)  as TrueHexagram
    } : {
        fuxi?: Fuxi, 
        kingwen?: Kingwen, 
        binarySequence?: BinaryHexagram, 
        lines?: TrueHexagram
    } = {}) {
        this.setFuxi(fuxi),
        this.setKingwen(kingwen),
        this.setLines(lines),
        this.setBinarySequence(binarySequence)
    }

    /*
        Getters & Setters
    */

    public setFuxi(fuxi: Fuxi): void {
        this.fuxi = fuxi
        this.syncState({fuxi})
    }

    public getFuxi(): Fuxi {
        return this.fuxi
    }

    public setKingwen(kingwen: number): void {
        // We have to do so that the kingwen sequence (1 - 64) fits inside the uint6 type (0-63)
        this.kingwen = kingwen - 1 as Kingwen
        this.syncState({kingwen: this.kingwen})

    }

    public getKingwen(): Kingwen {
        return this.kingwen + 1 as Kingwen
    }

    public setLines(lines: TrueHexagram): void {
        this.lines = lines
        this.syncState({lines})

    }

    public getLines():TrueHexagram {
        return this.lines
    }

    public setBinarySequence(binarySequence: BinaryHexagram): void {
        this.binarySequence = binarySequence
        this.syncState({binarySequence})
    }

    public getBinarySequence(): BinaryHexagram {
        return this.binarySequence
    }

    /*
        Fuxi converters
    */
    private fuxiToKingWen(): Kingwen {
        return 0
    }

    private fuxiToBinary(): BinaryHexagram {
        return fuxiToBinary(this.fuxi)
    }

    private fuxiToLines(): TrueHexagram {
        return new Array(6) as TrueHexagram
    }

    /*
        Kingwen converters
    */
    private kingwenToFuxi(): Fuxi {}
    private kingwenToBinary(): BinaryHexagram {}
    private kingwenToLines(): TrueHexagram {}

    /*
        Binary converters
    */
    private binaryToFuxi():Fuxi {
        return YiJing.binaryToFuxi(this.binarySequnce)
    }
    private binaryToKingwen(): Kingwen {
        return YiJing.binaryToKingWen(this.binarySequnce)
    }
    private binaryToLines(): TrueHexagram {}

   
    /*
        Line converters
    */     
    private linesToFuxi(): Fuxi {}
    private linesToKingwen(): Kingwen {}
    private linesToBinary(): BinaryHexagram {
        return YiJing.hexagramToBinaryHexagram(this.lines)
    }   

    private syncState({
        fuxi, 
        kingwen, 
        binarySequence, 
        lines
    } : {
        fuxi?: Fuxi, 
        kingwen?: Kingwen, 
        binarySequence?: BinaryHexagram, 
        lines?: TrueHexagram
    }): void {
     
        if ( fuxi ) {
            this.setFuxi(fuxi)
            this.setKingwen(this.fuxiToKingWen())
            this.setBinarySequence(this.fuxiToBinary())
            this.setLines(this.fuxiToLines())
            return
        }

        if ( kingwen ) {
            this.setKingwen(kingwen)
            this.setFuxi(this.kingwenToFuxi())
            this.setBinarySequence(this.fuxiToBinary())
            this.setLines(this.fuxiToLines())
            return
        }

        if (binarySequence) {
            this.setBinarySequence(binarySequence)
            this.setFuxi(this.binaryToFuxi())
            this.setKingwen(this.binaryToKingwen())
            this.setLines(this.binaryToLines())            
            return
        }

        if (lines) {
            this.setLines(lines)            
            this.setFuxi(this.linesToFuxi())
            this.setKingwen(this.linesToKingwen())
            this.setBinarySequence(this.linesToBinary())
            return            
        }

        throw new Error ("nothing to sync...")

    }

}

export function testHexagram() {
    const hexagram = new Hexagram({kingwen: 1})
    hexagram.getBinarySequence()
}