const HttpProxy = require('express-http-proxy');

const UrlAPI = process.env.URL_GERENCIA_API;
const apiAcessKey = require('../config/apiAcessKeys');

function isMultipartRequest(req) {
  const contentTypeHeader = req.headers['content-type'];

  return contentTypeHeader && contentTypeHeader.includes('multipart');
}

const ProxyApi = (req, res, next) => {
  let reqAsBuffer = false;
  let reqBodyEncoding = true;
  let parseReqBody = true;

  req.headers.api_key = apiAcessKey.msGerenciaKey;

  if (isMultipartRequest(req)) {
    reqAsBuffer = true;
    reqBodyEncoding = null;
    parseReqBody = false;
  }

  return HttpProxy(UrlAPI, {
    reqAsBuffer,
    reqBodyEncoding,
    parseReqBody,

    proxyReqPathResolver(reqI) {
      const url = reqI.baseUrl.split('/');
      url.splice(0, 3);

      const formattedUrl = url.reduce((concat, value) => `${concat}/${value}`, '');

      return `${formattedUrl}${reqI.url}`;
    },
  })(req, res, next);
};

module.exports = {ProxyApi};
