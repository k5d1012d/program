import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Острые козырбки',
      subject: 'Сериал',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Как избежать наказание за убийство',
      subject: 'Сериал',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Отбросы',
      subject: 'Сериал',
      date: '4:55 AM',
      id: 2,
      read: false
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
