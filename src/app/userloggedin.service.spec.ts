import { TestBed, inject } from '@angular/core/testing';

import { UserloggedinService } from './userloggedin.service';

describe('UserloggedinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserloggedinService]
    });
  });

  it('should be created', inject([UserloggedinService], (service: UserloggedinService) => {
    expect(service).toBeTruthy();
  }));
});
