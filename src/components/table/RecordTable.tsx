// Documentation https://ant.design/components/table

import {Table} from 'antd';
import type {ReactNode} from "react";
import type {DateClass} from "../../logic/date/DateClass.ts";
import type {ColumnsType} from "antd/es/table";
import tableTexts from "../../config/translations/tableTexts.ts";
import TableStyle from "../../style/components/table/TableStyle";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";
import {searchableFilter} from "./columnFilter.ts";

const {
    recordTable
} = tableTexts;

const {
    TableStyleS,
    TableStyleM,
    TableStyleL,
    TableStyleE
} = TableStyle;


type RecordTableData = {
    key: number;
    discipline: string;
    points: number;
    date: DateClass;
    shooter: string;
}

type RecordTableDataFormatted = {
    discipline: string;
    points: number;
    date: string;
    shooter: string;
    timestamp: number;
}

export type RecordTableProps = {
    tableData: RecordTableData[];
}
const RecordTable = ({tableData}: RecordTableProps): ReactNode => {
    const formattedTableData: RecordTableDataFormatted[] = tableData.map(record => ({
        discipline: record.discipline,
        points: record.points,
        date: record.date.getGermanDate(),
        shooter: record.shooter,
        timestamp: record.date.getUnixTimestamp()
    }));

    const columns: ColumnsType<RecordTableDataFormatted> = [
        {
            title: recordTable.discipline,
            dataIndex: 'discipline',
            ...searchableFilter(formattedTableData, row => row.discipline),
        },
        {
            title: recordTable.points,
            dataIndex: 'points',
            sorter: (a, b) => a.points - b.points,
        },
        {
            title: recordTable.date,
            dataIndex: 'date',
            sorter: (a, b) => a.timestamp - b.timestamp
        },
        {
            title: recordTable.shooter,
            dataIndex: 'shooter',
            ...searchableFilter(formattedTableData, row => row.shooter),
        }
    ];

    return (
        <Table<RecordTableDataFormatted>
            style={getDynamicStyle(
                TableStyleS,
                TableStyleM,
                TableStyleL,
                TableStyleE
            )}
            columns={columns}
            dataSource={formattedTableData}
            scroll={{x: "max-content"}}
            pagination={false}
        />
    );
};

export default RecordTable;