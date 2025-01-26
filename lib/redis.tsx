import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.NEXT_PUBLIC_REDIS_HOST, 
  port: Number(process.env.NEXT_PUBLIC_REDIS_PORT) || 16459,
  password: process.env.NEXT_PUBLIC_REDIS_PASSWORD,
  username: process.env.NEXT_PUBLIC_REDIS_USERNAME
});

redis.on('error', (error) => {
  console.error('Redis error:', error);
});

export default redis;