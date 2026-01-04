import { toast } from "react-toastify";

export const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

export const sendOtp = async ({ mobileNumber, setGeneratedOtp, onSuccess }) => {
    const otpCode = generateOtp();
    setGeneratedOtp(String(otpCode));

    const message = `Your verification code is ${otpCode}, code is valid for 5 Mins. Team TX Hospitals`;

    const url = `https://smslogin.co/v3/api.php?username=txhospitalsb&apikey=99144762b4fba93f4621&mobile=91${mobileNumber}&senderid=TXHOTP&message=${encodeURIComponent(
        message
    )}&templateid=1707169485003007437`;

    try {
        await fetch(url);
        toast.success("OTP sent successfully!");
        onSuccess?.();
    } catch (error) {
        console.error("Error sending OTP:", error);
        toast.error("Failed to send OTP");
    }
};

export const verifyOtp = ({ enteredOtp, generatedOtp, onSuccess }) => {
    if (enteredOtp === generatedOtp) {
        toast.success("OTP Verified Successfully!");
        onSuccess?.();
        return true;
    } else {
        toast.error("Invalid OTP. Please try again.");
        return false;
    }
};