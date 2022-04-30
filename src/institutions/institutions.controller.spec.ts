import { Test, TestingModule } from '@nestjs/testing';
import { InstitutionsController } from './institutions.controller';
import { InstitutionsService } from './institutions.service';

describe('InstitutionsController', () => {
  let controller: InstitutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstitutionsService],
      controllers: [InstitutionsController],
    }).compile();

    controller = module.get<InstitutionsController>(InstitutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
