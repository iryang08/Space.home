'use client';

import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

interface TwitterWidgetProps {
  username?: string;
}

export function TwitterWidget({ username = '내_트위터_아이디' }: TwitterWidgetProps) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '320px', overflowY: 'auto', borderRadius: '12px' }}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={username}
        options={{
          height: '400',
          theme: 'dark',
        }}
        placeholder={
          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--faint)' }}>
            트윗 로딩 중...
          </div>
        }
      />
    </div>
  );
}
