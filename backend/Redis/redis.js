import { createClient } from 'redis';

const client = createClient({
    password: 'q6AZAo0zLZwR3S8c6TKEEcDoBYWRWTaQ',
    socket: {
        host: 'redis-10296.c301.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 10296,
        timeout: 2147483647
    }
});
client.connect()
client.on('connect', () => {
    console.log('Redis client connected');
}
);

export default client;