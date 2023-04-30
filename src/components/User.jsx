import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex  items-center shirink-0">
      <img
        src={photoURL}
        alt={displayName}
        className="w-6 h-6 mr-1 rounded-full"
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
