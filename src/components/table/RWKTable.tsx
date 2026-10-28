import {Table, type TableColumnsType} from "antd";
import type {ReactNode} from "react";
import AppLink from "../links/AppLink.tsx";

import tableTexts from "../../config/translations/tableTexts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle";

import TableStyle from "../../style/components/table/TableStyle";

const {rwkTable} = tableTexts;

const {
    TableStyleS,
    TableStyleM,
    TableStyleL,
    TableStyleE
} = TableStyle;

type RWKTableData = {
    key: number;
    wettkampf: string;
    saison: string;
    url?: string;
};

export type RWKTableProps = {
    tableData: RWKTableData[];
};

const RWKTable = ({tableData}: RWKTableProps): ReactNode => {
    const uniqueValues = (field: (row: RWKTableData) => string) =>
        tableData.map(field).filter((value, index, self) => self.indexOf(value) === index);

    const columns: TableColumnsType<RWKTableData> = [
        {
            title: rwkTable.competition,
            dataIndex: 'wettkampf',
            filterMode: 'tree',
            filterSearch: true,
            filters: uniqueValues(row => row.wettkampf).map(value => ({text: value, value})),
            onFilter: (value, record) => record.wettkampf === value,
        },
        {
            title: rwkTable.season,
            dataIndex: 'saison',
            sorter: (a, b) => a.saison.localeCompare(b.saison),
            filterMode: 'tree',
            filterSearch: true,
            filters: uniqueValues(row => row.saison).map(value => ({text: value, value})),
            onFilter: (value, record) => record.saison === value,
        },
        {
            title: rwkTable.results,
            dataIndex: 'url',
            render: (url?: string) => url
                ? <AppLink href={url} target="_blank">Ergebnisse →</AppLink>
                : <span>–</span>,
        }
    ];

    return (
        <Table<RWKTableData>
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

export default RWKTable;
