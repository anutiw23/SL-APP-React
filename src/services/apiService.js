import axios from 'axios'
import config from '../config'

const domain= config['host']
async function getUserDetails(EmailID){
   const response= await axios.get(domain+'api/SignIn/GetUserDetails?EmailID='+EmailID);
   return response.data;
}

async function getProcessByUserId(userId) {
  const response = await axios.get(domain+'api/Process/GetProcess?ClientID='+userId);
  return response.data;
}

async function getProcessMenuByRole(params) {
  const response = await axios.post(domain+'api/SignIn/GetProcessRoleWiseMenu', params);
  return response;
}

export {
  getUserDetails,
  getProcessByUserId,
  getProcessMenuByRole,
}
