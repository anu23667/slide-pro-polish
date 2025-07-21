export const UPLOADTHING_TOKEN = 'eyJhcGlLZXkiOiJza19saXZlXzZjYTYwMzFiOGVmZmEwZDNmNTEyNzhiZjhiMzYwYTMzY2U4OGMyZjVmZDc2MDIzYTQ2NTY2MjE1ZDEwZWM4Y2YiLCJhcHBJZCI6InBsNHR4d2hydWoiLCJyZWdpb25zIjpbInNlYTEiXX0=';

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('files', file);
  
  const response = await fetch('https://api.uploadthing.com/api/uploadFiles', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${UPLOADTHING_TOKEN}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  return response.json();
};