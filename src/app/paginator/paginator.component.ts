import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent {
  @Input()
  pageNumber = 1;

  @Input()
  totalPages = 1;

  @Output()
  pageChange = new EventEmitter<number>();
}
