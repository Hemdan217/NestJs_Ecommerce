import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
console.log('hello', process.env.JWT_SECRET_KEY);
@Module({
  imports: [UserModule,
ConfigModule.forRoot({
  isGlobal: true,
}),
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    AuthModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
