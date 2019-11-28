var YouLendThirdPartyOnboardingApi = require('you_lend_third_party_onboarding_api');

var defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
var oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlEwWTBSVGcwUXpFNFEwWkRRVVF6TkRORU9EZzJOelJDTXpkQk5FWXpSVFpFUkROQ1Jqa3hOZyJ9.eyJodHRwOi8veW91bGVuZC5jb20vY2xhaW1zL2xlbmRpbmdQYXJ0bmVySWQiOiJkMGMzNGM5ZS1iZjQyLTQwMWQtYjQyMi1jMGYwY2IxZDUxYTMiLCJpc3MiOiJodHRwczovL3lvdWxlbmQtZGV2LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJLbnI1bUtiVVpuTTRUZ0FGNHhZT1lZSVUwMFNaWTRmWUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYueW91bGVuZGFwaS5jb20vb25ib2FyZGluZyIsImlhdCI6MTU3NDg3NDM0MCwiZXhwIjoxNTc0OTYwNzQwLCJhenAiOiJLbnI1bUtiVVpuTTRUZ0FGNHhZT1lZSVUwMFNaWTRmWSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.KWVQ9eDRAyM3sk2Ej0NTLWLGFAdrgTqHtSjKThRwWGL6UZ-LGQRt25b7eUsjR-p5DTnO_cVRDTZfPnyBHWRIlva3Bxqrgt8h_Kk4DNY3TvdjzJmvuQH-fXz9tdoetIK53dzlI7DOStTF_94y5sy5i2Zh-3yaZLKEfR8qo84IvMxac_7vbEd6ddAu5wtnnFh8jy8seLpOD16TgC0IiSvoh7CpurYYP-gCfgRK3JDUdOwWoiG4bWAvtGvslsfNzuQIUYTaitbdr7p0HBGAnTdZTZrtm_V2QAu3l_YWOXLmEfk_1MlcG9ghJ0uFJFMHlgiAzdUSmwyxHEwnpDxCRUU8hQ"

var api = new YouLendThirdPartyOnboardingApi.LeadsApi()
var leadId = 'df8b2192-425f-4755-8576-843445028b22'; // {String} The lead id
var opts = {
  'apiVersion': "1.0", // {String} 
  'accountDetailsModel': {
    "sortCode": "404040",
    "accountNumber": "21553211",
    "swift": "UKBGB22",
    "iban": "UK89 3704 0044 0532 0130 00",
    "bankName": "HSBC",
    "confirmedCompanyAccount": true
  } // {AccountDetailsModel} 
};
api.leadsLeadIdAccountdetailsPut(leadId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});