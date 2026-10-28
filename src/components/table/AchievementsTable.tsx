import {Table, type TableColumnsType} from "antd";
import type {ReactNode} from "react";

import tableTexts from "../../config/translations/tableTexts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle";

import TableStyle from "../../style/components/table/TableStyle";

const {achievementsTable} = tableTexts;

const {
    TableStyleS,
    TableStyleM,
    TableStyleL,
    TableStyleE
} = TableStyle;

type AchievementsTableData = {
    key: number;
    year: number;
    shooter: string;
    category: string;
    discipline: string;
    place: string;
};

export type AchievementsTableProps = {
    tableData: AchievementsTableData[];
};

const placeRank = (place: string): number => {
    const match = place.match(/\d+/);
    return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
};

const AchievementsTable = ({tableData}: AchievementsTableProps): ReactNode => {
    const uniqueValues = (field: (row: AchievementsTableData) => string) =>
        tableData.map(field).filter((value, index, self) => self.indexOf(value) === index);

    const filterable = (field: (row: AchievementsTableData) => string) =>
        uniqueValues(field).map(value => ({text: value, value}));

    const columns: TableColumnsType<AchievementsTableData> = [
        {
            title: achievementsTable.year,
            dataIndex: 'year',
            sorter: (a, b) => a.year - b.year,
        },
        {
            title: achievementsTable.shooter,
            dataIndex: 'shooter',
            filterMode: 'tree',
            filterSearch: true,
            filters: filterable(row => row.shooter),
            onFilter: (value, record) => record.shooter === value,
        },
        {
            title: achievementsTable.category,
            dataIndex: 'category',
            filterMode: 'tree',
            filterSearch: true,
            filters: filterable(row => row.category),
            onFilter: (value, record) => record.category === value,
        },
        {
            title: achievementsTable.discipline,
            dataIndex: 'discipline',
            filterMode: 'tree',
            filterSearch: true,
            filters: filterable(row => row.discipline),
            onFilter: (value, record) => record.discipline === value,
        },
        {
            title: achievementsTable.place,
            dataIndex: 'place',
            sorter: (a, b) => placeRank(a.place) - placeRank(b.place),
        }
    ];

    return (
        <Table<AchievementsTableData>
            style={getDynamicStyle(
                TableStyleS,
                TableStyleM,
                TableStyleL,
                TableStyleE
            )}
            columns={columns}
            dataSource={tableData}
            scroll={{x: "max-content"}}
            pagination={false}
        />
    );
};

export default AchievementsTable;
