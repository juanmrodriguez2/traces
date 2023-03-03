import { Test, TestingModule } from '@nestjs/testing';
import { TracesController } from './traces.controller';

describe('TracesController', () => {
  let controller: TracesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TracesController],
    }).compile();

    controller = module.get<TracesController>(TracesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
