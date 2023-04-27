import { createClient } from 'redis';

const client = createClient({
    password: 'KWiNgp0oUiWwV5RWPj5G4p54ZBePAUDN',
    socket: {
        host: 'redis-16056.c305.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 16056,
        timeout: 2147483647
    }
});
client.connect()
client.on('connect', () => {
    console.log('Redis client connected');
}
);

export default client;