'use server';

 export async function shareMeal(formData){
    
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      intructions: formData.get('instructions'),
      images: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }
    console.log(meal)
  }