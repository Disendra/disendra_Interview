import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from './item.module';
import { ItemService } from '../item-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private itemService: ItemService) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = +idString;
      this.itemService.getItem(id).subscribe(item => {
        this.item = item;
      });
    } else {
      // Handle the case where id is null (e.g., show an error message)
    }
  }
}