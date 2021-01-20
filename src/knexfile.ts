const development = {
    client: 'mssql',
    connection: {
        server: '201.47.170.196',
        user: 'sa',
        password: 'BEC@db521',
        database: 'titanium_dev',
        options: {
            trustedconnection: true,
            enableArithAbort: true,
            instancename: 'SQLEXPRESS',
            encrypt: false
        }
    },
    useNullAsDefault: true
};

export default development;