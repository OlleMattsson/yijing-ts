import {TrueHexagram, BinaryHexagram, Fuxi, Kingwen}from "./types"
import {YiJing} from "."

interface HexagramInterface{
    setFuxi(fuxi: Fuxi, halt: boolean): void;
    getFuxi(): Fuxi;
    setKingwen(kingwen: number, halt: boolean): void;
    getKingwen(): Kingwen;
    setLines(lines: TrueHexagram, halt: boolean): void;
    getLines(): TrueHexagram;
    setBinarySequence(binarySequece: BinaryHexagram, halt: boolean): void;
    getBinarySequence(): BinaryHexagram;
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

        this.validate(arguments[0]);

        if (fuxi) {
            this.setFuxi(fuxi, false);
        }
        if (kingwen) {
            this.setKingwen(kingwen, false);
        }
        if (lines) {
            this.setLines(lines, false);
        }
        if (binarySequence) {
            this.setBinarySequence(binarySequence, false);
        }
    }

    private validate(args): void{
        if (Object.keys(args).length > 1) {
            throw new Error("Hexagram(): only one property allowed!");
        }

        if (
            !args.hasOwnProperty("fuxi") && 
            !args.hasOwnProperty("kingwen") && 
            !args.hasOwnProperty("binarySequence") && 
            !args.hasOwnProperty("lines") 
        ) {
            throw new Error(`Hexagram(): no property found or illegal property name`);
        }
    }
    
    public setFuxi(f: Fuxi, halt: boolean = true): void {
        this.fuxi = f;
        if (!halt) {
            const [kingwen, lines, binarySequence] = YiJing.Convert.convertFromFuxi(f);
            this.setKingwen(kingwen);
            this.setLines(lines);
            this.setBinarySequence(binarySequence);       
        }
    }

    public getFuxi(): Fuxi {
        return this.fuxi;
    }

    public setKingwen(k: Kingwen, halt: boolean = true): void {
        
        // kingwen sequence (1 - 64) must fit inside the uint6 type (0-63)
        this.kingwen = k - 1 as Kingwen;
        if (!halt) {
            const [fuxi, lines, binarySequence] = YiJing.Convert.convertFromKingwen(k);
            this.setFuxi(fuxi);
            this.setLines(lines);
            this.setBinarySequence(binarySequence);
        }
    }

    public getKingwen(): Kingwen {
        // See comment in getter =)
        return this.kingwen + 1 as Kingwen;
    }

    public setLines(l: TrueHexagram, halt: boolean = true): void {
        this.lines = l;
        if (!halt) {
            const [ fuxi, kingwen, binary] = YiJing.Convert.convertFromLines(l);
            this.setKingwen(kingwen);
            this.setBinarySequence(binary);
            this.setFuxi(fuxi);
        }
    }

    public getLines():TrueHexagram {
        return this.lines;
    }

    public setBinarySequence(b: BinaryHexagram, halt: boolean = true): void {
        this.binarySequence = b;
        if (!halt) {
            const [kingwen, lines, fuxi] = YiJing.Convert.convertFromBinary(b);
            this.setKingwen(kingwen);
            this.setLines(lines);
            this.setFuxi(fuxi);   
        }
    }

    public getBinarySequence(): BinaryHexagram {
        return this.binarySequence;
    }
}