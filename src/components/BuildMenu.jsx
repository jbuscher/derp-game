import React from 'react';
import { buildSkeleton, clear } from '../clientApi/api';

const BuildMenu = () => (
  <div>
    <button type="button" onClick={buildSkeleton}>BuildSkeleton</button>
    <button type="button" onClick={clear}>Clear</button>
  </div>
);
export default BuildMenu;
