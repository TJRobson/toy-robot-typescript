import Table from './table-top';
export default class Command {
    private robot;
    private table;
    constructor(table: Table);
    execute(command: string): void;
}
