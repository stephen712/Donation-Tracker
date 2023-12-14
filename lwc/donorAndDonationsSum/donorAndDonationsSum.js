// LWC JavaScript
import { LightningElement, track, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import DONOR_NAME from '@salesforce/schema/Donor__c.Name';
import DONOR_DONATION from '@salesforce/schema/Donor__c.Total_Donations__c';
import getAllDonors from '@salesforce/apex/GetDonorsCls.getDonors';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
    
const FIELDS = ["Donor__c.Name", "Donor__c.Total_Donations__c"];

export default class DonorAndDonationsSum extends LightningElement {
     donorIds = [];

     connectedCallback() {
        getAllDonors() 
         .then((result) => {
            this.donorIds = result;
        })
        .catch((error) => {
            console.error('Error fetching donor id', error);
        });
}

    @wire(getRecords,
       { records:[
            { 
            recordIds: 'donorIds',
            fields: [DONOR_NAME],
            
            },
           
        
                 ],
        })  
    donors;
    

    handleError(error) {
        // Log the error to the browser's console
        console.error('An error occurred:', error);

        // Display a toast notification with the error message
        const event = new ShowToastEvent({
            title: 'Error',
            message: 'An error occurred. Please try again later.',
            variant: 'error',
        });
        this.dispatchEvent(event);
    }
}
