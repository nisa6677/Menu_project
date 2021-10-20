const menu = [
    {
      id: 1,
      title: "Baklava",
      category: "Turkish",
      price: 10.99,
      img:
      "https://www.istockphoto.com/photo/baklava-gm1027001938-275372252?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbaklava&utm_term=baklava%3A%3Asearch-aggressive-affiliates-v1%3Ab",
      
    },
    {
      id: 2,
      title: "Köfte",
      category: "Turkish",
      price: 7.99,
      img:
        "https://media.istockphoto.com/photos/turkish-meatball-with-sauce-bread-and-salad-picture-id912719564?b=1&k=20&m=912719564&s=170667a&w=0&h=c7BIDw01xrc7j2bpfkjRLIq0CEo6CQvO3l3jzhfLfdQ=",
      
    },
    {
      id: 3,
      title: "Mantı",
      category: "Turkish",
      price: 8.99,
      img:
        "https://media.istockphoto.com/photos/delicious-turkish-ravioli-mant-picture-id1272270460?b=1&k=20&m=1272270460&s=170667a&w=0&h=crUfxNlRBCgnloQU5QAeo3ZfndnDqYy6kY8hpOtDFRk=",
      
    },
    {
      id: 4,
      title: "Zeytinyağlı sarma",
      category: "Turkish",
      price: 9.99,
      img:
        "https://media.istockphoto.com/photos/stuffed-grape-leaves-picture-id137056515?b=1&k=20&m=137056515&s=170667a&w=0&h=NOIKO-GiV4cE9XybDQ2QAB14QEt-D7BtANqUqn2IhFM=",
    
    },
    {
      id: 5,
      title: "kebap",
      category: "Turkish",
      price: 18.99,
      img:
        "https://media.istockphoto.com/photos/manisa-kebap-in-manisa-turkey-picture-id1345290195?b=1&k=20&m=1345290195&s=170667a&w=0&h=r0HLIk1-Mov5aZW_BwlNezrpNEeI14itpZG0Yx_o_MU=",
      
    },
    {
      id: 6,
      title: "Sütlaç",
      category: "Turkish",
      price: 9.99,
      img:
        "https://media.istockphoto.com/photos/rice-pudding-picture-id1266838443?b=1&k=20&m=1266838443&s=170667a&w=0&h=THS6_i4DwQo8K-S-3b-vJctlChLOQlK2hy3dXhnvGQ4=",
      
    },
    {
      id: 7,
      title: "Künefe",
      category: "Turkish",
      price: 15.99,
      img:
        "https://media.istockphoto.com/photos/knefe-kunefe-dessert-on-wooden-floor-with-wall-background-picture-id1312967264?b=1&k=20&m=1312967264&s=170667a&w=0&h=ny160U_0mYpvUos2Zj8ESYM-msVFMhnDFEA57XQ4N8s=",
    
    },
    
     
    
      
  ];
  const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryList = () => {
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();