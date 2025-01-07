import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import '../styles/UserPreview.css'; // Import custom CSS for styling

const UserPreview = () => {
  const user = useSelector((state) => state.user);
  const previewRef = useRef();

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const handleDownloadPDF = () => {
    const input = previewRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const padding = 10;
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(
        (pdfWidth - 2 * padding) / imgWidth,
        (pdfHeight - 2 * padding) / imgHeight,
      );
      const imgX = padding;
      const imgY = padding;
      pdf.text('Curriculum Vitae', pdfWidth / 2, padding, { align: 'center' });
      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY + 10, // Adjust for title
        imgWidth * ratio,
        imgHeight * ratio,
      );
      pdf.save('user-preview.pdf');
    });
  };

  return (
    <div className="cv-container">
      <h2 className="cv-title">Curriculum Vitae</h2>
      <div ref={previewRef} className="cv-content">
        <section className="cv-section">
          <h3 className="cv-section-title">Personal Information</h3>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </section>
        <section className="cv-section">
          <h3 className="cv-section-title">Job Information</h3>
          <p>
            <strong>Company Name:</strong> {user.companyName}
          </p>
          <p>
            <strong>Position Title:</strong> {user.positionTitle}
          </p>
          <p>
            <strong>Main Responsibilities:</strong> {user.mainResponsibilities}
          </p>
          <p>
            <strong>Date From:</strong> {formatDate(user.dateFrom)}
          </p>
          <p>
            <strong>Date Until:</strong> {formatDate(user.dateUntil)}
          </p>
        </section>
        <section className="cv-section">
          <h3 className="cv-section-title">Education Information</h3>
          <p>
            <strong>School Name:</strong> {user.school}
          </p>
          <p>
            <strong>Title of Study:</strong> {user.titleOfStudy}
          </p>
          <p>
            <strong>Date of Study:</strong> {formatDate(user.dateOfStudy)}
          </p>
        </section>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default UserPreview;
