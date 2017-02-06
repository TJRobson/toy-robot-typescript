export interface IPosition {
    x: number;
    y: number;
}
export default class Table {
    width: number;
    height: number;
    content: Number[][];
    constructor(width?: number, height?: number);
    isBorder(pos: IPosition): boolean;
}
