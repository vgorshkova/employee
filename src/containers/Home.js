import React from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

export default function Home() {

  return (
    <DocumentTitle title="About app">
      <div>
        <h1>Small demo application</h1>
        <p>Please, start with the right menu items.</p>
        <p>Thanks for attention.</p>
      </div>
    </DocumentTitle>
  );
}
