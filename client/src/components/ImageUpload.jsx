'use client';

const { Button, Input, Image } = require('@heroui/react');
const { useState } = require('react');

export default function ImageUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const uploadFile = e.target.files[0];
    setFile(uploadFile);
    setPreviewUrl(URL.createObjectURL(uploadFile));
  };

  const handUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);
    try {
      const res = await fetch('http://localhost:5000/api/upload/image', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      onUpload(data.url); // Pass URL back to parent
    } catch (err) {
      console.error('Upload failed', err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <Input type="file" onChange={handleFileChange} />
      {previewUrl && <Image src={previewUrl} alt="Preview" width={200} />}
      <Button
        onPress={handUpload}
        color="primary"
        isLoading={uploading}
        disabled={!file}
      >
        Upload Image
      </Button>
    </div>
  );
}
