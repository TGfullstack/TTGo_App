'use client';

const { useState, useEffect } = require('react');

export default function FileUpload({ taskId }) {
  const [task, setTask] = useState(null);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:8080/api/v1/tasks/${taskId}`);
      const data = res.json();
      setTask(data);
    };
    fetchTask();
  }, [taskId]);

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert('No file selected!');

    const formData = new FormData();
    formData.append('file', file);

    const uploadResponse = await fetch(
      'http://localhost:8080/api/upload/task',
      {
        method: 'POST',
        body: formData,
      }
    );

    const uploadData = await uploadResponse.json();
    if (!uploadResponse.ok) return alert('Upload failed');

    const filePath = uploadData.path; //?

    // Attach file to task
    const patchRes = await fetch(
      `http://localhost:8080/api/v1/tasks/${taskId}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attachment: uploadData.path }),
      }
    );
    console.log(patchRes); // {filename, path}

    const updatedTask = await patchRes.json();
    setTask(updatedTask);
    setFile(null);
    setMessage('File uploaded and attached to task.');
  };

  const handleDelete = async () => {
    if (!task?.attachment) return;

    const deleteRes = await fetch(
      `http://localhost:8080/api/upload?filepath=${task.attachment}`,
      {
        method: 'DELETE',
      }
    );

    if (!deleteRes.ok) return alert('Delete failed');

    // Clear attachment from task
    const patchRes = await fetch(
      `http://localhost:8080/api/v1/tasks/${tasks._id}`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attachment: null }),
      }
    );

    const updatedTask = await patchRes.json();
    setTask(updatedTask);
    alert('File deleted and task updated');
  };
  return (
    <section>
      <form onSubmit={handleUploadSubmit} className="p-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
          className="mb-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Upload
        </button>
      </form>
      {task?.attachment && (
        <div className="bg-white p-3 rounded shadow">
          <p>Current Attachment:</p>
          <a
            href={`http://localhost:8080${task.attachment}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            {task.attachment}
          </a>
          <button
            onClick={handleDelete}
            className="ml-4 text-red-500 underline"
          >
            Delete File
          </button>
        </div>
      )}

      {message && <p className="text-green-600">{message}</p>}
    </section>
  );
}
