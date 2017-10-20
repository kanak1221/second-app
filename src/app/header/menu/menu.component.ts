import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
adds=[{
  
"h_no":11-10,
"rname":"kk road",
"city":"ongole"  
},
{"h_no":121-12,
 "rname":"mm road",
 "city":"chirala"
},
{
  "h_no":1212-1,
  "rname":"dd road",
  "city":"dhdh"

}
]
birthday = new Date(1988, 3, 15); // April 15, 1988
toggle = true; // start with true == shortDate

get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
toggleFormat() { this.toggle = !this.toggle; }
}
