import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: 'postgres://uaqyowxj:qmhWWgi_c4k5HTlmGKODBgc-zBHoXkAg@kashin.db.elephantsql.com/uaqyowxj',
        logging: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
