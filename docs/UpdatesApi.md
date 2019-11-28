# YouLendThirdPartyOnboardingApi.UpdatesApi

All URIs are relative to *http://localhost/onboarding*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updatesGet**](UpdatesApi.md#updatesGet) | **GET** /Updates | Method for getting the state of all leads for a lending partner
[**updatesLeadIdGet**](UpdatesApi.md#updatesLeadIdGet) | **GET** /Updates/{leadId} | Method for getting updates on a submitted lead



## updatesGet

> [LeadStateModel] updatesGet(opts)

Method for getting the state of all leads for a lending partner

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.UpdatesApi();
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.updatesGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [optional] 

### Return type

[**[LeadStateModel]**](LeadStateModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## updatesLeadIdGet

> LeadStateModel updatesLeadIdGet(leadId, opts)

Method for getting updates on a submitted lead

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.UpdatesApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.updatesLeadIdGet(leadId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadId** | [**String**](.md)| The lead id | 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**LeadStateModel**](LeadStateModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

