import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public board;
  private boardId;
  message = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private notifier: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.apiService.getGame(params.id).subscribe((res: any) => {
        console.log(res);
        this.boardId = res.id;
        this.board = res.board;
        this.checkGameStatus(res);
      }),
        (err) => {
          this.notifier.error(err.error.reason);
        };
    });
  }

  private checkGameStatus(data) {
    switch (data.status) {
      case 'X_WON':
        this.message = 'You Won';
        break;
      case 'O_WON':
        this.message = 'Computer Won';
        break;
      case 'DRAW':
        this.message = 'Game Drawn';
        break;
    }
  }

  updateBoard(index) {
    this.apiService.placeMark(this.boardId, this.board, index).subscribe(
      (res: any) => {
        console.log(res);
        this.boardId = res.id;
        this.board = res.board;
        this.checkGameStatus(res);
      },
      (err) => {
        this.notifier.error(err.error.reason);
      }
    );
  }

  deleteGame() {
    this.apiService.deleteGame(this.boardId).subscribe(
      () => {
        this.router.navigateByUrl('/');
        this.notifier.success('Game Deleted Successfully');
      },
      (err) => {
        this.notifier.error(err.error.reason);
      }
    );
  }
}
