import { fill } from 'lodash';

export interface IPosition {
  x: number;
  y: number;
}

export default class Table {

    public content: Number[][];

    constructor(public width: number = 5, public height: number = width) {
        this.content = fill(Array(height), fill(Array(width), 0));
    }
// isBorder function isn't doing it's job, will need to come up with my own solution.
// What is it spose to be doing? Will need to read instructions
    public isBorder(pos: IPosition): boolean {
         return (pos.x === 0)
         || (pos.x === this.width - 1)
         || (pos.y === 0)
         || (pos.y === this.height - 1);
    }
}