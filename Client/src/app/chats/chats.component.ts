import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  chats:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.chats = [
      {id: 'john', name: 'John Doe', avatarUrl: 'assets/vishal.jpg',pendingMessages:4, lastMessage: 'Hello there!', time: new Date(-1) },
      {id: 'tom', name: 'Tommy Smith', avatarUrl: 'assets/vishal.jpg',pendingMessages: 10, lastMessage: 'How are you?', time: new Date(20) },
      {id: 'alice', name: 'Alice Johnson', avatarUrl: 'assets/vishal.jpg',pendingMessages:0, lastMessage: 'Nice to meet you!', time: new Date() },
    ];
  }

  openChatWindow(chat: any) {
    this.router.navigate(['/chat', chat.id]);
  }

}
