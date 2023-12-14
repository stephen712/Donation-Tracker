public with sharing class GettDonor {
    @AuraEnabled(cacheable=true)
    public static List<Map<String, Object>> getDonors() {
        List<Donor__c> donors = [SELECT Id, Name, Total_Donations__c FROM Donor__c];

        // Create a list to store the donor data
        List<Map<String, Object>> donorData = new List<Map<String, Object>>();

        // Populate the list with donor information
        for (Donor__c donor : donors) {
            Map<String, Object> donorInfo = new Map<String, Object>();
            donorInfo.put('Name', donor.Name);
            donorInfo.put('TotalDonations', donor.Total_Donations__c);
            donorData.add(donorInfo);
        }

        return donorData;
    }
}