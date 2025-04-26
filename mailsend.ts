import axios from 'axios';

const mailsend = async (
  fullName: string,
  address: string,
  phoneNumber: string,
  pinCode: string,
  email: string
) => {
  return axios.post('/api/mailsend', {
    fullName,
    address,
    phoneNumber,
    pinCode,
    email
  });
};

export default mailsend;
