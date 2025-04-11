import sqlite3 from 'better-sqlite3';

const db = sqlite3('meals.db');

// List all test meal titles you want to remove
const titlesToDelete = [
  'aaaaaaaaaaaaaa',
  'azzu',
  'rrrrr',
  'eeeeeeeee',
  'qqqqqqq',
  'pppppppppppppppp',
  'alaaadinnnn'
];

titlesToDelete.forEach(title => {
  const result = db.prepare('DELETE FROM meals WHERE title = ?').run(title);
  console.log(`Deleted ${result.changes} meal(s) with title: ${title}`);
});

console.log('Cleanup complete!');
