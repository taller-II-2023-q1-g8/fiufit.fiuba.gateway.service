const ROUTES = [
    {
        url: '/validation',
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
