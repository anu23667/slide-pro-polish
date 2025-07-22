export const UPLOADTHING_TOKEN = 'eyJhcGlLZXkiOiJza19saXZlXzZjYTYwMzFiOGVmZmEwZDNmNTEyNzhiZjhiMzYwYTMzY2U4OGMyZjVmZDc2MDIzYTQ2NTY2MjE1ZDEwZWM4Y2YiLCJhcHBJZCI6InBsNHR4d2hydWoiLCJyZWdpb25zIjpbInNlYTEiXX0=';

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('files', file);
  
  const response = await fetch(`https://api.uploadthing.com/api/uploadFiles`, {
    method: 'POST',
    headers: {
      'X-Uploadthing-Api-Key': UPLOADTHING_TOKEN,
      'X-Uploadthing-Version': '6.4.0',
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Upload failed: ${errorText}`);
  }

  return response.json();
};