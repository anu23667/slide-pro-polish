const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqbmdteXhucm9ja2J3ZWZ6eWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMTAyMzUsImV4cCI6MjA2ODY4NjIzNX0.Pic6CGc-J4rWpSY6oZXG1D0XGrfrBB8Dk2mdCM7XvO4'

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