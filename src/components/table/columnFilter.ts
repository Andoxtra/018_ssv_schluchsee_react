import type {TableColumnType} from "antd";

export type SearchableFilter<T> = Pick<TableColumnType<T>, "filters" | "filterSearch" | "onFilter">;

export const uniqueValues = <T,>(rows: T[], field: (row: T) => string): string[] =>
    [...new Set(rows.map(field))];

// Uses antd's default menu mode on purpose: there the filter search hides
// non-matching entries, while `filterMode: 'tree'` only highlights matches.
export const searchableFilter = <T,>(rows: T[], field: (row: T) => string): SearchableFilter<T> => ({
    filterSearch: true,
    filters: uniqueValues(rows, field).map(value => ({text: value, value})),
    onFilter: (value, record) => field(record) === value,
});
