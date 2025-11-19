import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import studentsData from "../data/student.json";
import commentsData from "../data/comments.json"; // импортируем локально

export default function StudentAlbum() {
  const { id } = useParams();
  const student = studentsData.find((s) => s.id === parseInt(id));

  const [open, setOpen] = useState(false); 
  const [index, setIndex] = useState(0); 

  // фильтруем комментарии для текущего студента
  const comments = commentsData.filter(c => c.studentId === student?.id);

  useEffect(() => {
    if (student) {
      document.title = `${student.name} | Фото Альбом`;
      const meta = document.querySelector('meta[name="description"]');
      const content = `Работы студента ${student.name}: ${student.works.join(", ")}`;
      if (meta) {
        meta.setAttribute("content", content);
      } else {
        const metaTag = document.createElement("meta");
        metaTag.name = "description";
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    }
  }, [student]);

  if (!student) return <p className="p-6">Студент табылмады:(</p>;

  return (
    <div className="min-h-screen p-6 max-w-6xl mx-auto font-mont">
      <h1 className="text-3xl font-bold mb-4">{student.name} — Фото Альбом</h1>
      <Link to="/" className="text-blue-500 mb-6 inline-block">&larr; Назад</Link>

      {/* Фото */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {student.photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`Фото ${i + 1}`}
            className="w-full h-52 object-cover rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
            onClick={() => { setIndex(i); setOpen(true); }}
          />
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={student.photos.map(p => ({ src: p }))}
          index={index}
          plugins={[Zoom]}
          animation={{ zoom: 500 }}
        />
      )}

      {/* Атқарылған жұмыстар */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Атқарылған жұмыстар</h2>
        <ul className="list-disc list-inside space-y-2">
          {student.works.map((work, i) => (<li key={i}>{work}</li>))}
        </ul>
      </div>

      {/* Комментарии */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Студентке мінездеме</h2>
        {comments.length === 0 ? (
          <p className="text-gray-500 italic">Пока нет комментариев.</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 hover:bg-gray-100 transition"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {c.name[0]?.toUpperCase()}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{c.name}</p>
                  <p className="text-gray-600 text-justify">{c.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
