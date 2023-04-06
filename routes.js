const ROUTES = [
    {
        url: '/validation',
        auth: true,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: "https://www.google.com", //el URL target debe ser la direccion que se use en el back end
            changeOrigin: true,
            pathRewrite: {
                [`^/validation`]: '',
            },
        }
    },
    {
        url: '/user/create',
        auth: true,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
          },
          proxy: {
            target: "https://www.yahoo.com", //el URL target debe ser la direccion que se use en el back end
            changeOrigin: true,
            pathRewrite: {
                [`^/user/create`]: '',
          },
        }
    }
]

exports.ROUTES = ROUTES;
