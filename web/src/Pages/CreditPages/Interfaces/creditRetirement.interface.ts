export interface CreditRetirementInterface {
  id: number;
  serialNumber: string;
  creditAmount: number;
  createdDate: string;
  retirementType: string;
<<<<<<< HEAD
  country?: string;
=======
  countryName?: string;
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
  status: string;
  projectId: number;
  projectName: string;
  senderId: number;
  senderName: string;
  senderLogo: string;
  organizationName: string;
}
