import React from 'react';
import StatusBadge from './StatusBadge';

const TableRow = ({ invoice, customer, from, price, status }) => {
    return (
        <tr className="">
      <td className='text-semibold '>{invoice}</td>
      <td >{customer}</td>
      <td >{from}</td>
      <td >{price}</td>
      <td className='text-center  '><StatusBadge status={status} /></td>
    </tr>
    );
};

export default TableRow;