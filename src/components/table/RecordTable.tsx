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
    {title: recordTable.discipline, dataIndex: 'discipline'},
    {title: recordTable.points, dataIndex: 'points'},
    {title: recordTable.date, dataIndex: 'date'},
    {title: recordTable.shooter, dataIndex: 'shooter'}
];
//ToDo: Update Table
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