import { IPosition } from './table-top';
export declare const enum Directions {
    'NORTH' = 0,
    'EAST' = 1,
    'SOUTH' = 2,
    'WEST' = 3,
}
export interface IRobotOptions {
    position: IPosition;
    direction: Directions;
}
export default class Robot {
    name: string;
    direction: Directions;
    private position;
    constructor(options: IRobotOptions);
    turnLeft(): Directions;
    turnRight(): Directions;
    move(): boolean;
    toString(): string;
}
