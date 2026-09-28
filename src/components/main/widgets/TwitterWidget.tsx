'use client';

import React, { useEffect, useRef } from 'react';

interface TwitterWidgetProps {
  username?: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        createTimeline: (
          dataSource: { sourceType: string; screenName: string },
          targetEl: HTMLElement,
          options?: Record<string, any>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

export function TwitterWidget({ username = 'GJA_cmsn' }: TwitterWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderTimeline = () => {
      if (containerRef.current && window.twttr?.widgets) {
        // 기존 컨텐츠 초기화
        containerRef.current.innerHTML = '';

        // 최근 게시물 타임라인 생성 (어두운 테마)
        window.twttr.widgets.createTimeline(
          {
            sourceType: 'profile',
            screenName: username,
          },
          containerRef.current,
          {
            theme: 'light', // 밝은 테마
            height: 450,
            chrome: 'noheader nofooter noborders transparent', // 깔끔한 디자인 옵션
            tweetLimit: 3, // 최근 트윗 표시 수
          }
        );
      }
    };

    // 1. twttr 객체가 존재하면 바로 렌더링
    if (window.twttr?.widgets) {
      renderTimeline();
      return;
    }

    // 2. 스크립트가 없으면 동적 로드 후 렌더링
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    script.onload = () => renderTimeline();

    document.body.appendChild(script);
  }, [username]);

  return (
    <div 
      className="w-full h-full min-h-[300px] flex justify-center items-center p-3 rounded-2xl bg-[#15202b]"
      style={{ overflowY: 'auto' }}
    >
      <div ref={containerRef} className="w-full flex justify-center" />
    </div>
  );
}
