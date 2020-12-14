import request from '../../api/agent';
import configData from '../../config.json';

export const getImageAsync = async() => {
  const data = request
    .get(configData.Images.LighthouseImageUrl)
    .catch(error => {
      throw error;
    })
    return data;
}