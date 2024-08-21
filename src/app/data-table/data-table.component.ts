import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: [DataService]
})
export class DataTableComponent implements OnInit {
  columnDefs = [
    { field: 'H1', headerName: 'H1' },
    { field: 'H2', headerName: 'H2' },
    { field: 'H3', headerName: 'H3' },
    { field: 'H4', headerName: 'H4' },
    { field: 'H5', headerName: 'H5' },
    { field: 'H6', headerName: 'H6' },
    { field: 'processed_flag', headerName: 'Processed' }
  ];

  rowData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      console.log(data);  // Log the data to see if it's being fetched correctly
      this.rowData = data;
    });
  }
  
}
