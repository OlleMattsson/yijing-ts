import {TrueHexagram, BinaryHexagram, Fuxi, Kingwen}from "./types"
import {YiJing} from "."

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
        fuxi, 
        kingwen, 
        binarySequence, 
        lines
    } : {
        fuxi?: Fuxi, 
        kingwen?: Kingwen, 
        binarySequence?: BinaryHexagram, 
        lines?: TrueHexagram
    } = {}) {  

        this.validate(arguments[0])

        if (fuxi) {
            this.setFuxi(fuxi);
        }
        if (kingwen) {
            this.setKingwen(kingwen);
        }
        if (lines) {
            this.setLines(lines);
        }
        if (binarySequence) {
            this.setBinarySequence(binarySequence);
        }
    }

    private validate(args): void{
        if (Object.keys(args).length > 1) {
            throw new Error("Hexagram(): only one property allowed!")
        }

        if (
            !args.hasOwnProperty("fuxi") && 
            !args.hasOwnProperty("kingwen") && 
            !args.hasOwnProperty("binarySequence") && 
            !args.hasOwnProperty("lines") 
        ) {
            throw new Error(`Hexagram(): no property found or illegal property name`)
        }
    }
    
    /*
        Getters & Setters
    */

    public setFuxi(f: Fuxi): void {
        const [kingwen, lines, binarySequence] = YiJing.Convert.convertFuxi(f);
        this.fuxi = f;
        this.setKingwen(kingwen);
        this.setLines(lines);
        this.setBinarySequence(binarySequence);       
    }

    public getFuxi(): Fuxi {
        return this.fuxi;
    }

    public setKingwen(k: Kingwen): void {
        const [fuxi, lines, binarySequence] = YiJing.Convert.convertKingwen(k);

        // kingwen sequence (1 - 64) must fit inside the uint6 type (0-63)
        this.kingwen = k - 1 as Kingwen;
        this.setFuxi(fuxi);
        this.setLines(lines);
        this.setBinarySequence(binarySequence);
    }

    public getKingwen(): Kingwen {
        // See comment in getter =)
        return this.kingwen + 1 as Kingwen;
    }

    public setLines(l: TrueHexagram): void {
        const [ fuxi, kingwen, binary] = YiJing.Convert.convertLines(l);
        this.lines = l;
        this.setKingwen(kingwen);
        this.setBinarySequence(binary);
        this.setFuxi(fuxi);
    }

    public getLines():TrueHexagram {
        return this.lines;
    }

    public setBinarySequence(b: BinaryHexagram): void {
        this.binarySequence = b;
        const [kingwen, lines, fuxi] = YiJing.Convert.convertBinary(b);
        this.setKingwen(kingwen);
        this.setLines(lines);
        this.setFuxi(fuxi);   
    }

    public getBinarySequence(): BinaryHexagram {
        return this.binarySequence;
    }
}

export function testHexagram() {
    const hexagram = new Hexagram({kingwen: 1});
    hexagram.getBinarySequence();
}