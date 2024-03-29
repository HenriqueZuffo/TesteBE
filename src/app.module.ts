import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PessoaModule } from './pessoa/pessoa.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PessoaModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
