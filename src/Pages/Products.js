import './Products.css'
import { useState } from 'react';
import Pagination from '../components/pagination';

import grid2 from '../Assets/2x2.png';
import grid3 from '../Assets/3x3.png';
import grid4 from '../Assets/4x4.png'; 


function Products({ appliedFilters }) {

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const shoes = [{
      "image": "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
      "title": "Nike Air Monarch IV",
      "price": "200",
      "color": "white",
      "category": "S"
    },
    {
      "image": "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      "title": "Nike Air Vapormax",
      "price": "200",
      "color": "red",
      "category": "S"
    },
  
    {
      "image": "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
      "title": "Nike Waffle One",
      "price": "200",
      "color": "green",
      "category": "M"
    },
    {
      "image": "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
      "title": "Nike Running Shoe",
      "price": "200",
      "color": "black",
      "category": "L"
    },
    {
      "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
      "title": "Nike Air Force 1",
      "price": "200",
      "color": "black",
      "category": "XS"
    },
    {
      "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      "title": "Nike Air Max 90",
      "price": "150",
      "color": "red",
      "category": "XS"
    },
    {
      "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
      "title": "Nike Air Max 90",
      "price": "175",
      "color": "green",
      "category": "S"
    },
    {
      "image": "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
      "title": "Nike Zoom Freak",
      "price": "200",
      "color": "green",
      "category": "M"
    },
  
    {
      "image": "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
      "title": "Nike Men's Sneaker",
      "price": "200",
      "color": "blue",
      "category": "M"
    },
  
    {
      "image": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",
      "title": "Nike Joyride",
      "price": "150",
      "color": "red",
      "category": "M"
    },
    {
      "image": "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
      "title": "Pacer Future Sneaker",
      "price": "150",
      "color": "red",
      "category": "M"
    },
    {
      "image": "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
      "title": "Unisex-Adult Super",
      "price": "150",
      "color": "black",
      "category": "M"
    },
    {
      "image": "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
      "title": "Roma Basic Sneaker",
      "price": "150",
      "color": "white",
      "category": "M"
    },
    {
      "image": "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
      "title": "Pacer Doubleknit",
      "price": "150",
      "color": "black",
      "category": "M"
    },
  
    {
      "image": "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
      "title": "Fusion Evo Golf Shoe",
      "price": "100",
      "color": "green",
      "category": "M"
    },
    {
      "image": "https://image.goat.com/attachments/product_template_pictures/images/018/552/901/original/404758_00.png.png",
      "title": "Retro High OG Turbo",
      "price": "100",
      "color": "blue",
      "category": "XS"
    },
    {
      "image": "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
      "title": "Low-Top Trainers",
      "price": "100",
      "color": "white",
      "category": "XL"
    },
    {
      "image": "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
      "title": "Vans Unisex Low-Top",
      "price": "100",
      "color": "blue",
      "category": "XL"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/019/246/220/original/491897_00.png.png",
      "title": "Waffle Varsity Blue",
      "price": "50",
      "color": "blue",
      "category": "XL"
    },
    {
      "image": "https://image.goat.com/375/attachments/product_template_pictures/images/010/564/058/original/303229_00.png.png",
      "title": "Air VaporMax",
      "price": "50",
      "color": "white",
      "category": "L"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/021/545/481/original/509480_00.png.png",
      "title": "Air Jordan 1 Retro",
      "price": "150",
      "color": "white",
      "category": "L"
    },
    {
      "image": "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
      "title": "Nike Air Vapormax",
      "price": "200",
      "color": "red",
      "category": "M"
    },
  
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
      "title": "Air Jordan",
      "price": "200",
      "color": "black",
      "category": "L"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/018/898/008/original/482531_00.png.png",
      "title": "Nike University Blue",
      "price": "75",
      "color": "blue",
      "category": "L"
    },
    {
      "image": "https://image.goat.com/375/attachments/product_template_pictures/images/021/474/777/original/TR_JSP_5_ICE.png.png",
      "title": "Retro Ice Blue",
      "price": "150",
      "color": "Blue",
      "category": "L"
    },
    {
      "image": "https://image.goat.com/375/attachments/product_template_pictures/images/018/071/547/original/479524_00.png.png",
      "title": "Jordan 4 Retro Laser",
      "price": "50",
      "color": "black",
      "category": "L"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/016/152/710/original/402491_00.png.png",
      "title": "Air Jordan 1 Retro",
      "price": "50",
      "color": "black",
      "category": "XS"
    },
    {
      "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      "title": "Nike React Infinity Run",
      "price": "150",
      "color": "green",
      "category": "S"
    },
    {
      "image": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      "title": "Nike Zoom Pegasus",
      "price": "75",
      "color": "white",
      "category": "M"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/021/321/832/original/503571_00.png.png",
      "title": "Nike Air VaporMax",
      "price": "90",
      "color": "black",
      "category": "XS"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/020/627/586/original/487222_00.png.png",
      "title": "Nike Fear Of God Raid",
      "price": "200",
      "color": "black",
      "category": "M"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/010/222/352/original/240_00.png.png",
      "title": "Air Force 1",
      "price": "200",
      "color": "white",
      "category": "L"
    },
    {
        "image": "https://image.goat.com/attachments/product_template_pictures/images/010/988/952/original/180155_00.png.png",
        "title": "Air Max 97",
      "price": "190",
      "color": "white",
      "category": "L"
    },
    {
      "image": "https://image.goat.com/attachments/product_template_pictures/images/010/634/133/original/303217_00.png.png",
      "title": "Air Max 270",
      "price": "170",
      "color": "white",
      "category": "S"
    },
    {
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/011/051/956/original/335725_00.png.png",
      "title": "Air Yacht Club",
      "price": "160",
      "color": "green",
      "category": "XS"
    },
    {
      "image": "https://image.goat.com/attachments/product_template_pictures/images/021/545/467/original/512006_00.png.png",
      "title": "NMD Human Race",
      "price": "120",
      "color": "blue",
      "category": "XS"
    }
  ];

  const [selectedGrid, setSelectedGrid] = useState('Grid3'); // Default selected grid

  const switchTo2x2Grid = () => {
    setGridColumns('repeat(auto-fill, minmax(500px, 1fr))');
    setSelectedGrid('Grid2');
  };

  const switchTo3x3Grid = () => {
    setGridColumns('repeat(auto-fill, minmax(400px, 1fr))');
    setSelectedGrid('Grid3');
  };

  const switchTo4x4Grid = () => {
    setGridColumns('repeat(auto-fill, minmax(250px, 1fr))');
    setSelectedGrid('Grid4');
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredShoes = shoes.filter((shoe) => {
    // Check each filter condition
    return (
      (!appliedFilters.title || shoe.title.toLowerCase().includes(appliedFilters.title.toLowerCase())) &&
      (!appliedFilters.price || (shoe.price >= appliedFilters.price.min && shoe.price <= appliedFilters.price.max)) &&
      (appliedFilters.sizes && appliedFilters.sizes.length > 0 ? appliedFilters.sizes.includes(shoe.category) : true)&&
      (appliedFilters.colors && appliedFilters.colors.length > 0 ? appliedFilters.colors.includes(shoe.color) : true)
    );
  });

  const totalPages = Math.ceil(filteredShoes.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentShoes = filteredShoes.slice(startIndex, endIndex);


  const [gridColumns, setGridColumns] = useState('repeat(auto-fill, minmax(400px, 1 fr))');
  

  // Map through the filtered products
  const shoeCards = currentShoes.map((item, pos) => {
    return (
        <div className='Card' key={pos}>
          <div className='ProductCard'>
            <img className='ProductImage' src={item.image} alt={item.title}></img>
          </div>
          <p className='ProductTitle'>{item.title}</p>
          <p className="Price">Price: <span className='ProductPrice'>{item.price}</span></p>
          <p className="Size">Size: <span className='ProductSize'>{item.category}</span></p>
        </div>      
    );
  });


return (
  <div>
  <div className="grid-icons">
    <img className={selectedGrid === 'Grid2' ? 'Grid2 selected' : 'Grid2'} src={grid2} onClick={switchTo2x2Grid} />
    <img className={selectedGrid === 'Grid3' ? 'Grid3 selected' : 'Grid3'} src={grid3} onClick={switchTo3x3Grid} />
    <img className={selectedGrid === 'Grid4' ? 'Grid4 selected' : 'Grid4'} src={grid4} onClick={switchTo4x4Grid} />
  </div>
  <p className="total-products">Total Products: {filteredShoes.length}</p>
  <div className='ProductsList' style={{ gridTemplateColumns: gridColumns }}>{shoeCards}</div>
  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
</div>
        
);
}

export default Products;