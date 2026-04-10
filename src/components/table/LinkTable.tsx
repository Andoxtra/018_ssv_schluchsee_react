import {Table, type TableColumnsType} from "antd";
import type {ReactNode} from "react";

import tableTexts from "../../config/translations/tableTexts";
import getDynamicStyle from "../../logic/dynamicStyling/getDynamicStyle";

import TableStyle from "../../style/components/table/TableStyle";

const {linkTable} = tableTexts;

const {
    TableStyleS,
    TableStyleM,
    TableStyleL,
    TableStyleE
} = TableStyle;

type LinkTableData = {
    key: number;
    title: string;
    link: string;
};

export type LinkTableProps = {
    tableData: LinkTableData[];
};

const LinkTable = ({tableData}: LinkTableProps): ReactNode => {
    const columns: TableColumnsType<LinkTableData> = [
        {
            title: linkTable.title,
            dataIndex: 'title',
            key: 'title'
        }
    ];

    return (
        <Table<LinkTableData>
            style={getDynamicStyle(
                TableStyleS,
                TableStyleM,
                TableStyleL,
                TableStyleE
            )}
            columns={columns}
            dataSource={tableData}
            locale={tableTexts.tableLocale}
        />
    );
};

export default LinkTable;
