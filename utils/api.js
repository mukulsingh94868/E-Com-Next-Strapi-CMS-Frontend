import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
    const options = {
        method: 'GET',
        headers: {
            Authorization: "Bearer d8fdb67946b3af2247eb4559275e600b0400b40078ba7e236f1167ef7a02cf176e276f7fb5f9290f70486275634ddf6b09b4f92fdeca5c550bd8477436fb89070d50726929ebcd32ea5c665a5eb92d6f6063da9d04d1460e1503b9ae5f806de2caa2e545f32fedf3afeabeb74a819d3ea7244f5132186664221ff504e053abb1"
        }
    };

    const res = await fetch(`${API_URL}${endpoint}`, options);
    const data = await res.json();
    return data;
};

export const makePaymentRequest = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
        method: "POST",
        headers: {
            Authorization: "Bearer d8fdb67946b3af2247eb4559275e600b0400b40078ba7e236f1167ef7a02cf176e276f7fb5f9290f70486275634ddf6b09b4f92fdeca5c550bd8477436fb89070d50726929ebcd32ea5c665a5eb92d6f6063da9d04d1460e1503b9ae5f806de2caa2e545f32fedf3afeabeb74a819d3ea7244f5132186664221ff504e053abb1",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
};