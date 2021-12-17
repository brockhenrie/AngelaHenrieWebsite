import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageTitle = 'Angela Henrie - Home';
  backgroundImage = 'https://firebasestorage.googleapis.com/v0/b/angela-henrie.appspot.com/o/angela.jpg?alt=media&token=5fe77a07-1a39-4a85-915c-a9eb57918860'

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }

}
