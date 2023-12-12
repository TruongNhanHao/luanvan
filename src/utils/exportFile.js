import * as XLSX from 'xlsx';
import React from 'react';

export class ExcelExportButton extends React.Component {
  exportToExcel = () => {
    const { tableId, filename } = this.props;
    const table = document.getElementById(tableId);

    if (table) {
      const ws = XLSX.utils.table_to_sheet(table);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      XLSX.writeFile(wb, `${filename}.xlsx`);
    }
  };

  render() {
    return (
      <button onClick={this.exportToExcel}>Xuất danh sách</button>
    );
  }
}