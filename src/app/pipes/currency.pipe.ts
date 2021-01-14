import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})
export class CurrencyPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(item => {
            return item.currency.toLowerCase().includes(searchText);
        });
    }
}
