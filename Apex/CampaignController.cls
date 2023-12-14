public with sharing class CampaignController {
    public CampaignController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Campaigns__c> getAllCampaigns() {
        return [SELECT Id, Name FROM Campaigns__c];
    }
}