# YouLendThirdPartyOnboardingApi.LeadsApi

All URIs are relative to *https://dev.youlendapi.com/onboarding*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leadsLeadIdAccountdetailsPut**](LeadsApi.md#leadsLeadIdAccountdetailsPut) | **PUT** /Leads/{leadId}/accountdetails | An endpoint for adding account details to a lead
[**leadsLeadIdDocumentsBankstatementsPost**](LeadsApi.md#leadsLeadIdDocumentsBankstatementsPost) | **POST** /Leads/{leadId}/documents/bankstatements | An endpoint for adding bank statements to a lead
[**leadsLeadIdDocumentsPaymentdataPost**](LeadsApi.md#leadsLeadIdDocumentsPaymentdataPost) | **POST** /Leads/{leadId}/documents/paymentdata | An endpoint for adding payment data documents to a lead
[**leadsLeadIdDocumentsSignificantpersonsSignificantPersonIdKycDocumentTypePost**](LeadsApi.md#leadsLeadIdDocumentsSignificantpersonsSignificantPersonIdKycDocumentTypePost) | **POST** /Leads/{leadId}/documents/significantpersons/{significantPersonId}/{kycDocumentType} | An endpoint for adding kyc documents for a significant person
[**leadsLeadIdKycquestionsPut**](LeadsApi.md#leadsLeadIdKycquestionsPut) | **PUT** /Leads/{leadId}/kycquestions | An endpoint for adding KYC question answers to a lead
[**leadsLeadIdPaymentgatewaysPost**](LeadsApi.md#leadsLeadIdPaymentgatewaysPost) | **POST** /Leads/{leadId}/paymentgateways | An endpoint for adding a payment gateway to a lead
[**leadsLeadIdSignificantpersonsPut**](LeadsApi.md#leadsLeadIdSignificantpersonsPut) | **PUT** /Leads/{leadId}/significantpersons | An endpoint for updating significant persons for a lead
[**leadsPost**](LeadsApi.md#leadsPost) | **POST** /Leads | Creates a Youlend Advance Lead



## leadsLeadIdAccountdetailsPut

> leadsLeadIdAccountdetailsPut(leadId, opts)

An endpoint for adding account details to a lead

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'accountDetailsModel': new YouLendThirdPartyOnboardingApi.AccountDetailsModel() // AccountDetailsModel | 
};
apiInstance.leadsLeadIdAccountdetailsPut(leadId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadId** | [**String**](.md)| The lead id | 
 **apiVersion** | **String**|  | [optional] 
 **accountDetailsModel** | [**AccountDetailsModel**](AccountDetailsModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## leadsLeadIdDocumentsBankstatementsPost

> SaveBankStatementDocumentResultModel leadsLeadIdDocumentsBankstatementsPost(leadId, opts)

An endpoint for adding bank statements to a lead

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'file': "/path/to/file" // File | 
};
apiInstance.leadsLeadIdDocumentsBankstatementsPost(leadId, opts).then((data) => {
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
 **file** | **File**|  | [optional] 

### Return type

[**SaveBankStatementDocumentResultModel**](SaveBankStatementDocumentResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, application/xml


## leadsLeadIdDocumentsPaymentdataPost

> SavePaymentDataDocumentResultModel leadsLeadIdDocumentsPaymentdataPost(leadId, opts)

An endpoint for adding payment data documents to a lead

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'file': "/path/to/file" // File | 
};
apiInstance.leadsLeadIdDocumentsPaymentdataPost(leadId, opts).then((data) => {
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
 **file** | **File**|  | [optional] 

### Return type

[**SavePaymentDataDocumentResultModel**](SavePaymentDataDocumentResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, application/xml


## leadsLeadIdDocumentsSignificantpersonsSignificantPersonIdKycDocumentTypePost

> SaveSignficantPersonKycDocumentResultModel leadsLeadIdDocumentsSignificantpersonsSignificantPersonIdKycDocumentTypePost(leadId, significantPersonId, kycDocumentType, opts)

An endpoint for adding kyc documents for a significant person

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let leadId = null; // String | The lead id
let significantPersonId = null; // String | The third party significant person id
let kycDocumentType = "''"; // String | The kyc document type (passport, proofOfAddress)
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'file': "/path/to/file" // File | 
};
apiInstance.leadsLeadIdDocumentsSignificantpersonsSignificantPersonIdKycDocumentTypePost(leadId, significantPersonId, kycDocumentType, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadId** | [**String**](.md)| The lead id | 
 **significantPersonId** | [**String**](.md)| The third party significant person id | 
 **kycDocumentType** | **String**| The kyc document type (passport, proofOfAddress) | [default to &#39;&#39;]
 **apiVersion** | **String**|  | [optional] 
 **file** | **File**|  | [optional] 

### Return type

[**SaveSignficantPersonKycDocumentResultModel**](SaveSignficantPersonKycDocumentResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json, application/xml


## leadsLeadIdKycquestionsPut

> leadsLeadIdKycquestionsPut(leadId, opts)

An endpoint for adding KYC question answers to a lead

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'kycQuestionsModel': new YouLendThirdPartyOnboardingApi.KycQuestionsModel() // KycQuestionsModel | 
};
apiInstance.leadsLeadIdKycquestionsPut(leadId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadId** | [**String**](.md)| The lead id | 
 **apiVersion** | **String**|  | [optional] 
 **kycQuestionsModel** | [**KycQuestionsModel**](KycQuestionsModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## leadsLeadIdPaymentgatewaysPost

> leadsLeadIdPaymentgatewaysPost(leadId, opts)

An endpoint for adding a payment gateway to a lead

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'paymentGatewayModel': new YouLendThirdPartyOnboardingApi.PaymentGatewayModel() // PaymentGatewayModel | 
};
apiInstance.leadsLeadIdPaymentgatewaysPost(leadId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **leadId** | [**String**](.md)| The lead id | 
 **apiVersion** | **String**|  | [optional] 
 **paymentGatewayModel** | [**PaymentGatewayModel**](PaymentGatewayModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## leadsLeadIdSignificantpersonsPut

> SaveSignificantPersonsResultModel leadsLeadIdSignificantpersonsPut(leadId, opts)

An endpoint for updating significant persons for a lead

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'significantPersonsModel': new YouLendThirdPartyOnboardingApi.SignificantPersonsModel() // SignificantPersonsModel | 
};
apiInstance.leadsLeadIdSignificantpersonsPut(leadId, opts).then((data) => {
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
 **significantPersonsModel** | [**SignificantPersonsModel**](SignificantPersonsModel.md)|  | [optional] 

### Return type

[**SaveSignificantPersonsResultModel**](SaveSignificantPersonsResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## leadsPost

> CreateThirdPartyAdvanceOnboardingResultModel leadsPost(opts)

Creates a Youlend Advance Lead

Can add sample as an example here

### Example

```javascript
import YouLendThirdPartyOnboardingApi from 'yl-third-party-onboarding-api-client';
let defaultClient = YouLendThirdPartyOnboardingApi.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YouLendThirdPartyOnboardingApi.LeadsApi();
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'thirdPartyOnboardingModel': new YouLendThirdPartyOnboardingApi.ThirdPartyOnboardingModel() // ThirdPartyOnboardingModel | 
};
apiInstance.leadsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | [optional] 
 **thirdPartyOnboardingModel** | [**ThirdPartyOnboardingModel**](ThirdPartyOnboardingModel.md)|  | [optional] 

### Return type

[**CreateThirdPartyAdvanceOnboardingResultModel**](CreateThirdPartyAdvanceOnboardingResultModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml

