# YlThirdPartyOnboardingApiClient.ThirdPartyOnboardingModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thirdPartyCustomerId** | **String** | Gets or sets the third party&#39;s id for a merchant | 
**thirdPartyLeadId** | **String** | Gets or sets the third party&#39;s id for this lead | 
**countryISOCode** | **String** | Gets or sets the ISO country code for the merchant | 
**loanCurrencyISOCode** | **String** | Gets or sets the ISO currency code for the merchant | 
**monthlyCardRevenue** | **Number** | Gets or sets the monthly card revenue for the merchant | [optional] 
**numberOfPaymentsPerMonth** | **Number** | Gets or sets the number of payments a merchant has a month | [optional] 
**sweepPercentage** | **Number** | Gets or sets the percentange of transaction amount the merchant wants to use to pay back the loan | [optional] 
**monthsTrading** | **Number** | Gets or sets the number of months the merchant has been trading | [optional] 
**loanAmount** | **Number** | Gets or sets the size of loan the merchant wants | [optional] 
**keyContactName** | **String** | Gets or sets the key merchant contact who will be setting up the loan | 
**companyType** | **String** | Gets or sets the merchant&#39;s company type e.g. Ltd, Sole Trader etc | 
**companyName** | **String** | Gets or sets the merchant&#39;s company name | 
**companyWebsite** | **String** | Gets or sets the merchants company website URL | [optional] 
**companyNumber** | **String** | Gets or sets the registered company number for the merchant | [optional] 
**vatNumber** | **String** | Gets or sets the VAT number for the merchant | [optional] 
**mid** | **String** | Gets or sets the MID for the merchant | [optional] 
**registeredAddress** | [**AddressModel**](AddressModel.md) |  | 
**contactPhoneNumber** | **String** | Gets or sets the merchant&#39;s contact phone number | 
**contactEmailAddress** | **String** | Gets or sets the merchant&#39;s key contact email address | 
**notificationURL** | **String** | Gets or sets the third parties notification URL to which YouLend will send status updates | [optional] 
**additionalInfo** | **{String: String}** | Gets or sets a list of key values pairs representing any additional lead data not already covered. | [optional] 


