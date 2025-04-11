import sqlite3 from 'better-sqlite3';

const db = sqlite3('meals.db');

// These are the exact titles you want to delete:
const titlesToDelete = [
  'aaaaaaaaaaaaaaa',
  'aaaaaaaaaaaaaaaaaa',
  'aaaaaaaaaaaa',
  'qqqqqqqqqqqqq'
];

titlesToDelete.forEach(title => {
  const result = db.prepare('DELETE FROM meals WHERE title = ?').run(title);
  console.log(`Deleted ${result.changes} meal(s) with title: ${title}`);
});

console.log('✅ Cleanup complete!');
