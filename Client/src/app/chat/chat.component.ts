import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatId: string;

  chatMessages: any[] = [
    { sender: 'User1', content: 'Hello!', timestamp: new Date() },
    { sender: 'User2', content: 'Hi there!', timestamp: new Date() },
    // Add more chat messages as needed
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.chatId = params.id;
    });
  }

}
