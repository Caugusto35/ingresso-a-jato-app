import axios from 'axios';

 const Qrcode = axios.create({
  baseURL: 'https://chart.googleapis.com/chart?/chs=150x150&cht=qr&chl=',
});
export default Qrcode
