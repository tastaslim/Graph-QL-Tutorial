import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
