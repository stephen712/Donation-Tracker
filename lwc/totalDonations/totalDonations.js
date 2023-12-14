import { LightningElement } from 'lwc';
import getDonors from '@salesforce/apex/GettDonor.getDonors';
import { loadStyle } from 'lightning/platformResourceLoader';
//import SLDS_RESOURCES from '@salesforce/resourceUrl/slds';
//import totalDonationsCss from 'c/totalDonations';




export default class TotalDonations extends LightningElement {
    donorData = [];
//     renderedCallback() {
//         Promise.all([
//             loadStyle(this, 
//                   '/totalDonations);
//         ])
// }

    connectedCallback() {
        // Load custom styles
      //  loadStyle(this, totalDonationsCss);


// Load SLDS styles
        //loadStyle(this, SLDS_RESOURCES + '/styles/salesforce-lightning-design-system.css');
        getDonors()
            .then((result) => {
                this.donorData = result;
            })
            .catch((error) => {
                console.error('Error fetching donor data', error);
            });
    }
}