import { TestBed, inject } from '@angular/core/testing';

import { DatacourseService } from './datacourse.service';

describe('DatacourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatacourseService]
    });
  });

  it('should be created', inject([DatacourseService], (service: DatacourseService) => {
    expect(service).toBeTruthy();
  }));
});
