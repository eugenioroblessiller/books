import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input() title!: string
  @Input() message!: string
  @Input() smallMessage: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
