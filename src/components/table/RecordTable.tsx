// Documentation https://ant.design/components/table

import {Table} from 'antd';
import type {ReactNode} from "react";
import type {DateClass} from "../../logic/date/DateClass.ts";
import type {ColumnsType} from "antd/es/table";
import tableTexts from "../../config/translations/tableTexts.ts";

const {
    recordTable
} = tableTexts;

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
}

export type RecordTableProps = {
    tableData: RecordTableData[];
}

const columnData: ColumnsType<RecordTableDataFormatted> = [
    {title: recordTable.discipline, dataIndex: 'discipline', key: 'discipline'},
    {title: recordTable.points, dataIndex: 'points', key: 'points'},
    {title: recordTable.date, dataIndex: 'date', key: 'date'},
    {title: recordTable.shooter, dataIndex: 'shooter', key: 'shooter'}
];

//ToDo: Add all possible tables which are needed so that the props can be defined and only data has to be added
const RecordTable = ({tableData}: RecordTableProps): ReactNode => {
    const formattedTableData: RecordTableDataFormatted[] = tableData.map(record => ({
        discipline: record.discipline,
        points: record.points,
        date: record.date.getGermanDate(),
        shooter: record.shooter
    }));

    return (
        <Table dataSource={formattedTableData} columns={columnData}></Table>
    );
};

export default RecordTable;