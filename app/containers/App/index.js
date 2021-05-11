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
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ProjHead from 'components/ProjectHeader';
import ProjFooter from 'components/ProjectFooter';
import ProductResults from 'containers/ProductResults';
import LawyerProfile from 'containers/LawyerProfile';
import Login from 'containers/Login';

import GlobalStyle from '../../global-styles';

const ContentSec = styled.div`
  margin-bottom: 10%;
  margin-top: 5%;
`;

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <ProjHead />
      <ContentSec>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/Login" component={Login} />
          <Route path="/profile" component={LawyerProfile} />
          <Route path="/SearchResult" component={ProductResults} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentSec>
      <ProjFooter />
      <GlobalStyle />
    </div>
  );
}
