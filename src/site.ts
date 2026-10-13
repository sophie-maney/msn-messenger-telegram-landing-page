const repo = 'https://github.com/sophie-maney/msn-messenger-telegram-releases';
const version = '0.9';

export const release = {
  version,
  dmg: `${repo}/releases/download/v${version}/Windows-Live-Messenger-${version}.dmg`,
  notes: `${repo}/releases/tag/v${version}`,
  allReleases: `${repo}/releases`,
};

/** Mirrors the feature checklist in the app's README. */
export const features: { group: string; items: [label: string, done: boolean][] }[] = [
  {
    group: 'Account',
    items: [
      ['Sign in with phone number, code and 2FA password', true],
      ['Sign in with a QR code', true],
      ['Personal message (your bio)', true],
      ['Online status (Busy and Away are only shown to you)', true],
      ['Change your picture, name and colours in the Scene dialog', true],
      ['Multiple accounts', true],
      ['Appear offline', false],
    ],
  },
  {
    group: 'Contact list',
    items: [
      ['People, groups and channels, grouped the Messenger way', true],
      ['Favorites from your pinned chats', true],
      ['Chat folders and Archived Chats as their own sections', true],
      ['Profile colours as Messenger colour schemes', true],
      ['Search contacts', true],
      ['Unread counts and notifications', true],
      ['Start a new chat or add contacts', false],
    ],
  },
  {
    group: 'Messages',
    items: [
      ['Send and receive text, with formatting and links', true],
      ['Replies and reactions', true],
      ['Edit and delete messages', true],
      ['Custom emoji and the emoji picker', true],
      ['Drafts', true],
      ['Forward messages', false],
      ['Typing indicators', false],
      ['Read receipts', false],
      ['Search in a chat', false],
    ],
  },
  {
    group: 'Media',
    items: [
      ['Photos, videos, round videos and GIFs', true],
      ['Files, voice notes and audio', true],
      ['Stickers, animated and video ones too', true],
      ['Saved GIFs', true],
      ['Send photos and files by picker, drag and drop or paste', true],
      ['Polls and quizzes', true],
      ['Record voice notes', false],
      ['Locations and shared contacts', false],
    ],
  },
  {
    group: 'Chats',
    items: [
      ['One-to-one chats', true],
      ['Groups with a member list', true],
      ['Channels', true],
      ['Join and leave groups and channels', true],
      ['Forum topics', false],
      ['Secret chats', false],
      ['Voice and video calls', false],
    ],
  },
];
