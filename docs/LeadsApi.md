# YlThirdPartyOnboardingApiClient.LeadsApi

All URIs are relative to *https://dev.youlendapi.com/onboarding*

Method | HTTP request | Description
------------- | ------------- | -------------
[**leadsLeadIdAccountdetailsGet**](LeadsApi.md#leadsLeadIdAccountdetailsGet) | **GET** /Leads/{leadId}/accountdetails | An endpoint for adding account details to a lead
[**leadsLeadIdAccountdetailsPut**](LeadsApi.md#leadsLeadIdAccountdetailsPut) | **PUT** /Leads/{leadId}/accountdetails | An endpoint for adding account details to a lead
[**leadsLeadIdDetailsGet**](LeadsApi.md#leadsLeadIdDetailsGet) | **GET** /Leads/{leadId}/details | An endpoint for viewing the onboarding details of a lead
[**leadsLeadIdDocumentsBankstatementsPost**](LeadsApi.md#leadsLeadIdDocumentsBankstatementsPost) | **POST** /Leads/{leadId}/documents/bankstatements | An endpoint for adding bank statements to a lead
[**leadsLeadIdDocumentsGet**](LeadsApi.md#leadsLeadIdDocumentsGet) | **GET** /Leads/{leadId}/documents | An endpoint for getting kyc documents for a significant person
[**leadsLeadIdDocumentsPaymentdataPost**](LeadsApi.md#leadsLeadIdDocumentsPaymentdataPost) | **POST** /Leads/{leadId}/documents/paymentdata | An endpoint for adding payment data documents to a lead
[**leadsLeadIdDocumentsSignificantpersonsSignificantPersonIdKycDocumentTypePost**](LeadsApi.md#leadsLeadIdDocumentsSignificantpersonsSignificantPersonIdKycDocumentTypePost) | **POST** /Leads/{leadId}/documents/significantpersons/{significantPersonId}/{kycDocumentType} | An endpoint for adding kyc documents for a significant person
[**leadsLeadIdKycquestionsGet**](LeadsApi.md#leadsLeadIdKycquestionsGet) | **GET** /Leads/{leadId}/kycquestions | An endpoint for viewing the kyc questions of a lead
[**leadsLeadIdKycquestionsPut**](LeadsApi.md#leadsLeadIdKycquestionsPut) | **PUT** /Leads/{leadId}/kycquestions | An endpoint for adding KYC question answers to a lead
[**leadsLeadIdOfferGet**](LeadsApi.md#leadsLeadIdOfferGet) | **GET** /Leads/{leadId}/offer | An endpoint for getting the loan offer
[**leadsLeadIdOfferPost**](LeadsApi.md#leadsLeadIdOfferPost) | **POST** /Leads/{leadId}/offer | An endpoint for creating the loan offer
[**leadsLeadIdOptionsGet**](LeadsApi.md#leadsLeadIdOptionsGet) | **GET** /Leads/{leadId}/options | An endpoint for getting the loan options for a lead
[**leadsLeadIdOrganisationdetailsPut**](LeadsApi.md#leadsLeadIdOrganisationdetailsPut) | **PUT** /Leads/{leadId}/organisationdetails | An endpoint for adding organisation details
[**leadsLeadIdOrganisationsdetailsGet**](LeadsApi.md#leadsLeadIdOrganisationsdetailsGet) | **GET** /Leads/{leadId}/organisationsdetails | An endpoint for viewing the organisation details of a lead
[**leadsLeadIdPaymentdataGet**](LeadsApi.md#leadsLeadIdPaymentdataGet) | **GET** /Leads/{leadId}/paymentdata | An endpoint for viewing the payment data of a lead
[**leadsLeadIdPaymentgatewaysPost**](LeadsApi.md#leadsLeadIdPaymentgatewaysPost) | **POST** /Leads/{leadId}/paymentgateways | An endpoint for adding a payment gateway to a lead
[**leadsLeadIdSignificantpersonsPut**](LeadsApi.md#leadsLeadIdSignificantpersonsPut) | **PUT** /Leads/{leadId}/significantpersons | An endpoint for updating significant persons for a lead
[**leadsLeadIdStatePut**](LeadsApi.md#leadsLeadIdStatePut) | **PUT** /Leads/{leadId}/state | An endpoint for updating the state of an onboarding
[**leadsPost**](LeadsApi.md#leadsPost) | **POST** /Leads | Creates a Youlend Advance Lead



## leadsLeadIdAccountdetailsGet

> AccountV2StepModel leadsLeadIdAccountdetailsGet(leadId, opts)

An endpoint for adding account details to a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdAccountdetailsGet(leadId, opts).then((data) => {
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

[**AccountV2StepModel**](AccountV2StepModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdAccountdetailsPut

> leadsLeadIdAccountdetailsPut(leadId, opts)

An endpoint for adding account details to a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'accountDetailsModel': new YlThirdPartyOnboardingApiClient.AccountDetailsModel() // AccountDetailsModel | 
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


## leadsLeadIdDetailsGet

> OnboardingV2View leadsLeadIdDetailsGet(leadId, opts)

An endpoint for viewing the onboarding details of a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdDetailsGet(leadId, opts).then((data) => {
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

[**OnboardingV2View**](OnboardingV2View.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdDocumentsBankstatementsPost

> SaveBankStatementDocumentResultModel leadsLeadIdDocumentsBankstatementsPost(leadId, opts)

An endpoint for adding bank statements to a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
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


## leadsLeadIdDocumentsGet

> KycDocumentsV2StepModel leadsLeadIdDocumentsGet(leadId, opts)

An endpoint for getting kyc documents for a significant person

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdDocumentsGet(leadId, opts).then((data) => {
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

[**KycDocumentsV2StepModel**](KycDocumentsV2StepModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdDocumentsPaymentdataPost

> SavePaymentDataDocumentResultModel leadsLeadIdDocumentsPaymentdataPost(leadId, opts)

An endpoint for adding payment data documents to a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
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
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
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


## leadsLeadIdKycquestionsGet

> KycQuestionsStepView leadsLeadIdKycquestionsGet(leadId, opts)

An endpoint for viewing the kyc questions of a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdKycquestionsGet(leadId, opts).then((data) => {
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

[**KycQuestionsStepView**](KycQuestionsStepView.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdKycquestionsPut

> leadsLeadIdKycquestionsPut(leadId, opts)

An endpoint for adding KYC question answers to a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'kycQuestionsModel': new YlThirdPartyOnboardingApiClient.KycQuestionsModel() // KycQuestionsModel | 
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


## leadsLeadIdOfferGet

> OfferStepModel leadsLeadIdOfferGet(leadId, opts)

An endpoint for getting the loan offer

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdOfferGet(leadId, opts).then((data) => {
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

[**OfferStepModel**](OfferStepModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdOfferPost

> leadsLeadIdOfferPost(leadId, opts)

An endpoint for creating the loan offer

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'onboardingOfferModel': new YlThirdPartyOnboardingApiClient.OnboardingOfferModel() // OnboardingOfferModel | 
};
apiInstance.leadsLeadIdOfferPost(leadId, opts).then(() => {
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
 **onboardingOfferModel** | [**OnboardingOfferModel**](OnboardingOfferModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## leadsLeadIdOptionsGet

> LoanSizingModel leadsLeadIdOptionsGet(leadId, opts)

An endpoint for getting the loan options for a lead

The available loan options are accessed through this endpoint.  The loan options must first be generated by Banking Circle staff before it is made available through this endpoint.

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdOptionsGet(leadId, opts).then((data) => {
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

[**LoanSizingModel**](LoanSizingModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdOrganisationdetailsPut

> leadsLeadIdOrganisationdetailsPut(leadId, opts)

An endpoint for adding organisation details

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'onboardingOrganisationDetailsModel': new YlThirdPartyOnboardingApiClient.OnboardingOrganisationDetailsModel() // OnboardingOrganisationDetailsModel | 
};
apiInstance.leadsLeadIdOrganisationdetailsPut(leadId, opts).then(() => {
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
 **onboardingOrganisationDetailsModel** | [**OnboardingOrganisationDetailsModel**](OnboardingOrganisationDetailsModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## leadsLeadIdOrganisationsdetailsGet

> OrganisationDetailsV3StepView leadsLeadIdOrganisationsdetailsGet(leadId, opts)

An endpoint for viewing the organisation details of a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdOrganisationsdetailsGet(leadId, opts).then((data) => {
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

[**OrganisationDetailsV3StepView**](OrganisationDetailsV3StepView.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdPaymentdataGet

> PaymentDataStepView leadsLeadIdPaymentdataGet(leadId, opts)

An endpoint for viewing the payment data of a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.leadsLeadIdPaymentdataGet(leadId, opts).then((data) => {
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

[**PaymentDataStepView**](PaymentDataStepView.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## leadsLeadIdPaymentgatewaysPost

> leadsLeadIdPaymentgatewaysPost(leadId, opts)

An endpoint for adding a payment gateway to a lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'paymentGatewayModel': new YlThirdPartyOnboardingApiClient.PaymentGatewayModel() // PaymentGatewayModel | 
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
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'significantPersonsModel': new YlThirdPartyOnboardingApiClient.SignificantPersonsModel() // SignificantPersonsModel | 
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


## leadsLeadIdStatePut

> leadsLeadIdStatePut(leadId, opts)

An endpoint for updating the state of an onboarding

The state can only be updated once the relevant documents are submitted, the relevant questions are answered or the relevants documents are signed

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let leadId = null; // String | The lead id
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'onboardingStateModel': new YlThirdPartyOnboardingApiClient.OnboardingStateModel() // OnboardingStateModel | 
};
apiInstance.leadsLeadIdStatePut(leadId, opts).then(() => {
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
 **onboardingStateModel** | [**OnboardingStateModel**](OnboardingStateModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## leadsPost

> CreateThirdPartyAdvanceOnboardingResultModel leadsPost(opts)

Creates a Youlend Advance Lead

### Example

```javascript
import YlThirdPartyOnboardingApiClient from 'yl-third-party-onboarding-api-client';
let defaultClient = YlThirdPartyOnboardingApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyOnboardingApiClient.LeadsApi();
let opts = {
  'apiVersion': "apiVersion_example", // String | 
  'thirdPartyOnboardingModel': new YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel() // ThirdPartyOnboardingModel | 
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

