import React from 'react';
import { BpkCode } from 'bpk-component-code';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import FlightCalendar from './Calendar';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={c('App')}>
    <header className={c('App__header')}>
      <div className={c('App__header-inner')}>
        <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
      </div>
    </header>
    <main className={c('App__main')}>
      <div>
        <FlightCalendar/>
      </div>
      <BpkButton className={c('App__continue')} onClick={() => alert('It works!')}>Continue</BpkButton>
    </main>
  </div>
);

export default App;