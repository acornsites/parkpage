let config = {
    for_sale: process.env.REACT_APP_FOR_SALE ? process.env.REACT_APP_FOR_SALE === "true" : false,
    in_use: process.env.REACT_APP_IN_USE ? process.env.REACT_APP_IN_USE === "true" : false,
    domain: process.env.REACT_APP_DOMAIN ? process.env.REACT_APP_DOMAIN : 'This domain',
    contact_email: process.env.REACT_APP_CONTACT_EMAIL ? process.env.REACT_APP_CONTACT_EMAIL : 'user@example.com'
}
export default config;