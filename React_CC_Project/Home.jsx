import React, { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FaUserCircle, FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from './UserContext';
import './Home.css';

const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { currentUser } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const getProfile = () => {
        navigate('/profile');
    };

    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
  };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleColorChange = (e) => {
      const { value, checked } = e.target;
      setSelectedColors(prevColors =>
          checked ? [...prevColors, value] : prevColors.filter(color => color !== value)
      );
  };

    const handleCategoryChange = (e) => {
        const { value, checked } = e.target;
        setSelectedCategories(prevCategories =>
            checked ? [...prevCategories, value] : prevCategories.filter(category => category !== value)
        );
    };

    const handleAddToCart = (giftId, name, actualPrice, offerPrice, quantity) => {
      const newCartItem = {
          id: uuidv4(),
          giftId,
          name,
          actualPrice,
          offerPrice,
          quantity,
      };
      axios.post("http://localhost:3002/cart", newCartItem)
          .then((response) => {
              alert("Gift added to the cart!");
          })
          .catch(error => {
              console.error("Error:", error);
              alert("An error occurred while adding the gift to the cart.");
          });
  };

      const gifts = [
        {
          giftid: 1,
          name: 'Personalized Mug',
          actualPrice: 20,
          offerPrice: 15,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfoJRMql-fUh84A9tP39iJgcHDzQLBA9xYlyBYVGlJkUruATnupTnAf4ukji2riItE_hjViQjl1DMjJ0wxXB17wYXvVjSx87aEL14eC4Uk&usqp=CAE',
          color:'yellow',
          category: 'household'
        },
        {
          giftid: 2,
          name: 'Custom T-Shirt',
          actualPrice: 25,
          offerPrice: 20,
          image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaai9w-DuUVTMC38w14l90S8UHIKBLZKCJA7pYsy4mZgG3YX8Z_YrBLnumC2peKqX8Io8haz9can1WIQU6obPQWx4lAJKwJk8WEvGvYvhjLIku6f4IApqo&usqp=CAE',
          color:'black',
          category: 'wearable'
        },
        {
          giftid: 3,
          name: 'Handmade Necklace',
          actualPrice: 30,
          offerPrice: 25,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQfv7J7YIoZTOoSVnHgkQeacpAgTF27gl0S18AHJGBTF2eJagkiCzEHI218EzNgMHtM77PbHszGAXMSOsxN5cwRCJKCgjQo9J9sRA9-a77sUcAIXjt-F41r&usqp=CAE',
          color:'peach',
          category: 'diy'
        },
        {
          giftid: 4,
          name: 'Personalized Keychain',
          actualPrice: 10,
          offerPrice: 8,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQMaYPLIlA9RowdtO3O-ZNxi3AHGDo4m_QGLnUqm8rrIoipKfToYdidFC_4iBI1HUcSfLnwCx3-3AXlDUgp2VzNtaXA3xwJMA&usqp=CAE',
          color:'silver',
          category: 'diy'
        },
        {
          giftid: 5,
          name: 'Custom Phone Case',
          actualPrice: 15,
          offerPrice: 12,
          image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSL1Oq6QOikepzQ6NXXJR1KOxfxCWBEYtPkwchs1iDAD7SW5CYAnTEs9U6eR2okBo5EXar7grPBmCYq_hc-l-m8pc2b4ZQq_emVXlSmOgpmC5W00CNRg4Ne&usqp=CAE',
          color:'peach',
          category: 'diy'
        },
        {
          giftid: 6,
          name: 'Gift Box',
          actualPrice: 50,
          offerPrice: 45,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAJAAy4isi7yyHudydcYE3rP8fXeC_s1LzTDacoc-WrnqNjysjT9s1ERjrCaLqoba2fwSh20SVzv3tZelt-PhZ0_FALnPc52IXVX5aZyjeJq5LIKBN-94&usqp=CAE',
          color:'orange',
          category: 'diy'
        },
        {
          giftid: 7,
          name: 'Personalized Diary',
          actualPrice: 18,
          offerPrice: 14,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSX2HbgVjTVbm587lOhiiA7suqt-yeLHEXf8JdBwJZaB6i58-iKp71qnw83yeqvpkgbomfYe0UU3QnN6nG5dxaVQbE_GQW6Cw&usqp=CAE',
          color:'silver',
          category: 'stationery'
        },
        {
          giftid: 8,
          name: 'Customized Wall Art',
          actualPrice: 40,
          offerPrice: 35,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTOEYREyaqL3EOWQb3Xyz6s_00r0n1oUw_eR_bZNbpeZSsiWbgfYKrd40aknCRFCmySgdYsDiHbLUA2_XMFIIJ-Q4izNWNnEaHjg1sdN_7JWOiKod8O63r&usqp=CAE',
          color:'brown',
          category: 'household'
        },
        {
          giftid: 9,
          name: 'Engraved Pen',
          actualPrice: 12,
          offerPrice: 10,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT01BiPQ_iNUw846PYzQpW59qwKBJXLUrM371A5e4G8DWvZY1uT-2bP47i_o8-qB4E7VJyzuynWWj-0EWl_0jUDc1MYH4IT&usqp=CAE',
          color:'silver',
          category: 'stationery'
        },
        {
          giftid: 10,
          name: 'Personalized Blanket',
          actualPrice: 60,
          offerPrice: 55,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0_fe-IXsayAQ_4Q9Ql6PmuzAryrIr7zahqNVRIaLJWdOIHiNR3D5x2wjwdsKHCNYFgl3SsYevOZo-C4_BskP8kClNk5E6mMP_6N0pUX3D&usqp=CAE',
          color:'red',
          category: 'household'
        },
        {
          giftid: 11,
          name: 'Personalized Cutting Board',
          actualPrice: 45,
          offerPrice: 40,
          image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3m7KEhgl32mDOHo7-kBLUQOfP6RSxq3UytI230_OPk9J3uBCrtCko1n9Q0dpBeKxKbKP8spmOUHhC-qF_2wVyTrXxotM8EFnw7M5ePA6e&usqp=CAE',
          color:'peach',
          category: 'household'
        },
        {
          giftid: 12,
          name: 'Personalized Phone Stand',
          actualPrice: 22,
          offerPrice: 18,
          image: 'https://www.woodgeekstore.com/cdn/shop/files/IMG-20230603-WA0006_1600x.jpg?v=1685799127',
          color:'peach',
          category: 'diy'
        },
        {
          giftid: 13,
          name: 'Customized Tote Bag',
          actualPrice: 20,
          offerPrice: 15,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSDKiVBUd86EvgQmgum_FRUT7k2-pEBCxrynVZshD1tWeQXn7eo4eK2_yWWeoVxLCM6lMhLYteV_sIICJ8GzxRh7bBlhJ_7LOvI13LlFcvk&usqp=CAE',
          color:'brown',
          category: 'diy'
        },
        {
          giftid: 14,
          name: 'Personalized Recipe Book',
          actualPrice: 35,
          offerPrice: 30,
          image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBqbzIHd1VceSlu2k7SLubGN90awZo3M_anBK1qh1yOA5g7fhRb2VwY7mm_6xmuP1STAV4rQREiFOCrCwmTEuXhiR5P2x-rnjCqyCV2fZ8&usqp=CAE',
          color:'black',
          category: 'stationery'
        },
        {
          giftid: 15,
          name: 'Custom Candle Set',
          actualPrice: 25,
          offerPrice: 20,
          image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRA_LZfoE9hYasi3WNQG7bvkl739mR59trNwEI4gRzHLEIEjzhjlkIUkeflqEOvuxupm9VMfSz1VYy2hWoCfsp4u0brHNebykLP0LaCQs2VUF8Za3VR0Mp4jA&usqp=CAE',
          color:'lavender',
          category: 'diy'
        },
        {
          giftid: 16,
          name: 'Engraved Jewelry Box',
          actualPrice: 55,
          offerPrice: 50,
          image: 'https://ae01.alicdn.com/kf/S0e8ab8f5856849cda93cfaea5cf878e9i/Large-Rosewood-Jewelry-Box-Organizer-Luxury-Solid-Wood-Jewelry-Boxes-for-Men-Storage-Box-Display-Wedding.jpg',
          color:'brown',
          category: 'diy'
        },
        {
          giftid: 17,
          name: 'Personalized Puzzle',
          actualPrice: 30,
          offerPrice: 25,
          image: 'https://unifury.com/cdn/shop/products/st-familydogcatmax9hiking-puzzle.jpg?v=1629101666',
          color:'peach',
          category: 'diy'
        },
        {
          giftid: 18,
          name: 'Custom Wall Clock',
          actualPrice: 40,
          offerPrice: 35,
          image: 'https://i.pinimg.com/736x/d9/3b/6e/d93b6ef30dc0729226d4a3e836c520b9.jpg',
          color:'emerald',
          category: 'household'
        },
        {
          giftid: 19,
          name: 'Customized Leather Luggage Tag',
          actualPrice: 15,
          offerPrice: 12,
          image: 'https://images-cdn.ubuy.co.in/634f718da0261536a31a3612-leather-luggage-tags-suitcase-labels-bag.jpg',
          color:'black',
          category: 'diy'
        },
        {
          giftid: 20,
          name: 'Custom Greeting Cards',
          actualPrice: 10,
          offerPrice: 12,
          image: "https://giftcart.com/cdn/shop/products/cm05gbgt3824-1_1.webp?v=1661142806",
          color:'Violet',
          category: 'diy'
        }
      ];

    const filteredGifts = gifts.filter(gift => {
        const matchesSearch = gift.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = (!minPrice || gift.offerPrice >= (minPrice)) &&
                             (!maxPrice || gift.offerPrice <= (maxPrice));
        const matchesColor = !selectedColors.length || selectedColors.includes(gift.color);
        const matchesCategory = !selectedCategories.length || selectedCategories.includes(gift.category);
        return matchesSearch && matchesPrice && matchesColor  && matchesCategory;
    });

    return (
        <div>
           <nav className="home-navbar">
            <div className="brand">GiftCraft</div>
            <div className="nav-icons">
                <FaUserCircle className="icon" onClick={toggleDropdown} />
                <Link to='/cart'>
                    <FaShoppingCart className="cart-icon"/>
                </Link>
                {dropdownOpen && (
                    <div className="dropdown">
                        {currentUser ? (
                            <>
                                <button onClick={getProfile}>Profile</button>
                                <button onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
            <div className="main-content">
            <aside className={`side-navbar ${isCollapsed ? 'collapsed' : ''}`}>
            <h3>Filters</h3>
            <div className="filter-section">
                <h4>Price Range</h4>
                <input
                    type="number"
                    placeholder="Min"
                    className="filter-input"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Max"
                    className="filter-input"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
            </div>
            <div className="filter-section">
                <h4>Color</h4>
                {['orange', 'black', 'red', 'lavender', 'violet', 'emerald', 'yellow', 'brown', 'silver', 'peach'].map(color => (
                    <label key={color}>
                        <input
                            type="checkbox"
                            value={color}
                            checked={selectedColors.includes(color)}
                            onChange={handleColorChange}
                        /> {color.charAt(0).toUpperCase() + color.slice(1)}
                    </label>
                ))}
            </div>
            <div className="filter-section">
                <h4>Product Type</h4>
                {['stationery', 'household', 'diy', 'wearable'].map(category => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            value={category}
                            checked={selectedCategories.includes(category)}
                            onChange={handleCategoryChange}
                        /> {category.charAt(0).toUpperCase() + category.slice(1)}
                    </label>
                ))}
            </div>
            <button className="collapse-button" onClick={toggleCollapse}>
                {isCollapsed ? '>' : '<'}
            </button>
        </aside>
                <div className="content">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search for gifts..."  value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="search-input" />
                    </div>
                    <div className="gift-cards">
                    {filteredGifts.length > 0 ? (
    filteredGifts.map((gift, index) => (
      <div className="gift-card" key={`${gift.giftid}-${index}`}>
        <img src={gift.image} alt={gift.name} className="gift-image" />
        <h4 className="gift-name">{gift.name}</h4>
        <p className="actual-price">${gift.actualPrice}</p>
        <p className="offer-price">${gift.offerPrice}</p>
        
        <div className="quantity">
          <button 
            className="minus" 
            onClick={() => {
              const input = document.getElementById(`quantity-${gift.giftid}`);
              const currentValue = parseInt(input.value);
              if (currentValue > 1) {
                input.value = currentValue - 1;
              }
            }}
          >
            −
          </button>
          <input 
            type="text" 
            min="1" 
            defaultValue="1" 
            className="input-box" 
            id={`quantity-${gift.giftid}`} 
          />
          <button 
            className="plus" 
            onClick={() => {
              const input = document.getElementById(`quantity-${gift.giftid}`);
              const currentValue = parseInt(input.value);
              input.value = currentValue + 1;
            }}
          >
            +
          </button>
        </div>

        <button 
          className="add-to-cart" 
          onClick={() => {
            const quantity = parseInt(document.getElementById(`quantity-${gift.giftid}`).value);
            handleAddToCart(gift.giftid, gift.name, gift.actualPrice, gift.offerPrice, quantity);
          }}
        >
          Add to Cart
        </button>
</div>

    ))
  ) : (
    <div className="no-results-container">
      <img src="https://static.vecteezy.com/system/resources/previews/009/007/126/non_2x/document-file-not-found-search-no-result-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" alt="No results found" className="no-results-image" />
      <p className="no-results-message">
        No results found. Please refine your search criteria or explore our other amazing gifts.
      </p>
    </div>
  )}
</div>
    </div>
         </div>
            </div>
    );
};

export default Home;