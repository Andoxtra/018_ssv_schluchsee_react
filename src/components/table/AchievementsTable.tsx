import {Table, type TableColumnsType} from "antd";
import type {ReactNode} from "react";

import tableTexts from "../../config/translations/tableTexts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle";
import {searchableFilter} from "./columnFilter.ts";

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
    const columns: TableColumnsType<AchievementsTableData> = [
        {
            title: achievementsTable.year,
            dataIndex: 'year',
            sorter: (a, b) => a.year - b.year,
        },
        {
            title: achievementsTable.shooter,
            dataIndex: 'shooter',
            ...searchableFilter(tableData, row => row.shooter),
        },
        {
            title: achievementsTable.category,
            dataIndex: 'category',
            ...searchableFilter(tableData, row => row.category),
        },
        {
            title: achievementsTable.discipline,
            dataIndex: 'discipline',
            ...searchableFilter(tableData, row => row.discipline),
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
