import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        logging: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      addTransactionalDataSource(dataSource);
      return dataSource.initialize();
    },
  },
];
