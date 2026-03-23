<<<<<<< HEAD
import { IssuedOrReceivedOptions } from "../Enums/creditEventEnum";

=======
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
export interface CreditBalanceInterface {
  id: number;
  serialNumber: string;
  creditAmount: number;
  createdDate: string;
  projectId: number;
  projectName: string;
  receiverId: number;
  receiverName: string;
  receiverLogo: string;
  senderId: number | null;
<<<<<<< HEAD
  senderName: string | null;
  senderLogo: string | null;
  type: IssuedOrReceivedOptions;
=======
  senderName: string;
  senderLogo: string | null;
  eventType: 'Issued' | 'Received';
>>>>>>> 1db9d126a020558b324be754ac861a2b937fa63f
}
