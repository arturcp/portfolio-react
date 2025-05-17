import { Suspense, lazy, useEffect } from 'react';

import Intro from './Intro';

import { bindEvents } from './EventBinder';

const PageLeft = lazy(() => import('./PageLeft.jsx'));
const PageRight = lazy(() => import('./PageRight.jsx'));

export default function SplitLayout() {
  useEffect(() => {
    bindEvents();
  }, [])

  return(
    <div id="splitlayout" className="splitlayout scheme-1">
      <Intro />
      <Suspense fallback={<div>Loading...</div>}>
        <PageLeft />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <PageRight />
      </Suspense>

      <a href="#" className="back back-right" title="back to intro">&rarr;</a>
      <a href="#" className="back back-left" title="back to intro">&larr;</a>
    </div>
  )
}
