import { Module } from '@nestjs/common';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { SuppliesController } from '../supplies/supplies.controller';
import { SuppliesService } from '../supplies/supplies.service';


@Module({
  controllers: [AuthController, SuppliesController],
  providers: [AuthService, SuppliesService],
})
export class AppModule {}
