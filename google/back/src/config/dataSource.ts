import {DataSource} from 'typeorm';
import {join} from 'path';

const dataSource = new DataSource({
    type: 'postgres',
	host: process.env.DB_HOST ,
	port: Number(process.env.DB_PORT) ,
	username: process.env.DB_USER ,
	password: process.env.DB_PASSWORD ,
	database: process.env.DB_NAME ,
	synchronize: true,
	entities: [join(__dirname, '/../entity/Meet.ts'),join(__dirname, '../entity/PossibleTime.ts')],
});

export default dataSource;