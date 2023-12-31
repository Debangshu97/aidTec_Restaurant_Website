import React, { useState } from 'react';
import {
  HeroMenu,
  MenuSection,
  StyledWrapper,
  StyledSpan,
  TitleMenu,
  MainContent,
  
} from './styles/index';
import './styles/style.css';
import Categories from './categories';
import CardMenu from './cardMenu';
import items from './dataMenu';

const allCategories = [
  'All',
  ...new Set(items.map((item) => item.category)),
];

const BacktoAllCategories = ['All'];

function Menu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [activeCategory, setActiveCategory] = useState('');

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <MenuSection>
      <HeroMenu>
        <div className='heroMenu'></div>
        <StyledWrapper>
          Hunger<StyledSpan>Nation</StyledSpan>
          <TitleMenu>Menu</TitleMenu>
        </StyledWrapper>
      </HeroMenu>
      <MainContent>
        <section className='menu section'>
          <div className='title'>
            <h2>Menu</h2>
            <div className='underline'></div>
          </div>
        </section>
        <Categories
          filterItems={filterItems}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <CardMenu items={menuItems} />
      </MainContent>
      <Categories
        filterItems={filterItems}
        categories={BacktoAllCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        className='second-categories'
      />
    </MenuSection>
  );
}

export default Menu;
