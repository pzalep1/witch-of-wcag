import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Contact Us | Witch of WCAG');
  }

}
