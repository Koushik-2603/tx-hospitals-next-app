import { toast } from 'react-toastify';
import axios from 'axios';

export const submitMyKareLead = async (payload) => {
    try {
        const url = 'https://product.mykare.ai/mykareai-platform-api/lead/transfer';

        const name = payload.name || payload.patientName || payload.fname || payload.fullName || 'Patient';
        const phoneNumber = payload.mobile || payload.phone || payload.phoneNumber || payload.contact || '';
        const notes = payload.notes || payload.message || payload.comments || payload.query || '';

        if (!phoneNumber) {
            console.warn("MyKare Lead: Missing phone number, skipping.");
            return;
        }

        const mykarePayload = {
            phoneNumber: String(phoneNumber),
            countryCode: payload.countryCode || "+91",
            name: String(name),
            notes: String(notes).substring(0, 2000),
            additionalInfo: payload,
            sourceId: 5
        };

        const response = await axios.post(url, mykarePayload, {
            headers: {
                'Content-Type': 'application/json',
                'myk-api-key': 'PZNmRoQU_nFkyrr1ZPqlcJA7QUrt1tYTp-JtleUFKhA='
            }
        });

        return response.data;
    } catch (error) {
        console.error('MyKare Lead submission error:', error);
        const resData = error.response?.data;
        if (resData && (resData.status === 'BAD_REQUEST' || resData.status === 'UNAUTHORIZED' || resData.code === 400 || resData.code === 401)) {
            toast.error(resData.message || 'Error submitting lead data');
        } else {
            toast.error('An error occurred submitting lead data.');
        }
    }
};
