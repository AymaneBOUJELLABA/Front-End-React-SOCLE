import { Alert, Table } from 'antd';
import React from 'react';

function TableData(props)
{
    return (
        <>
            {props.array[0] && 
            <Table
                size="small" 
                columns={props.columns}
                dataSource={props.array}
                pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['5', '10', '15']}}
                />
            }
            {props.array.error &&
            <Alert
                message={props.array.status + ' - ' + props.array.error}
                description={props.array.message}
                type="error"
                showIcon
                />
            }
        </>  
    );
}

export default TableData;