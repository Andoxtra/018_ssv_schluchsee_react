// Documentation https://ant.design/components/table

import {Table} from 'antd';
import type {ReactNode} from "react";
import type {DateClass} from "../../logic/date/DateClass.ts";
import type {ColumnsType} from "antd/es/table";
import tableTexts from "../../config/translations/tableTexts.ts";
import TableStyle from "../../style/components/table/TableStyle";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle.ts";

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
//ToDo: Update Table
//ToDo: Add all possible tables which are needed so that the props can be defined and only data has to be added
const RecordTable = ({tableData}: RecordTableProps): ReactNode => {
    const formattedTableData: RecordTableDataFormatted[] = tableData.map(record => ({
        discipline: record.discipline,
        points: record.points,
        date: record.date.getGermanDate(),
        shooter: record.shooter,
        timestamp: record.date.getUnixTimestamp()
    }));

    const uniqueDisciplines = formattedTableData.map((formattedData) => {
        return formattedData.discipline;
    }).filter((discipline, index, self) => {
        return self.indexOf(discipline) === index;
    });

    const uniqueShooter = formattedTableData.map((formattedData) => {
        return formattedData.shooter;
    }).filter((shooter, index, self) => {
        return self.indexOf(shooter) === index;
    });

    const columns: ColumnsType<RecordTableDataFormatted> = [
        {
            title: recordTable.discipline,
            dataIndex: 'discipline',
            filterMode: 'tree',
            filterSearch: true,
            filters: uniqueDisciplines.map(discipline => ({
                text: discipline,
                value: discipline
            })),
            onFilter: (value, record) => record.discipline === value,
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
            filterMode: 'tree',
            filterSearch: true,
            filters: uniqueShooter.map(shooter => ({
                text: shooter,
                value: shooter
            })),
            onFilter: (value, record) => record.shooter === value,
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
        />
    );
};

export default RecordTable;