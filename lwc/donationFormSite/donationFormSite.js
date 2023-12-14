import { LightningElement,track } from 'lwc';
import getAllCampaigns from '@salesforce/apex/CampaignController.getAllCampaigns';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DonationFormSite extends LightningElement {
    @track selectedCampaign = ''; 
    @track campaignOptions = []; 

    connectedCallback() {
        getAllCampaigns()
            .then(result => {
                this.campaignOptions = result.map(item => ({
                    label: item.Name,
                    value: item.Id
                }));
            })
            .catch(error => {
                // Handle error
            });
    }

    // Handle Campaign selection change
    handleCampaignSelection(event) {
        this.selectedCampaign = event.detail.value;
    }

    handleSubmit(event) {
      //  event.preventDefault();
        const editForm = this.template.querySelector('lightning-record-edit-form');
        if (!this.selectedCampaign || !this.template.querySelector('lightning-input-field[field-name="Name"]').value || !this.template.querySelector('lightning-input-field[field-name="Contact_Number__c"]').value || !this.template.querySelector('lightning-input-field[field-name="Donation_Amount__c"]').value) {
            // Show an error message or handle the validation failure
            console.error('Please fill in all required fields.');
            event.preventDefault();
        }

      //  this.showSuccessToast(event.detail.id);
    
        editForm.recordId = null; // Reset the form
        this.template.querySelectorAll('lightning-input-field').forEach(field => {
            field.value = null;
        });
        this.selectedCampaign = '';
    }
    // showSuccessToast(recordId) {
    //     const toastEvent = new ShowToastEvent({
    //         title: 'Record Created',
    //         message: 'Record ID: ' + recordId,
    //         variant: 'success',
    //     });
    //     this.dispatchEvent(toastEvent);
    // }
}