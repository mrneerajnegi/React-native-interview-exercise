import {mobiles} from '../../Data/mockdata';

export const searchByCatProd = keyword => {
  var filteredList = [];
  mobiles.forEach(category => {
    if (category.title.toLowerCase().includes(keyword.toLowerCase())) {
      return filteredList.push(category);
    } else {
      const products = category.data.filter(value =>
        value.name.toLowerCase().includes(keyword.toLowerCase()),
      );
      if (products.length > 0)
        filteredList.push({title: category.title, data: products});
    }
  });
  return filteredList;
};
