import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  page = input.required<number>();
  pages = input.required<number>();
  pageChangeEmitter = output<number>();

  goTo(page: number) {
    this.pageChangeEmitter.emit(page);
  }
}
