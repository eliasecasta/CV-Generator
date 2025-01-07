import { useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer';
import '../styles/UserPreview.css';

const UserPreview = () => {
  const user = useSelector((state) => state.user);
  const previewRef = useRef();

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 18,
      marginBottom: 10,
      borderBottom: 1,
      borderBottomColor: '#000',
      paddingBottom: 5,
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
  });

  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Curriculum Vitae</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.text}>
            <strong>Name:</strong> {user.name}
          </Text>
          <Text style={styles.text}>
            <strong>Email:</strong> {user.email}
          </Text>
          <Text style={styles.text}>
            <strong>Phone:</strong> {user.phone}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Information</Text>
          <Text style={styles.text}>
            <strong>Company Name:</strong> {user.companyName}
          </Text>
          <Text style={styles.text}>
            <strong>Position Title:</strong> {user.positionTitle}
          </Text>
          <Text style={styles.text}>
            <strong>Main Responsibilities:</strong> {user.mainResponsibilities}
          </Text>
          <Text style={styles.text}>
            <strong>Date From:</strong> {formatDate(user.dateFrom)}
          </Text>
          <Text style={styles.text}>
            <strong>Date Until:</strong> {formatDate(user.dateUntil)}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education Information</Text>
          <Text style={styles.text}>
            <strong>School Name:</strong> {user.school}
          </Text>
          <Text style={styles.text}>
            <strong>Title of Study:</strong> {user.titleOfStudy}
          </Text>
          <Text style={styles.text}>
            <strong>Date of Study:</strong> {formatDate(user.dateOfStudy)}
          </Text>
        </View>
      </Page>
    </Document>
  );

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
      <PDFDownloadLink document={<MyDocument />} fileName="user-preview.pdf">
        {({ loading }) => (
          <button className="btn btn-primary mt-4">
            {loading ? 'Loading document...' : 'Download PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default UserPreview;
