'use client';

import React from 'react';

interface TwitterWidgetProps {
  tweetId?: string; // 표시하고 싶은 특정 트윗 ID
  username?: string;
}

export function TwitterWidget({ 
  tweetId = '1700000000000000000', // 여기에 실제 트윗 ID를 넣으세요
  username = 'GJA_cmsn' 
}: TwitterWidgetProps) {
  return (
    <div className="w-full h-full p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 flex flex-col justify-between shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 fill-current text-black" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="font-bold text-sm text-gray-800">@{username}</span>
        </div>
        <a
          href={`https://x.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          X(트위터) 바로가기
        </a>
      </div>

      <div className="py-6 text-center text-gray-500 text-sm">
        <p className="font-medium text-gray-700 mb-1">최신 소식 및 커미션 안내</p>
        <p className="text-xs text-gray-400 mb-4">X(트위터)에서 실시간 게시글을 확인하실 수 있습니다.</p>
        <a
          href={`https://x.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-500 hover:underline"
        >
          @{username} 프로필 방문하기 →
        </a>
      </div>
    </div>
  );
}
