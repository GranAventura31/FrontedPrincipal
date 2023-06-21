import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

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
  );
};