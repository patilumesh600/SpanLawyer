/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import LandingPage from 'containers/LandingPage';
import Dashboard from 'containers/LawyerDashboard';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProjHead from 'components/ProjectHeader';

import ProjFooter from 'components/ProjectFooter';
import ProductResults from 'containers/ProductResults';
import LawyerProfile from 'containers/LawyerProfile';
import Login from 'containers/Login';
import UserProfile from 'containers/UserProfile';


import LawyerProfHeader from 'components/LawyerProfileHeader';
import LawyerProfFooter from 'components/LawyerProfileFooter';


import GlobalStyle from '../../global-styles';

const secHeight = (window.location.pathname === '/Login') ? null : 5

const ContentSec = styled.div`
  margin-bottom: 10%;
`;

export default function App() {

  const standAlonePages = ["/login"]; // use smaller cases only.
  const lawyersPages = ["/dashboard"]; // use smaller cases only.
  const pageContent= (lawyersPages.indexOf(window.location.pathname.toLowerCase()) === -1) ?
      // User profile related pages comes here.  
      <div>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        {(standAlonePages.indexOf(window.location.pathname.toLowerCase()) != -1) ? null : <ProjHead />}
        <ContentSec style={{ marginTop: (standAlonePages.indexOf(window.location.pathname.toLowerCase()) != -1) ? '0' : '5%' }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/features" component={FeaturePage} />
            <Route path="/Login" component={Login} />
            <Route path="/profile" component={LawyerProfile} />
            <Route path="/SearchResult" component={ProductResults} />
            <Route path="/MyAccount" component={UserProfile} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </ContentSec>
        {(standAlonePages.indexOf(window.location.pathname.toLowerCase()) != -1) ? null : <ProjFooter />}
        <GlobalStyle />
      </div>
      :
      // Lawyer profile related pages comes here.
      <div>
        <LawyerProfHeader />
       
        <ContentSec>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="" component={NotFoundPage} />
          </Switch>
        </ContentSec>
        <LawyerProfFooter />
        <GlobalStyle />
      </div>;

  return pageContent;
}
