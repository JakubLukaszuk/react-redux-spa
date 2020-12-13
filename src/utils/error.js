import * as ERROR_MESSAGES from '../constants/messages/apiErrorMessages';

export function getErrorMessage (error) {
    if(error.response || error.status|| error.code)
    {
      if(error?.response?.status)
      {
        const status = error.response.status;
        switch(status){
          case 403:
              return ERROR_MESSAGES.LIMIT_QUERIES_ERROR;
          case 404:
            return ERROR_MESSAGES.NOT_FOUND_ERROR;
          case 500:
            return ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
          default:
            return ERROR_MESSAGES.UNKNOWN_ERROR;
        }
      }
      return ERROR_MESSAGES.UNKNOWN_ERROR;
    }
    else
    {
      return ERROR_MESSAGES.NETWORK_ERROR;
    }
  }