# YlThirdPartyOnboardingApiClient.OnboardingV2View

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**leadSourceLendingPartnerId** | **String** |  | [optional] 
**onboardingState** | **String** | Gets or sets the current state of an onboarding.  One of \&quot;signuprequirementsnotmet\&quot;, \&quot;stage1incomplete\&quot;, \&quot;stage1submitted\&quot;,  \&quot;stage1rejected\&quot;, \&quot;stage2incomplete\&quot;, \&quot;stage2submitted\&quot;, \&quot;stage2rejected\&quot; or \&quot;onboardingcomplete\&quot;. | [optional] 
**onboardingStateReason** | **String** | Gets or sets the reason for the current state of an onboarding in case of rejection. | [optional] 
**organisationDetailsStepComplete** | **Boolean** | Gets or sets a value indicating whether the organisation details step is complete | [optional] 
**paymentDataStepComplete** | **Boolean** | Gets or sets a value indicating whether the payment data step is complete | [optional] 
**offerStepComplete** | **Boolean** | Gets or sets a value indicating whether the offer step is complete.  The offer step requires the documents to be signed. | [optional] 
**kycQuestionsStepComplete** | **Boolean** | Gets or sets a value indicating whether the KYC questions step is complete | [optional] 
**kycDocumentsStepComplete** | **Boolean** | Gets or sets a value indicating whether the KYC documents step is complete | [optional] 
**accountStepComplete** | **Boolean** | Gets or sets a value indicating whether the accounts step is complete | [optional] 
**companyName** | **String** | Gets or sets the name of the company | [optional] 
**leadType** | **String** | Gets or sets the lead type | [optional] 


