import './style.css';

import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  
  const notes = [
    { semester: '1st', subjects: ['Environmental Science', 'Basic electronics', 'Basic Mechanical Engeeneering','Math-1','Engineering Drawing' ,'Chemistry'] },
    { semester: '2nd', subjects: ['Math-2,', 'C Programming', 'Basic Electrical','Biology','Physics'] },
    { semester: '3rd', subjects: ['Circuit Theory', ' Electro magnetic', 'EEGC','UHV','EMI','DSD'] },
    { semester: '4th', subjects: ['Dsp', 'DCMT', 'NM','MPMC','NM LAB'] },
    

  ];

  const faculty = [
    { name: 'S.K Mishra', designation: 'HOD', email: 'akumar@bitmesra.ac.in' },
    { name: 'Ms. S. Verma', designation: 'Assistant Professor', email: 'sverma@bitmesra.ac.in' },
  ];

  const seniors = [
    { name: 'Rohan Gupta', company: 'Google', package: '25 LPA' },
    { name: 'Anjali Sharma', company: 'Microsoft', package: '30 LPA' },
  ];

  return (
    <div>
      <Header />
      <Section
        id="notes"
        title="Notes"
        description="Semester-wise and subject-wise notes are available here."
        data={notes}
        type="notes"
      />
      <Section
        id="faculty"
        title="Faculty Details"
        description="Meet the department's experienced professors and staff."
        data={faculty}
        type="faculty"
      />
      <Section
        id="seniors"
        title="Placed Seniors"
        description="Explore details about alumni and their placements."
        data={seniors}
        type="seniors"
      />
      <Footer />
    </div>
  );
}

export default App;