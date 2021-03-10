import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import User from './user/entities/user.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'lilkrisz',
  password: 'root',
  // password: process.env.DATABASE_PASSWORD,
  database: 'nestjs',
  synchronize: true, // with this the schema will be updated always
  logging: true,
  // entities: ['dist/**/*.entity{.ts,.js}'],
  entities: [User],
};
