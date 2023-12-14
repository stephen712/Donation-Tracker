public with sharing class GetDonorsCls {
    @AuraEnabled(cacheable=true)
        public static List<Donor__c> getDonors() {
            if(Schema.SObjectType.Donor__c.isAccessible()){
                return [SELECT Id FROM Donor__c];
            }
            else {
                return new List<Donor__c>();
            }
        
    }
}