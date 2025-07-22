export const UPLOADTHING_TOKEN = 'eyJhcGlLZXkiOiJza19saXZlXzZjYTYwMzFiOGVmZmEwZDNmNTEyNzhiZjhiMzYwYTMzY2U4OGMyZjVmZDc2MDIzYTQ2NTY2MjE1ZDEwZWM4Y2YiLCJhcHBJZCI6InBsNHR4d2hydWoiLCJyZWdpb25zIjpbInNlYTEiXX0=';

export const uploadFile = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('files', file);
    
    const response = await fetch('https://uploadthing.com/api/uploadFiles', {
      method: 'POST',
      headers: {
        'x-uploadthing-api-key': UPLOADTHING_TOKEN,
      },
      body: formData,
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Upload failed');
    }

    return result;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};