import { Module } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CandidateController } from './candidate.controller';

@Module({
  providers: [CandidateService],
  controllers: [CandidateController],
})
export class CandidateModule {}
