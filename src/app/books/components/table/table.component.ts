import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { IBook } from '../../interfaces/books';

@Component({
  selector: 'book-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableComponent implements OnInit {

  @Input() books!: IBook[]
  @Input() columnsToDisplay: any[] = []
  @Input() expandedElement: any
  @Input() columnsToDisplayWithExpand: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
