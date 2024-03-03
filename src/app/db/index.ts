import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const serverSQL = neon(process.env.NEON_DATABASE_URL!);
const neonDB = drizzle(serverSQL);

export default neonDB;
