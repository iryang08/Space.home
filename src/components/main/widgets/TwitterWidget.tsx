'use client';

import React, { useEffect, useRef } from 'react';

interface TwitterWidgetProps {
  username?: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (element?: HTMLElement | null) => void;
      };
    };
  }
}

export function TwitterWidget({ username = 'GJA_cmsn' }: TwitterWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. 이미 스크립트가 로드되어 있는 경우 다시 파싱 수행
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(containerRef.current);
      return;
    }

    // 2. 스크립트가 없는 경우 X(트위터) 스크립트 태그 동적 추가
    const script = document.createElement('script');
    script.src = 'https://platform.x.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    
    script.onload = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(containerRef.current);
      }
    };

    document.body.appendChild(script);
  }, [username]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '350px',
        maxHeight: '600px',
        overflowY: 'auto',
        borderRadius: '12px',
        background: '#ffffff',
      }}
    >
      <a
        className="twitter-timeline"
        data-theme="light"
        data-height="550"
        href={`https://x.com/${username}?ref_src=twsrc%5Etfw`}
      >
        Posts by {username}
      </a>
    </div>
  );
}
