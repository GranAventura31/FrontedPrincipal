import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export const Comments = () => {
// AGREGAR COMENTARIO
  const [image, setImage] = useState('');
  const [comentario, setComentario] = useState('');
  const [nombre, setNombre] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Obtener los comentarios cuando el componente se monte
    fetchComments();
  }, []);

  const enviarComentario = (e) => {
    e.preventDefault();

    if (nombre === '' || comentario === '') {
      
    Swal.fire({
      icon: 'error',
      text: 'Algún Campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
    }else{
    axios
      .post('http://localhost:5000/api/comentarios', {
        Image: image,
        Nombre: nombre,
        Comentario: comentario,
      })
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Comentario agregado',
            text: 'El comentario ha sido agregado correctamente',
          });
          // Limpiar los campos de entrada
          setImage('');
          setNombre('');
          setComentario('');
          // Obtener los comentarios nuevamente para actualizar la lista
          fetchComments();
        } else {
          throw new Error('Error al agregar el comentario');
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar el comentario',
          text: 'Hubo un error al agregar el comentario',
        });
        console.error('Error al agregar el comentario:', error);
      });
  }
  };

// MOSTRAR COMENTARIO
  const fetchComments = () => {
    axios
      .get('http://localhost:5000/api/comentarios')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los comentarios:', error);
      });
  };


  return (
    <div>
      <div>
      <div className="comment-list">
        <h2>Comentarios</h2>
        <div className="comment-scroll-container">
          {comments.length > 0 ? (
            <ul className="comment-card-list">
              {comments.map((comment) => (
                <li key={comment.id} className="comment-card">
                  {comment.Image && (
                    <img src={comment.Image} alt="Foto" className="comment-image" />
                  )}
                  <div className="comment-content">
                    <strong>Nombre:</strong> {comment.Nombre}
                    <br />
                    <strong>Comentario:</strong> {comment.Comentario}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className='noComentarios'>No hay comentarios.</p>
          )}
        </div>
      </div>
    </div>
    <div className="form-container"> 
      <form onSubmit={enviarComentario}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Comentario:
          <input
            type="text"
            name="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
        </label>
        <button type="submit">Agregar Comentario</button>
      </form>
    </div>
    </div>
  );
};