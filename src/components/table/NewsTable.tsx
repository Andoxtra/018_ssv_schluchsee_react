import { Table } from 'antd';
import type { ReactNode } from "react";
import type { DateClass } from "../../logic/date/DateClass.ts";
import type { ColumnsType } from "antd/es/table";
import tableTexts from "../../config/translations/tableTexts.ts";

const { newsTable } = tableTexts;

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

const NewsTable = ({ tableData }: NewsTableProps): ReactNode => {

    const formattedTableData: NewsTableDataFormatted[] = tableData.map(entry => ({
        key: entry.key,
        title: entry.title,
        date: entry.date.getGermanDate(),
        author: entry.author,
        timestamp: entry.date.getUnixTimestamp()
    }));

    const uniqueAuthors = [...new Set(tableData.map(entry => entry.author))];

    const columns: ColumnsType<NewsTableDataFormatted> = [
        {
            title: newsTable.title,
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: newsTable.date,
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => a.timestamp - b.timestamp,
            sortDirections: ['ascend', 'descend'],
        },
        {
            title: newsTable.author,
            dataIndex: 'author',
            key: 'author',
            filters: uniqueAuthors.map(author => ({
                text: author,
                value: author
            })),
            onFilter: (value, record) => record.author === value,
        }
    ];

    return (
        <Table
            dataSource={formattedTableData}
            columns={columns}
        />
    );
};

export default NewsTable;
