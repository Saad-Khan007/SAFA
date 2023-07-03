import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/data.type';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent {
  searchList: undefined | Product[]
  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }
  ngOnInit(): void {
    let query = this.route.snapshot.paramMap.get('query');
    query && this.productService.searchList(query).subscribe((data) => {
      this.searchList = data;
      if (this.searchList.length === 0) {
        this.searchList = undefined;
      }
    })
  }
}
