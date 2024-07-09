import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './users.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    return this.select.emit(this.user.id);
  }
}
