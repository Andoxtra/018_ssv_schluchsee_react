import {Table, type TableColumnsType} from "antd";
import type {ReactNode} from "react";
import ArrowLink from "../links/ArrowLink.tsx";

import tableTexts from "../../config/translations/tableTexts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle";
import {searchableFilter} from "./columnFilter.ts";

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
    const columns: TableColumnsType<RWKTableData> = [
        {
            title: rwkTable.competition,
            dataIndex: 'wettkampf',
            ...searchableFilter(tableData, row => row.wettkampf),
        },
        {
            title: rwkTable.season,
            dataIndex: 'saison',
            sorter: (a, b) => a.saison.localeCompare(b.saison),
            ...searchableFilter(tableData, row => row.saison),
        },
        {
            title: rwkTable.results,
            dataIndex: 'url',
            render: (url?: string) => url
                ? <ArrowLink href={url} target="_blank">Ergebnisse</ArrowLink>
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
