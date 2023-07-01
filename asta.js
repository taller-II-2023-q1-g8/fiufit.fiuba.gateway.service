return async (req, res, next) => {
    const url = `${baseURL}${req.originalUrl}`;
    console.log("Proxy:", url);
    const proxiedHeaders = filterHeaders(req.headers);
    console.log("Proxied Headers", proxiedHeaders);
    const proxiedRequest = {
        url: url,
        method: req.method,
        headers: {
            ...proxiedHeaders,
            'accept': 'application/json'
        },
        data: req.body,
    };