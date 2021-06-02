import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private apiService: ApiService) {}
  startGame() {
    this.apiService.createGame().subscribe(location => {
      this.router.navigateByUrl(location);
    });
  }
}
