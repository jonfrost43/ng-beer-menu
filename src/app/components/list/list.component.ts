import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list',
    template: `
        <div>
            <p *ngFor="let item of items">{{item}}</p>
        </div>
    `,
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    @Input() items;

    constructor() { }

    ngOnInit() {
    }

}
