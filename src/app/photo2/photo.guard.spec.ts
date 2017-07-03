import { TestBed, async, inject } from '@angular/core/testing';

import { PhotoGuard } from './photo.guard';

describe('PhotoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoGuard]
    });
  });

  it('should ...', inject([PhotoGuard], (guard: PhotoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
