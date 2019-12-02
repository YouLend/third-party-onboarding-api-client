# YlThirdPartyOnboardingApiClient.DocumentSigningApi

All URIs are relative to *https://dev.youlendapi.com/onboarding*

Method | HTTP request | Description
------------- | ------------- | -------------
[**documentSigningDocumentSigningIdGet**](DocumentSigningApi.md#documentSigningDocumentSigningIdGet) | **GET** /DocumentSigning/{documentSigningId} | Gets the document signing for specified document



## documentSigningDocumentSigningIdGet

> DocumentSigningViewModel documentSigningDocumentSigningIdGet(documentSigningId, opts)

Gets the document signing for specified document

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.DocumentSigningApi();
let documentSigningId = null; // String | GUID used to identify the document signing
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.documentSigningDocumentSigningIdGet(documentSigningId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentSigningId** | [**String**](.md)| GUID used to identify the document signing | 
 **apiVersion** | **String**|  | [optional] 

### Return type

[**DocumentSigningViewModel**](DocumentSigningViewModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml

