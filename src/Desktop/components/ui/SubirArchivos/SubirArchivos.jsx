import React, { useState } from 'react';

export const SubirArchivos = () => {

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title) {
      setMessage('Por favor, selecciona un archivo y un título.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage('Archivo subido exitosamente.');
        setFile(null);
        setTitle('');
      } else {
        setMessage('Error al subir el archivo.');
      }
    } catch (error) {
      setMessage('Error de conexión.');
    }
  };
  return (
    <div className='div-subirarchivos'>
        <h1 className='titulosubirarchivos'>¡Aqui puedes subir tus archivos!</h1>
        <hr className='hrsubirarchivos'/>
        <div className='contenedor-subir'>
          <form className='form-subir'onSubmit={handleSubmit}>
          <div>
            <label className='titulo-archivo'>Título:</label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
        <div>
          <label className='titulo-archivo'>Archivo:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
          <button type="submit">Subir</button>
      </form>
          {message && <p className='texto-subir'>{message}</p>}
        </div>
    </div>
  )
}
