import { Injectable } from '@angular/core';

@Injectable()
export class PaginatorService {

  constructor() { }
  slide(index, offset, total) {
    const pr: any = document.querySelector( '.paginate.left' );
    const pl: any = document.querySelector( '.paginate.right' );

    index = Math.min( Math.max( index + offset, 0 ), total - 1 );
    pr.onclick = this.slide.bind( this, index, -1, total );
    pl.onclick = this.slide.bind( this, index, 1, total );

    document.querySelector( '.counter' ).innerHTML = ( index + 1) + ' / ' + total;

    pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
    pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
  }
}
