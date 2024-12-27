import axios from "axios";

export default class RestaurantService {
  private baseUrl = 'https://api-sandbox.developers.deliveroo.com';
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  // Méthode pour obtenir les restaurants
  async getBrandId() {
    try {
      // Remplacez 'site_id' par la valeur réelle du site
      const options = {
        method: 'GET',
        url: `${this.baseUrl}/site/v1/restaurant_locations/1593`, // Remplacer '1593' par votre site_id
        headers: {
          accept: 'application/json',
          authorization: `Bearer ${this.accessToken}`,
        },
      };

      // Effectuer la requête avec axios
      const response = await axios.request(options);
      console.log(response.data); // Affiche les données de la réponse
    } catch (error: any) {
      console.error("Error fetching restaurants:", error);
    }
  }

  async uploadMenu() {

    const options = {
        method: 'PUT',
        url: 'https://api-sandbox.developers.deliveroo.com/menu/v1/brands/bc69eb7c-9cf4-4ac5-8684-9ea076493133/menus/20',
        headers: {accept: 'application/json',authorization: `Bearer ${this.accessToken}`, 'content-type': 'application/json'},
        data: {
          menu: {
            categories: [
              {
                name: {en: 'Porridge 🥣'},
                description: {en: 'Freshly made porridge'},
                id: 'porridge',
                item_ids: ['porridge_blueberries', 'porridge_banana']
              },
              {
                id: 'drinks',
                item_ids: ['tea', 'coffee', 'orange_juice'],
                name: {en: 'Drinks ☕️'}
              },
              {
                id: 'breakfast-bundle',
                item_ids: ['breakfast-bundle'],
                name: {en: 'Breakfast bundle 📦'}
              }
            ],
            items: [
              {
                contains_alcohol: false,
                description: {en: 'Porridge with a drink of your choice.'},
                diets: ['Vegan', 'Gluten intolerance'],
                external_data: '',
                barcodes: ['725272730706', '9780201379624', '4605664000050'],
                id: 'orange_juice',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: true,
                max_quantity: null,
                name: {en: 'Orange juice'},
                operational_name: 'orange-juice',
                plu: 'orange_juice_$69',
                price_info: {
                  overrides: [{id: 'breakfast-bundle', price: 0, type: 'ITEM'}],
                  price: 250
                },
                tax_rate: '20',
                type: 'ITEM'
              },
              {
                contains_alcohol: false,
                description: {en: 'Porridge with a drink of your choice.'},
                external_data: '',
                barcodes: ['5012345678900', '3014260115531'],
                id: 'breakfast-bundle',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: true,
                max_quantity: null,
                modifier_ids: ['choose_your_porridge', 'choose_your_drink'],
                name: {en: 'Breakfast bundle'},
                operational_name: 'Breakfast bundle',
                plu: 'breakfast_bundle123',
                price_info: {price: 450},
                tax_rate: '20',
                type: 'ITEM'
              },
              {
                allergies: ['milk'],
                contains_alcohol: false,
                description: {en: 'Porridge with blueberries and cinnamon'},
                external_data: '',
                highlights: ['in_store_price'],
                barcodes: ['50123452'],
                id: 'porridge_blueberries',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: true,
                max_quantity: 2,
                modifier_ids: ['extra_toppings'],
                name: {en: 'Porridge with blueberries'},
                nutritional_info: {energy_kcal: {high: 456, low: 123}, hfss: false},
                operational_name: 'Porridge with blueberries',
                plu: 'porridge_blueberries123',
                price_info: {overrides: [{id: 'breakfast-bundle', price: 0, type: 'ITEM'}], price: 350},
                tax_rate: '20',
                type: 'ITEM'
              },
              {
                contains_alcohol: false,
                description: {en: 'incredible milk'},
                external_data: '',
                barcodes: ['799439112766'],
                id: 'whole_milk',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: true,
                max_quantity: null,
                name: {en: 'Whole milk'},
                operational_name: 'whole-milk',
                plu: 'whole_milk_$39',
                price_info: {price: 0},
                tax_rate: '20',
                type: 'CHOICE'
              },
              {
                contains_alcohol: false,
                description: {en: 'Porridge with a drink of your choice.'},
                external_data: '',
                barcodes: ['5024121099847'],
                id: 'coffee',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: true,
                max_quantity: 2,
                modifier_ids: ['choose_milk'],
                name: {en: 'Coffee'},
                operational_name: 'coffee',
                plu: 'coffee_$78',
                price_info: {overrides: [{id: 'breakfast-bundle', price: 0, type: 'ITEM'}], price: 250},
                tax_rate: '20',
                type: 'ITEM'
              },
              {
                contains_alcohol: false,
                description: {en: 'Porridge with a drink of your choice.'},
                external_data: '',
                barcodes: ['0799439112766'],
                id: 'tea',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: true,
                max_quantity: 4,
                modifier_ids: ['choose_milk'],
                name: {en: 'Tea'},
                operational_name: 'tea',
                plu: 'tea_$23',
                price_info: {overrides: [{id: 'breakfast-bundle', price: 0, type: 'ITEM'}], price: 150},
                tax_rate: '20',
                type: 'ITEM'
              },
              {
                allergies: ['peanuts'],
                contains_alcohol: false,
                description: {en: 'Crunchy peanut butter'},
                external_data: '',
                barcodes: ['5024121519116'],
                id: 'peanut_butter',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: false,
                max_quantity: 2,
                name: {en: 'Peanut butter'},
                operational_name: 'peanut-butter',
                plu: 'peanut_butter_123',
                price_info: {price: 100},
                tax_rate: '20',
                type: 'CHOICE'
              },
              {
                contains_alcohol: false,
                description: {en: 'Granola'},
                external_data: '',
                barcodes: ['1234567890128'],
                id: 'granola',
                is_eligible_as_replacement: false,
                is_eligible_for_substitution: false,
                max_quantity: 2,
                name: {en: 'Granola'},
                operational_name: 'granola',
                plu: 'granola_123',
                price_info: {price: 100},
                tax_rate: '20',
                type: 'CHOICE'
              },
              {
                contains_alcohol: false,
                description: {en: 'no milk inside'},
                external_data: '',
                barcodes: ['5060040253731'],
                id: 'no_milk',
                is_eligible_as_replacement: true,
                is_eligible_for_substitution: true,
                max_quantity: 2,
                name: {en: 'No milk'},
                operational_name: 'no-milk',
                plu: 'no_milk_$49',
                price_info: {price: 0},
                tax_rate: '20',
                type: 'CHOICE'
              },
              {
                contains_alcohol: false,
                description: {en: 'Honey'},
                external_data: '',
                barcodes: ['3560070323067'],
                id: 'honey',
                is_eligible_as_replacement: false,
                is_eligible_for_substitution: true,
                max_quantity: null,
                name: {en: 'Honey'},
                operational_name: 'honey',
                plu: 'honey_123',
                price_info: {price: 0},
                tax_rate: '20',
                type: 'CHOICE'
              },
              {
                allergies: ['milk'],
                contains_alcohol: false,
                description: {en: 'Porridge with bananas and cinnamon'},
                external_data: '',
                barcodes: ['5000168036755'],
                id: 'porridge_banana',
                is_eligible_as_replacement: false,
                is_eligible_for_substitution: true,
                max_quantity: 2,
                modifier_ids: ['extra_toppings'],
                name: {en: 'Porridge with bananas'},
                operational_name: 'porridge-ban',
                plu: 'porridge_banana123',
                price_info: {overrides: [{id: 'breakfast-bundle', price: 0, type: 'ITEM'}], price: 350},
                tax_rate: '20',
                type: 'ITEM'
              }
            ],
            mealtimes: [
                {
                  category_ids: ['breakfast-bundle', 'porridge', 'drinks'],
                  description: {
                    en: 'Best breakfast menu in town! Everything on the menu is freshly made at the start of the day.'
                  },
                  id: 'breakfast-menu',
                  image: { url: 'https://res.cloudinary.com/dt04wtcwf/image/upload/v1713628668/cld-sample-5.jpg' },
                  name: { en: 'Breakfast menu' },
                  schedule: [
                    { 
                      day_of_week: 0, 
                      time_periods: [
                        { start: '00:00', end: '11:59' }
                      ]
                    },
                    { 
                      day_of_week: 1, 
                      time_periods: [
                        { start: '00:00', end: '10:59' }
                      ]
                    },
                    { 
                      day_of_week: 2, 
                      time_periods: [
                        { start: '00:00', end: '10:59' }
                      ]
                    },
                    { 
                      day_of_week: 3, 
                      time_periods: [
                        { start: '00:00', end: '10:59' }
                      ]
                    },
                    { 
                      day_of_week: 4, 
                      time_periods: [
                        { start: '00:00', end: '10:59' }
                      ]
                    },
                    { 
                      day_of_week: 5, 
                      time_periods: [
                        { start: '00:00', end: '10:59' }
                      ]
                    },
                    { 
                      day_of_week: 6, 
                      time_periods: [
                        { start: '00:00', end: '11:59' }
                      ]
                    }
                  ]
                },
                {
                  category_ids: ['breakfast-bundle', 'porridge', 'drinks'],
                  description: {
                    en: 'Delicious lunch options for every taste.'
                  },
                  id: 'lunch-menu',
                  image: { url: 'https://res.cloudinary.com/dt04wtcwf/image/upload/v1713628668/cld-sample-6.jpg' },
                  name: { en: 'Lunch menu' },
                  schedule: [
                    { 
                      day_of_week: 0, 
                      time_periods: [
                        { start: '12:00', end: '23:59' }
                      ]
                    },
                    { 
                      day_of_week: 1, 
                      time_periods: [
                        { start: '11:00', end: '23:59' }
                      ]
                    },
                    { 
                      day_of_week: 2, 
                      time_periods: [
                        { start: '11:00', end: '23:59' }
                      ]
                    },
                    { 
                      day_of_week: 3, 
                      time_periods: [
                        { start: '11:00', end: '23:59' }
                      ]
                    },
                    { 
                      day_of_week: 4, 
                      time_periods: [
                        { start: '11:00', end: '23:59' }
                      ]
                    },
                    { 
                      day_of_week: 5, 
                      time_periods: [
                        { start: '11:00', end: '23:59' }
                      ]
                    },
                    { 
                      day_of_week: 6, 
                      time_periods: [
                        { start: '12:00', end: '23:59' }
                      ]
                    }
                  ]
                }
              ],        
            modifiers: [
              {
                description: {en: 'you can choice your modiiers here'},
                id: 'choose_milk',
                item_ids: ['no_milk', 'whole_milk'],
                max_selection: 1,
                min_selection: 0,
                name: {en: 'Choose milk'},
                repeatable: true
              },
              {
                description: {en: 'you can choice your modiiers here'},
                id: 'choose_your_porridge',
                item_ids: ['porridge_blueberries', 'porridge_banana'],
                max_selection: 1,
                min_selection: 0,
                name: {en: 'Choose your porridge'},
                repeatable: true
              },
              {
                description: {en: 'you can choice your modiiers here'},
                id: 'choose_your_drink',
                item_ids: ['tea', 'coffee', 'orange_juice'],
                max_selection: 1,
                min_selection: 1,
                name: {en: 'Choose your drink'},
                repeatable: true
              },
              {
                description: {en: 'you can choice your modiiers here'},
                id: 'extra_toppings',
                item_ids: ['honey', 'peanut_butter', 'granola'],
                max_selection: 3,
                min_selection: 0,
                name: {en: 'Choice of extra toppings 🍯'},
                repeatable: false
              }
            ],
            experience: 'aisles'
          },
          name: 'site-234 menu',
          site_ids: ['1593']
        }
      };
      
      axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    }

async getMenu(){
    const options = {
        method: 'GET',
        url: 'https://api-sandbox.developers.deliveroo.com/menu/v1/brands/bc69eb7c-9cf4-4ac5-8684-9ea076493133/menus/1',
        headers: {accept: 'application/json', authorization: `Bearer ${this.accessToken}`,}
      };
      
      axios
        .request(options)
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
}
  
  

//   async getMenu() {
//     try {
//         const options = {
//             method: 'GET',
//             url: 'https://api-sandbox.developers.deliveroo.com/menu/v1/brands/bc69eb7c-9cf4-4ac5-8684-9ea076493133/menus',
//             headers: {
//               accept: 'application/json',
//               authorization: `Bearer ${this.accessToken}`,
//             }
//           };
          
//           const response = await axios.request(options);
//           console.log(response.data);
//         }catch (error: any) {
//             console.log("Error fetching menu:", error)
//         }
    
//     }
    

//     async getAllRestaurants() {
//         try {
//             const response = await axios.get(`${this.baseUrl}/site/v1/restaurant_locations/1593`, {
//                 headers: {
//                     Authorization: `Bearer ${this.accessToken}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//             return response.data.brands
//         } catch (err: any) {
//             console.error('Error fetching restaurant:', err.response?.data || err.message);
//             throw new Error('Unable to fetch restaurants.');
//         }
//     }
}