import { Component, OnInit } from '@angular/core';import { ItemService } from '../item-service.service';
import { Item } from '../detail-component/item.module';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items: Item[]) => {
      this.items = items;
    });
  }
}
