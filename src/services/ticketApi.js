import axios from 'axios';

 const TicketApi = axios.create({
  baseURL: 'https://ticket-api-be.herokuapp.com/api/v1',
});
export default TicketApi
