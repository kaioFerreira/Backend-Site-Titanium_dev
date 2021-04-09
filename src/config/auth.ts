export default {
    jwt: {
        secret: process.env.APP_SECRET || 'a1dcae399620ed1668565d6e4ec09bc6',
        expiresIn: '1d',
    },
};
