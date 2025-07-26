/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectPage from 'pages/ProjectPage';
import NotFoundPage from 'pages/NotFoundPage';

import { ProjectDetailPage } from 'pages/ProjectDetailPage';
import { DiscussProjectPage } from 'pages/DiscussProjectPage';
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage';
import TermsAndConditionsPage from 'pages/TermsAndConditionsPage';
import TradeLicensePage from 'pages/TradeLicensePage';

import './assets/css/styles.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route exact path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route exact path="/trade-license" element={<TradeLicensePage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
