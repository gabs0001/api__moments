import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  message: string = '';
  
  constructor() { }

  add(message:string): void {
    this.message = message
    setTimeout(() => { this.clear() }, 4000)
  }

  clear(): void {
    this.message = ''
  }
}
