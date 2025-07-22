// Decode the token to get the actual API key
const decodedToken = JSON.parse(atob('eyJhcGlLZXkiOiJza19saXZlXzZjYTYwMzFiOGVmZmEwZDNmNTEyNzhiZjhiMzYwYTMzY2U4OGMyZjVmZDc2MDIzYTQ2NTY2MjE1ZDEwZWM4Y2YiLCJhcHBJZCI6InBsNHR4d2hydWoiLCJyZWdpb25zIjpbInNlYTEiXX0='));
const API_KEY = decodedToken.apiKey;
const APP_ID = decodedToken.appId;

export const uploadFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('files', file);
    formData.append('metadata', JSON.stringify({}));
    
    const response = await fetch(`https://api.uploadthing.com/v6/uploadFiles`, {
      method: 'POST',
      headers: {
        'X-Uploadthing-Api-Key': API_KEY,
        'X-Uploadthing-Version': '6.4.0',
      },
      body: formData,
    });

    const result = await response.json();
    console.log('Upload response:', result);
    
    if (!response.ok) {
      console.error('Upload failed:', result);
      throw new Error(result.error?.message || result.message || 'Upload failed');
    }

    return result;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};