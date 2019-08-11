import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-spellbook',
  templateUrl: './spellbook.component.html',
  styleUrls: ['./spellbook.component.less']
})
export class SpellbookComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('508 Spellbook | Witch of WCAG');
  }

}
