import { RowID, RowElement } from './interface';

eclare module 'crud' {
export function insertRow(row: RowElement): number;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): number;
}
