document.addEventListener('DOMContentLoaded', function() {
  // Mock data for demonstration
  const diagnosisData = {
    diseaseName: 'Eczema',
    diseaseDescription: 'Eczema is a condition that makes your skin red and itchy. It is common in children but can occur at any age.',
    recommendations: 'Keep your skin moisturized, avoid harsh soaps, and manage stress.'
  };

  // Populate the results
  document.getElementById('diseaseName').querySelector('span').textContent = diagnosisData.diseaseName;
  document.getElementById('diseaseDescription').querySelector('span').textContent = diagnosisData.diseaseDescription;
  document.getElementById('recommendations').querySelector('span').textContent = diagnosisData.recommendations;

  // Download PDF functionality
  document.getElementById('downloadPdf').addEventListener('click', function() {
    const doc = new jsPDF();
    doc.text('Derm Aid - Diagnosis Results', 10, 10);
    doc.text(`Disease: ${diagnosisData.diseaseName}`, 10, 20);
    doc.text(`Description: ${diagnosisData.diseaseDescription}`, 10, 30);
    doc.text(`Recommendations: ${diagnosisData.recommendations}`, 10, 40);
    doc.save('DermAid_Diagnosis_Results.pdf');
  });
});
