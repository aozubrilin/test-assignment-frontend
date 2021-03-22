import * as React from 'react';
import ImagesList from '../components/images-list/images-list';
import SearchForm from '../components/search-form/search-form';

const MainPage = () => {
  return (
    <React.Fragment>
      <main className="main-page wrapper">
        <SearchForm />
        <ImagesList />
      </main>
    </React.Fragment>
  );
};

export default MainPage;
