import {Table, type TableColumnsType} from "antd";
import type {ReactNode} from "react";

import type {DateClass} from "../../logic/date/DateClass";
import tableTexts from "../../config/translations/tableTexts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle";

import TableStyle from "../../style/components/table/TableStyle";
import {searchableFilter} from "./columnFilter.ts";

const {newsTable} = tableTexts;

const {
    TableStyleS,
    TableStyleM,
    TableStyleL,
    TableStyleE
} = TableStyle;

type NewsTableData = {
    key: number;
    title: string;
    date: DateClass;
    author: string;
};

type NewsTableDataFormatted = {
    key: number;
    title: string;
    date: string;
    author: string;
    timestamp: number;
};

export type NewsTableProps = {
    tableData: NewsTableData[];
};

const NewsTable = ({tableData}: NewsTableProps): ReactNode => {
    const formattedTableData: NewsTableDataFormatted[] = tableData.map(entry => ({
        key: entry.key,
        title: entry.title,
        date: entry.date.getGermanDate(),
        author: entry.author,
        timestamp: entry.date.getUnixTimestamp()
    }));
    const columns: TableColumnsType<NewsTableDataFormatted> = [
        {
            title: newsTable.title,
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: newsTable.date,
            dataIndex: 'date',
            sorter: (a, b) => a.timestamp - b.timestamp
        },
        {
            title: newsTable.author,
            dataIndex: 'author',
            ...searchableFilter(formattedTableData, row => row.author),
        }
    ];

    return (
        <Table<NewsTableDataFormatted>
            style={getDynamicStyle(
                TableStyleS,
                TableStyleM,
                TableStyleL,
                TableStyleE
            )}
            columns={columns}
            dataSource={formattedTableData}
        />
    );
};

export default NewsTable;
