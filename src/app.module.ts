import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AdminModule } from './modules/admin/admin.module';

@Module({
  imports: [UserModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
