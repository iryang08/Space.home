'use client';

import React, { useEffect } from 'react';

interface TwitterWidgetProps {
  username?: string;
}

export function TwitterWidget({ username = 'GJA_cmsn' }: TwitterWidgetProps) {
  useEffect(() => {
    // 트위터 타임라인 스크립트 로드
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '350px', overflowY: 'auto', borderRadius: '12px' }}>
      <a
        className="twitter-timeline"
        data-theme="dark"
        data-height="400"
        href={`https://twitter.com/${username}`}
      >
        Tweets by {username}
      </a>
    </div>
  );
}
