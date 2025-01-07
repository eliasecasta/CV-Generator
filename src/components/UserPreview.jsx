import { useRef } from 'react';
import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = (pdfHeight - imgHeight * ratio) / 2;
      pdf.addImage(
        imgData,
        'PNG',
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio,
      );
      pdf.save('user-preview.pdf');
    });
  };

  return (
    <div className="pe-5">
      <h2>Preview</h2>
      <div
        ref={previewRef}
        style={{ backgroundColor: '#fff', color: '#000', padding: '20px' }}
      >
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
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
        <p>
          <strong>School Name:</strong> {user.school}
        </p>
        <p>
          <strong>Title of Study:</strong> {user.titleOfStudy}
        </p>
        <p>
          <strong>Date of Study:</strong> {formatDate(user.dateOfStudy)}
        </p>
      </div>
      <button className="btn btn-primary mt-4" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default UserPreview;
