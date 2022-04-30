import { Module } from '@nestjs/common';
import { InstitutionsController } from './institutions.controller';
import { InstitutionsService } from './institutions.service';

@Module({
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
  exports: []
})
export class InstitutionsModule {}
