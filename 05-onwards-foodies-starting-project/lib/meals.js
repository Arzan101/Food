import sql from 'better-sqlite3';
import { resolve } from 'styled-jsx/css';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve)=>setTimeout(resolve,2000));
    return db.prepare('SELECT * FROM  meals').all();
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export function saveMeal(meal){
    meal.slug = slugify(meal.title, { lower:true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.split('.').pop();
    const fileName = `${meal.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${fileName}`)
}


