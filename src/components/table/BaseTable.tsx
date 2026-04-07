// Documentation https://ant.design/components/table

import {Table} from 'antd';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const BaseTable = ({tableData, columnData}): ReactNode => {
    return (
        <Table dataSource={tableData} columns={columnData}></Table>
    );
};

export default BaseTable;