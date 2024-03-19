import { productsData } from './product.js';
import { producty } from './product.js';

const productsDOM = document.querySelector('.watch-product');
const productsys = document.querySelector('.watch-pro');

//class Products {
//  getProducts() {
//    return { productsData, producty };
//  }
//}

class Products {
  getProducts() {
    return { productsData }; // Returning productsy as well
  }
}
class Productsing {
  getProductsy() {
    return { producty }; // Returning productsy as well
  }
}
class UI {
  displayProducts(products) {
    let result = '';
    products.forEach((item) => {
      result += `
    <div class="px-2 p-2">
      <label for="watch">
      <input
      data-id=${item.id}
      type="checkbox"
      class="form-checkbox rounded text-orange-500 focus:ring-orange-500"
      />
      ${item.title}
     </label>
    </div>`;
    });
    //productsDOM.innerHTML = '';
    //productsys.innerHTML = '';

    // Display the products based on the clicked button
    if (products === productsData) {
      productsDOM.innerHTML = result;
    } else if (products === producty) {
      productsys.innerHTML = result;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const products = new Products();
  const Productsin = new Productsing();
  const ui = new UI();
  const { productsData } = products.getProducts();
  const { producty } = Productsin.getProductsy();
  ui.displayProducts(productsData);
  console.log(productsData);
  ui.displayProducts(producty);
});
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', (event) => {
      const accordionButton = event.target.closest('.accordion-button');
      if (!accordionButton) return;

      const accordionItem = accordionButton.parentNode; // تغییر این خط
      const isActive = accordionItem.classList.toggle('active');

      accordions.forEach((acc) => {
        if (acc !== accordion) {
          acc.querySelectorAll('.accordion-item').forEach((item) => {
            item.classList.remove('active');
            item.querySelector('.accordion-content').classList.add('hidden');
          });
        }
      });

      const accordionContent = accordionItem.querySelector('.accordion-content');
      accordionContent.classList.toggle('hidden');
    });
  });
});
