import {Table, type TableColumnsType} from "antd";
import type {ReactNode} from "react";

import type {DateClass} from "../../logic/date/DateClass";
import tableTexts from "../../config/translations/tableTexts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle";

import TableStyle from "../../style/components/table/TableStyle";

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

//Todo: Make that all texts from table are german and coming from a translation file

const NewsTable = ({tableData}: NewsTableProps): ReactNode => {
    const formattedTableData: NewsTableDataFormatted[] = tableData.map(entry => ({
        key: entry.key,
        title: entry.title,
        date: entry.date.getGermanDate(),
        author: entry.author,
        timestamp: entry.date.getUnixTimestamp()
    }));
    const uniqueAuthors = formattedTableData.map((formattedData) => {
        return formattedData.author;
    }).filter((author, index, self) => {
        return self.indexOf(author) === index;
    });
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
            filterMode: 'tree',
            filterSearch: true,
            filters: uniqueAuthors.map(author => ({
                text: author,
                value: author
            })),
            onFilter: (value, record) => record.author === value,
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
