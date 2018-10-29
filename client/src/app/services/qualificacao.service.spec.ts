import { TestBed, inject } from '@angular/core/testing';

import { QualificacaoService } from './qualificacao.service';

describe('QualificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QualificacaoService]
    });
  });

  it('should be created', inject([QualificacaoService], (service: QualificacaoService) => {
    expect(service).toBeTruthy();
  }));
});
