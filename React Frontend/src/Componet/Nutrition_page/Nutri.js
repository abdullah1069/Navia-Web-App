import React, { useEffect, useState } from 'react';
import './Nutri.css';
import axios from 'axios';


// Sample food dictionary
let foodDictionary = {
  baked_potato: { Calories: 93, Carbs: 21, Protein: 2.2, Fat: 0.2, Fiber: 2.2, Sugar: 1, Sodium: 6, Potassium: 535, Cholesterol: 0, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  hot_dog: { Calories: 150, Carbs: 1, Protein: 5, Fat: 13, Fiber: 0, Sugar: 0, Sodium: 500, Potassium: 50, Cholesterol: 20, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  burger: { Calories: 250, Carbs: 30, Protein: 12, Fat: 10, Fiber: 2, Sugar: 5, Sodium: 450, Potassium: 200, Cholesterol: 30, name:"Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  pizza: { Calories: 285, Carbs: 36, Protein: 12, Fat: 10, Fiber: 2, Sugar: 3, Sodium: 600, Potassium: 150, Cholesterol: 25, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  crispy_chicken: { Calories: 220, Carbs: 15, Protein: 18, Fat: 12, Fiber: 0, Sugar: 0, Sodium: 650, Potassium: 120, Cholesterol: 45, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  sandwich: { Calories: 250, Carbs: 45, Protein: 10, Fat: 6, Fiber: 3, Sugar: 5, Sodium: 800, Potassium: 100, Cholesterol: 15, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  donut: { Calories: 200, Carbs: 25, Protein: 2, Fat: 10, Fiber: 1, Sugar: 10, Sodium: 300, Potassium: 50, Cholesterol: 5, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  taco: { Calories: 150, Carbs: 20, Protein: 10, Fat: 5, Fiber: 2, Sugar: 1, Sodium: 300, Potassium: 150, Cholesterol: 20, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  fries: { Calories: 365, Carbs: 63, Protein: 3.4, Fat: 14, Fiber: 6, Sugar: 0.6, Sodium: 590, Potassium: 770, Cholesterol: 0, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  taquito: { Calories: 190, Carbs: 18, Protein: 8, Fat: 10, Fiber: 1, Sugar: 0, Sodium: 420, Potassium: 80, Cholesterol: 15, name: "Fast food with perishable ingredients can spoil within 2 to 4 hours at room temperature."},
  cucumber: { Calories: 16, Carbs: 3.6, Protein: 0.6, Fat: 0.2, Fiber: 0.5, Sugar: 1.7, Sodium: 2, Potassium: 136, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator." },
  capsicum: { Calories: 20, Carbs: 4.6, Protein: 0.9, Fat: 0.2, Fiber: 1.7, Sugar: 2.3, Sodium: 9, Potassium: 190, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  onion: { Calories: 40, Carbs: 10, Protein: 1.1, Fat: 0.1, Fiber: 1.7, Sugar: 4.7, Sodium: 4, Potassium: 146, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  potato: { Calories: 77, Carbs: 17, Protein: 2, Fat: 0.1, Fiber: 2.2, Sugar: 0.8, Sodium: 6, Potassium: 425, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  lemon: { Calories: 29, Carbs: 9, Protein: 1.1, Fat: 0.3, Fiber: 2.8, Sugar: 2.5, Sodium: 2, Potassium: 138, Cholesterol: 0, name: "lemon can last approximately 5 to 7 weeks when stored properly in the refrigerator."  },
  raddish: { Calories: 16, Carbs: 3.4, Protein: 0.7, Fat: 0.1, Fiber: 1.6, Sugar: 1.9, Sodium: 39, Potassium: 233, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  beetroot: { Calories: 43, Carbs: 10, Protein: 1.6, Fat: 0.2, Fiber: 2.8, Sugar: 8.4, Sodium: 78, Potassium: 325, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  cabbage: { Calories: 25, Carbs: 6, Protein: 1.3, Fat: 0.1, Fiber: 2.5, Sugar: 3.2, Sodium: 18, Potassium: 170, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  lettuce: { Calories: 5, Carbs: 1, Protein: 0.5, Fat: 0.1, Fiber: 0.5, Sugar: 0.5, Sodium: 5, Potassium: 194, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  spinach: { Calories: 23, Carbs: 4, Protein: 2.9, Fat: 0.4, Fiber: 2.2, Sugar: 0.4, Sodium: 79, Potassium: 558, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  soy_bean: { Calories: 173, Carbs: 9, Protein: 16, Fat: 9, Fiber: 6, Sugar: 3, Sodium: 15, Potassium: 515, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  cauliflower: { Calories: 25, Carbs: 5, Protein: 2, Fat: 0.3, Fiber: 2, Sugar: 2, Sodium: 30, Potassium: 299, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  bell_pepper: { Calories: 31, Carbs: 6, Protein: 1, Fat: 0.3, Fiber: 2.1, Sugar: 4.2, Sodium: 4, Potassium: 340, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  chilli_pepper: { Calories: 40, Carbs: 9, Protein: 2, Fat: 1, Fiber: 4.5, Sugar: 5, Sodium: 9, Potassium: 322, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  turnip: { Calories: 28, Carbs: 6, Protein: 0.9, Fat: 0.1, Fiber: 1.8, Sugar: 3.8, Sodium: 67, Potassium: 233, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  corn: { Calories: 96, Carbs: 19, Protein: 3, Fat: 1.5, Fiber: 2.7, Sugar: 6.3, Sodium: 15, Potassium: 270, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  sweetcorn: { Calories: 86, Carbs: 19, Protein: 2.7, Fat: 1.2, Fiber: 2.7, Sugar: 6.3, Sodium: 12, Potassium: 270, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  sweet_potato: { Calories: 86, Carbs: 20, Protein: 1.6, Fat: 0.1, Fiber: 3, Sugar: 4.2, Sodium: 55, Potassium: 337, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  paprika: { Calories: 26, Carbs: 6, Protein: 1, Fat: 0.4, Fiber: 3.6, Sugar: 4.2, Sodium: 10, Potassium: 340, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  jalepeno: { Calories: 29, Carbs: 6, Protein: 1.2, Fat: 0.4, Fiber: 2.8, Sugar: 4.1, Sodium: 3, Potassium: 201, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  ginger: { Calories: 80, Carbs: 18, Protein: 2, Fat: 0.8, Fiber: 2, Sugar: 1.7, Sodium: 13, Potassium: 415, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  garlic: { Calories: 149, Carbs: 33, Protein: 6, Fat: 1, Fiber: 2.1, Sugar: 1, Sodium: 17, Potassium: 401, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  peas: { Calories: 81, Carbs: 14, Protein: 5, Fat: 0.4, Fiber: 5.1, Sugar: 5, Sodium: 5, Potassium: 244, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  eggplant: { Calories: 25, Carbs: 6, Protein: 1, Fat: 0.2, Fiber: 3, Sugar: 3, Sodium: 2, Potassium: 229, Cholesterol: 0, name: "Most vegetables can last approximately 1 to 2 weeks when stored properly in the refrigerator."  },
  naan: { Calories: 320, Carbs: 50, Protein: 9, Fat: 8, Fiber: 3, Sugar: 2, Sodium: 700, Potassium: 100, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  navrattan_korma: { Calories: 300, Carbs: 15, Protein: 5, Fat: 20, Fiber: 3, Sugar: 5, Sodium: 300, Potassium: 400, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  palak_paneer: { Calories: 230, Carbs: 10, Protein: 12, Fat: 18, Fiber: 2, Sugar: 3, Sodium: 300, Potassium: 450, Cholesterol: 35, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  paneer_butter_masala: { Calories: 350, Carbs: 15, Protein: 10, Fat: 25, Fiber: 2, Sugar: 5, Sodium: 350, Potassium: 400, Cholesterol: 50, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  phirni: { Calories: 200, Carbs: 25, Protein: 5, Fat: 8, Fiber: 0, Sugar: 15, Sodium: 50, Potassium: 150, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  poha: { Calories: 150, Carbs: 30, Protein: 3, Fat: 1, Fiber: 2, Sugar: 1, Sodium: 10, Potassium: 100, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  poornalu: { Calories: 250, Carbs: 35, Protein: 4, Fat: 12, Fiber: 2, Sugar: 10, Sodium: 10, Potassium: 150, Cholesterol: 5, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  pootharekulu: { Calories: 300, Carbs: 40, Protein: 6, Fat: 15, Fiber: 1, Sugar: 20, Sodium: 10, Potassium: 150, Cholesterol: 5, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  rasgulla: { Calories: 180, Carbs: 35, Protein: 3, Fat: 1, Fiber: 0, Sugar: 25, Sodium: 20, Potassium: 50, Cholesterol: 5, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  sheera: { Calories: 200, Carbs: 30, Protein: 2, Fat: 8, Fiber: 1, Sugar: 20, Sodium: 5, Potassium: 100, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  shrikhand: { Calories: 300, Carbs: 40, Protein: 5, Fat: 15, Fiber: 0, Sugar: 30, Sodium: 20, Potassium: 150, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  sohan_papdi: { Calories: 400, Carbs: 80, Protein: 5, Fat: 10, Fiber: 2, Sugar: 50, Sodium: 30, Potassium: 100, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  unni_appam: { Calories: 200, Carbs: 30, Protein: 2, Fat: 8, Fiber: 1, Sugar: 15, Sodium: 10, Potassium: 50, Cholesterol: 5, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  karela_bharta: { Calories: 30, Carbs: 5, Protein: 2, Fat: 1, Fiber: 3, Sugar: 1, Sodium: 5, Potassium: 200, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  kofta: { Calories: 300, Carbs: 20, Protein: 10, Fat: 15, Fiber: 5, Sugar: 2, Sodium: 300, Potassium: 400, Cholesterol: 25, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  lassi: { Calories: 60, Carbs: 6, Protein: 3, Fat: 3, Fiber: 0, Sugar: 5, Sodium: 15, Potassium: 100, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  litti_chokha: { Calories: 250, Carbs: 30, Protein: 8, Fat: 12, Fiber: 4, Sugar: 2, Sodium: 320, Potassium: 380, Cholesterol: 15, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  lyangcha: { Calories: 200, Carbs: 25, Protein: 5, Fat: 10, Fiber: 2, Sugar: 15, Sodium: 50, Potassium: 150, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  makki_di_roti_sarson_da_saag: { Calories: 120, Carbs: 15, Protein: 3, Fat: 5, Fiber: 3, Sugar: 1, Sodium: 2, Potassium: 80, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  malpua: { Calories: 250, Carbs: 30, Protein: 5, Fat: 10, Fiber: 1, Sugar: 20, Sodium: 20, Potassium: 100, Cholesterol: 25, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  misi_roti: { Calories: 200, Carbs: 25, Protein: 5, Fat: 8, Fiber: 4, Sugar: 1, Sodium: 200, Potassium: 250, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  misti_doi: { Calories: 120, Carbs: 15, Protein: 3, Fat: 5, Fiber: 0, Sugar: 10, Sodium: 20, Potassium: 80, Cholesterol: 15, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  modak: { Calories: 300, Carbs: 40, Protein: 6, Fat: 15, Fiber: 1, Sugar: 20, Sodium: 10, Potassium: 150, Cholesterol: 5, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  dum_aloo: { Calories: 180, Carbs: 20, Protein: 5, Fat: 10, Fiber: 3, Sugar: 5, Sodium: 320, Potassium: 420, Cholesterol: 15, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  gajar_ka_halwa: { Calories: 250, Carbs: 40, Protein: 2, Fat: 10, Fiber: 3, Sugar: 30, Sodium: 50, Potassium: 280, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  ghevar: { Calories: 250, Carbs: 40, Protein: 5, Fat: 10, Fiber: 1, Sugar: 15, Sodium: 10, Potassium: 100, Cholesterol: 20, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  gulab_jamun: { Calories: 350, Carbs: 50, Protein: 4, Fat: 15, Fiber: 1, Sugar: 30, Sodium: 100, Potassium: 150, Cholesterol: 30, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  jalebi: { Calories: 459, Carbs: 65, Protein: 1, Fat: 21, Fiber: 0, Sugar: 50, Sodium: 200, Potassium: 50, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  kachori: { Calories: 300, Carbs: 30, Protein: 6, Fat: 18, Fiber: 3, Sugar: 2, Sodium: 450, Potassium: 200, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  kadai_paneer: { Calories: 250, Carbs: 10, Protein: 12, Fat: 20, Fiber: 2, Sugar: 5, Sodium: 300, Potassium: 350, Cholesterol: 50, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  kadhi_pakoda: { Calories: 150, Carbs: 15, Protein: 4, Fat: 8, Fiber: 1, Sugar: 2, Sodium: 260, Potassium: 360, Cholesterol: 7, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  kajjikaya: { Calories: 200, Carbs: 30, Protein: 2, Fat: 8, Fiber: 2, Sugar: 10, Sodium: 50, Potassium: 100, Cholesterol: 5, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  kalakand: { Calories: 310, Carbs: 45, Protein: 10, Fat: 12, Fiber: 0, Sugar: 40, Sodium: 200, Potassium: 300, Cholesterol: 30, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  chena_kheeri: { Calories: 150, Carbs: 20, Protein: 6, Fat: 8, Fiber: 1, Sugar: 15, Sodium: 100, Potassium: 180, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  chicken_razala: { Calories: 280, Carbs: 25, Protein: 22, Fat: 14, Fiber: 1, Sugar: 2, Sodium: 420, Potassium: 520, Cholesterol: 35, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  chicken_tikka: { Calories: 200, Carbs: 12, Protein: 22, Fat: 10, Fiber: 0.5, Sugar: 1, Sodium: 300, Potassium: 400, Cholesterol: 25, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  chicken_tikka_masala: { Calories: 240, Carbs: 15, Protein: 18, Fat: 12, Fiber: 1.5, Sugar: 2.5, Sodium: 350, Potassium: 450, Cholesterol: 28, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  chikki: { Calories: 130, Carbs: 18, Protein: 3, Fat: 6, Fiber: 1, Sugar: 10, Sodium: 160, Potassium: 260, Cholesterol: 2, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  daal_baati_churma: { Calories: 220, Carbs: 30, Protein: 8, Fat: 10, Fiber: 3, Sugar: 1.5, Sodium: 320, Potassium: 420, Cholesterol: 5, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  daal_puri: { Calories: 160, Carbs: 20, Protein: 4, Fat: 7, Fiber: 2, Sugar: 1, Sodium: 260, Potassium: 360, Cholesterol: 8, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  dal_makhani: { Calories: 250, Carbs: 22, Protein: 12, Fat: 15, Fiber: 3, Sugar: 2, Sodium: 380, Potassium: 480, Cholesterol: 10, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  dal_tadka: { Calories: 180, Carbs: 20, Protein: 8, Fat: 9, Fiber: 2.5, Sugar: 1.5, Sodium: 300, Potassium: 400, Cholesterol: 7, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  doodhpak: { Calories: 200, Carbs: 25, Protein: 6, Fat: 10, Fiber: 1, Sugar: 5, Sodium: 280, Potassium: 380, Cholesterol: 15, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  aloo_gobi: { Calories: 94, Carbs: 18, Protein: 3, Fat: 2, Fiber: 2.5, Sugar: 2, Sodium: 26, Potassium: 260, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  aloo_matar: { Calories: 180, Carbs: 22, Protein: 6, Fat: 9, Fiber: 4, Sugar: 3, Sodium: 320, Potassium: 420, Cholesterol: 12, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  aloo_methi: { Calories: 50, Carbs: 5, Protein: 4, Fat: 2, Fiber: 1.5, Sugar: 0, Sodium: 150, Potassium: 220, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  aloo_shimla_mirch: { Calories: 20, Carbs: 5, Protein: 1, Fat: 0.2, Fiber: 1.5, Sugar: 2.5, Sodium: 3, Potassium: 211, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  aloo_tikki: { Calories: 190, Carbs: 20, Protein: 10, Fat: 9, Fiber: 3, Sugar: 1, Sodium: 140, Potassium: 190, Cholesterol: 13, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  anarsa: { Calories: 350, Carbs: 80, Protein: 8, Fat: 1, Fiber: 0, Sugar: 40, Sodium: 10, Potassium: 100, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  biryani: { Calories: 200, Carbs: 35, Protein: 5, Fat: 3, Fiber: 1, Sugar: 0, Sodium: 100, Potassium: 100, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  boondi: { Calories: 300, Carbs: 70, Protein: 1, Fat: 0, Fiber: 0, Sugar: 35, Sodium: 5, Potassium: 50, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  butter_chicken: { Calories: 300, Carbs: 8, Protein: 18, Fat: 24, Fiber: 2, Sugar: 4, Sodium: 350, Potassium: 300, Cholesterol: 80, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  chapati: { Calories: 297, Carbs: 46, Protein: 11, Fat: 3, Fiber: 10, Sugar: 0, Sodium: 3, Potassium: 115, Cholesterol: 0, name: "Desi food can spoil within 1 to 2 days at room temperature."  },
  pear: { Calories: 57, Carbs: 15, Protein: 0.4, Fat: 0.1, Fiber: 3.1, Sugar: 9, Sodium: 1, Potassium: 119, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature."  },
  grapes: { Calories: 69, Carbs: 18, Protein: 0.7, Fat: 0.2, Fiber: 0.9, Sugar: 16, Sodium: 2, Potassium: 191, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature."  },
  orange: { Calories: 43, Carbs: 9, Protein: 1, Fat: 0.2, Fiber: 2.4, Sugar: 8, Sodium: 0, Potassium: 181, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature."  },
  kiwi: { Calories: 61, Carbs: 15, Protein: 1.1, Fat: 0.5, Fiber: 3, Sugar: 9, Sodium: 3, Potassium: 312, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature." },
  watermelon: { Calories: 30, Carbs: 8, Protein: 0.6, Fat: 0.2, Fiber: 0.4, Sugar: 6, Sodium: 1, Potassium: 112, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature."  },
  pomegranate: { Calories: 83, Carbs: 19, Protein: 1.7, Fat: 1.2, Fiber: 4, Sugar: 9, Sodium: 3, Potassium: 236, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature."  },
  pineapple: { Calories: 50, Carbs: 13, Protein: 0.5, Fat: 0.1, Fiber: 1.4, Sugar: 9, Sodium: 1, Potassium: 109, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature."  },
  mango: { Calories: 60, Carbs: 15, Protein: 0.8, Fat: 0.4, Fiber: 1.6, Sugar: 14, Sodium: 1, Potassium: 168, Cholesterol: 0, name: "this fruit can spoil within 5 to 7 days at room temperature."  },
  tomato: { Calories: 18, Carbs: 4, Protein: 1, Fat: 0.2, Fiber: 1.2, Sugar: 2.6, Sodium: 5, Potassium: 237, Cholesterol: 0, name: "tomato can spoil within 10 to 15 days at room temperature."  },
  tomatolow: { Calories: 18, Carbs: 4, Protein: 1, Fat: 0.2, Fiber: 1.2, Sugar: 2.6, Sodium: 5, Potassium: 237, Cholesterol: 0, name: "tomato can spoil within 1 to 5 days at room temperature."  },
  tomatomid: { Calories: 18, Carbs: 4, Protein: 1, Fat: 0.2, Fiber: 1.2, Sugar: 2.6, Sodium: 5, Potassium: 237, Cholesterol: 0, name: "tomato can spoil within 5 to 10 days at room temperature."  },
  tomatohigh: { Calories: 18, Carbs: 4, Protein: 1, Fat: 0.2, Fiber: 1.2, Sugar: 2.6, Sodium: 5, Potassium: 237, Cholesterol: 0, name: "tomato can spoil within 10 to 15 days at room temperature."  },
  carrot: { Calories: 41, Carbs: 10, Protein: 0.9, Fat: 0.2, Fiber: 2.8, Sugar: 4.7, Sodium: 69, Potassium: 320, Cholesterol: 0, name: "carrot can spoil within 10 to 15 days at room temperature."  },
  carrotlow: { Calories: 41, Carbs: 10, Protein: 0.9, Fat: 0.2, Fiber: 2.8, Sugar: 4.7, Sodium: 69, Potassium: 320, Cholesterol: 0, name: "carrot can spoil within 1 to 2 days at room temperature."  },
  carrotmid: { Calories: 41, Carbs: 10, Protein: 0.9, Fat: 0.2, Fiber: 2.8, Sugar: 4.7, Sodium: 69, Potassium: 320, Cholesterol: 0, name: "carrot can spoil within 3 to 4 days at room temperature."  },
  carrothigh: { Calories: 41, Carbs: 10, Protein: 0.9, Fat: 0.2, Fiber: 2.8, Sugar: 4.7, Sodium: 69, Potassium: 320, Cholesterol: 0, name: "carrot can spoil within 5 to 6 days at room temperature."  },
  apple: { Calories: 52, Carbs: 14, Protein: 0.3, Fat: 0.2, Fiber: 2.4, Sugar: 10, Sodium: 1, Potassium: 107, Cholesterol: 0, name: "Apple can spoil within 10 to 14 days at room temperature."  },
  applelow: { Calories: 52, Carbs: 14, Protein: 0.3, Fat: 0.2, Fiber: 2.4, Sugar: 10, Sodium: 1, Potassium: 107, Cholesterol: 0, name: "Apple can spoil within 1 to 5 days at room temperature."  },
  applemid: { Calories: 52, Carbs: 14, Protein: 0.3, Fat: 0.2, Fiber: 2.4, Sugar: 10, Sodium: 1, Potassium: 107, Cholesterol: 0, name: "Apple can spoil within 5 to 10 days at room temperature."  },
  applehigh: { Calories: 52, Carbs: 14, Protein: 0.3, Fat: 0.2, Fiber: 2.4, Sugar: 10, Sodium: 1, Potassium: 107, Cholesterol: 0, name: "Apple can spoil within 10 to 14 days at room temperature."  },
  banana: { Calories: 89, Carbs: 23, Protein: 1.1, Fat: 0.3, Fiber: 2.6, Sugar: 12, Sodium: 1, Potassium: 358, Cholesterol: 0, name: "Banana can spoil within 10 to 20 days at room temperature."  },
  bananalow: { Calories: 89, Carbs: 23, Protein: 1.1, Fat: 0.3, Fiber: 2.6, Sugar: 12, Sodium: 1, Potassium: 358, Cholesterol: 0, name: "Banana can spoil within 1 to 5 days at room temperature."  },
  bananamid: { Calories: 89, Carbs: 23, Protein: 1.1, Fat: 0.3, Fiber: 2.6, Sugar: 12, Sodium: 1, Potassium: 358, Cholesterol: 0, name: "Banana can spoil within 5 to 10 days at room temperature."  },
  bananahigh: { Calories: 89, Carbs: 23, Protein: 1.1, Fat: 0.3, Fiber: 2.6, Sugar: 12, Sodium: 1, Potassium: 358, Cholesterol: 0, name: "Banana can spoil within 10 to 15 days at room temperature."  },
  bananasuperhigh: { Calories: 89, Carbs: 23, Protein: 1.1, Fat: 0.3, Fiber: 2.6, Sugar: 12, Sodium: 1, Potassium: 358, Cholesterol: 0, name: "Banana can spoil within 15 to 20 days at room temperature."  },

  



};

function Nutri() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [img, setimg] = useState(''); im not using it 
  const [suggestions, setSuggestions] = useState([]);
  const [gram, setGram] = useState();
  const [weight, setWeight] = useState(1);
  const [normalkg, setNormalKg] = useState();
  const [formulakg, setFormulaKg] = useState(70);
  const [foodnutri, setFoodNutri] = useState({
    Calories: 0,
    Carbs: 0,
    Protein: 0,
    Fat: 0,
    Fiber: 0,
    Sugar: 0,
    Sodium: 0,
    Potassium: 0,
    Cholesterol: 0,
    name:"",
  });

  const [calories, setCalories] = useState();
  const [carbs, setCarbs] = useState();
  const [protein, setProtein] = useState();
  const [fat, setFat] = useState();
  const [fiber, setFiber] = useState();
  const [sugar, setSugar] = useState();
  const [sodium, setSodium] = useState();
  const [potassium, setPotassium] = useState();
  const [cholesterol, setCholesterol] = useState();
  const [foodname, setfoodname] = useState("");


  const [run, setRun] = useState(0);
const [jog, setJog] = useState(0);
const [ropeskip, setRopeSkip] = useState(0);
const [box, setBox] = useState(0);
const [swim, setSwim] = useState(0);
const [cal , setCal] = useState(0);
const [GateSearch , setGateSearch] = useState('');
 

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);

    // Filter suggestions based on the input
    const filteredSuggestions = Object.keys(foodDictionary).filter(food =>
      food.toLowerCase().includes(searchTerm)
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSearch = () => {
    // Implement your search logic here using the searchTerm state
    console.log(`Searching for: ${searchTerm}`);
    setFoodNutri(foodDictionary[searchTerm]);
    updateCaloriesBurned();
    setGateSearch('search');
    setSearchTerm('');
  };

  // image uploading and storing code
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
   

  // const send_data = ()=>{
  //   axios.post('http://127.0.0.1:5000/api/data', {data:image}, {withCredentials:true}).then((res)=>{
  //     console.log(res);
  //     setSearchTerm(res.data);
  //     setFoodNutri(foodDictionary[searchTerm]);
  //     updateCaloriesBurned();
  //     setSearchTerm(foodDictionary[searchTerm]);
  //   }).catch((error)=>{
  //     console.error(error);
  //   })
  // }

  // -----------------------------------------------------------------------------------------------

  const [imgcnn, setImgcnn] = useState('');
  const handleimagepredict =  (e) => {
    // setimagepre(true)
    const fetchimage = async () => {
      try {
        const apiUrl = 'http://localhost:5000/cnn';
        const requestData = {
          imageURI: image
        };

        const response = await axios.post(apiUrl, requestData);

        // Assuming the API response has a 'show' property
        setImgcnn(response.data.result);
        // setimagepre(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchimage();
    setFoodNutri(foodDictionary[imgcnn]);
    setGateSearch('');
  }


  useEffect(() => {
    // You can access individual properties of foodnutri here and log them to the console
    if (GateSearch == 'search') {
      setCalories(foodnutri['Calories']);  
      setCarbs(foodnutri['Carbs']);  
      setProtein(foodnutri['Protein']);  
      setFat(foodnutri['Fat']);  
      setSugar(foodnutri['Sugar']);  
      setFiber(foodnutri['Fiber']);  
      setSodium(foodnutri['Sodium']);  
      setPotassium(foodnutri['Potassium']);  
      setCholesterol(foodnutri['Cholesterol']);   
      updateCaloriesBurned();
    }
    console.log('this is before');
    const foodData = foodDictionary[imgcnn];
        if (foodData) {
          console.log('this is food we are getting',imgcnn);
            setFoodNutri(foodData);
            setCalories(foodData['Calories']);
            setCarbs(foodData['Carbs']);
            setProtein(foodData['Protein']);
            setFat(foodData['Fat']);
            setSugar(foodData['Sugar']);
            setFiber(foodData['Fiber']);
            setSodium(foodData['Sodium']);
            setPotassium(foodData['Potassium']);
            setCholesterol(foodData['Cholesterol']);
            setfoodname(foodData['name']);
            updateCaloriesBurned();
      
      
            // console.log('Calories:', calories);
            // console.log('Carbs:', carbs);
            // console.log('Protein:', protein);
            // console.log('Fat:', fat);
            // console.log('Fiber:', fiber);
            // console.log('Sugar:', sugar);
            // console.log('Sodium:', sodium);
            // console.log('Potassium:', potassium);
            // console.log('Cholesterol:', cholesterol);
        }

      
      
    
  }, [foodnutri,formulakg,calories,weight,image,imgcnn,carbs,foodname]);

  const ChangeGram = (e) => {
    setGram(e.target.value);
  };

  const handleweight = () => {
    setWeight(gram / 100);
    updateCaloriesBurned();
  };
  
  const ChangeKg = (e) => {
    setNormalKg(e.target.value);
  };
  
  const handleKg = () => {
    setFormulaKg(normalkg);
    updateCaloriesBurned();
  };
  
  const updateCaloriesBurned = () => {
    setRun(calories*weight / (11.4 * formulakg));
    setJog(calories*weight / (8.5 * formulakg));
    setBox(calories*weight / (12.4 * formulakg));
    setRopeSkip(calories*weight / (12.5 * formulakg));
    setSwim(calories*weight / (10.2 * formulakg));
  };
  return (
    <>
      <div className='bar_container'>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." value={searchTerm} onChange={handleInputChange} />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
        {searchTerm === '' ? (
          <></>
        ) : (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion-item" onClick={() => setSearchTerm(suggestion)}>
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='image_container'>
        
              <div className='btn_flex'>
                <label htmlFor="upload-image" className="btn_upload">Upload Image</label>
                <input id="upload-image" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }} />
                  <button className='btn_img_test' onClick={handleimagepredict}>Find nutrition</button>
              </div>
              
        {image && <img src={image} alt="Uploaded" className='show_img' />}
      
      </div>

      {imgcnn === ''?(
        <></>
      ):(<>
      <div className="food_freshness">
        <p>
            <p className='food_info'>{foodname}</p>
        </p>
      </div>
      </>
    )}

   
      <div className="nutri_container">
       
        <div className="nutri_data">
              {/* Display the nutrition information */}
          
            <div className="nutri_information">
                    <p className='food_info'>Calories: {calories*weight}</p>
                    <hr />
                      <p className='food_info'>Carbs: {carbs*weight}</p>
                      <hr />
                          <p className='food_info'>Protein: {protein*weight}</p>
                          <hr />
                            <p className='food_info'>Fat: {fat*weight}</p>
                            <hr />
                          <p className='food_info'>Fiber: {fiber*weight}</p>
                          <hr />
                        <p className='food_info'>Sugar: {sugar*weight}</p>
                        <hr />
                      <p className='food_info'>Sodium: {sodium*weight}</p>
                      <hr />
                    <p className='food_info'>Potassium: {potassium*weight}</p>
                    <hr />
                    <p className='food_info'>Cholesterol: {cholesterol*weight}</p>
              </div>
              
              <div className="weight-container">
                      <input type="number" className='weight-input' value={gram} onChange={ChangeGram}/>
                      <button className="weight-button" onClick={handleweight}>Grams</button>
              </div>
       
        </div>
          
            <div className="burn_time">
              
                  <div className="burn_info">
                          <p className='food_info'> running: {Math.round(run*60)} minutes</p>
                          <hr />
                            <p className='food_info'> jogging: {Math.round(jog*60)} minutes</p>
                            <hr />
                              <p className='food_info'> boxing: {Math.round(box*60)} minutes</p>
                              <hr />
                            <p className='food_info'> rope skipping: {Math.round(ropeskip*60)} minutes</p>
                            <hr />
                          <p className='food_info'> swimming: {Math.round(swim*60)}minutes</p>
                    </div>

            </div>
            
        </div>

    
         
    </>
  );
}

export default Nutri;