import React from 'react'
import { useState } from 'react';
import FilterButton from './Componets/FilterButton';
import Navbar from './Componets/Navbar';
import SubNav from './Componets/SubNav';
import Sidebar from './Componets/Sidebar';
import LearningCard from './Componets/LearningCard';
import Footer from './Componets/Footer';
import FilterPanel from './Componets/FilterPanel';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CoursePage from './Componets/CoursePage';

function AppContent() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [isRating, setIsRating] = useState("")
  const [isLanguage, setIsLanguage] = useState([])
  const [isPractice, setIsPractice] = useState([])
  const [isDuration, setIsDuration] = useState([])
  const [isTopic, setIsTopic] = useState([])
  const [isLevel, setLevel] = useState([])
  const [isTitle, setTitle] = useState([])
  const [isPrice, setPrice] = useState([])  
  
 const filterPractice = (selectPractice) =>{
  setIsPractice(prev => 
    prev.includes(selectPractice)?
    prev.filter(prev => prev !== selectPractice):
    [...prev,selectPractice]
  )
 }

  const toggleButton = () =>{
    setIsOpenSidebar((prev) => !prev)
  }
  const handleFilter = () =>{
    setOpenFilter((prev) => !prev)
  }
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
    <div className='container'>
     <Navbar toggleButton={toggleButton}/>
     <Sidebar isOpen={isOpenSidebar} closeSidebar={() =>setIsOpenSidebar(false)}/>
     {isHomePage && (
      <>
     <SubNav />
     <FilterButton handleFilter={handleFilter} filterPractice={filterPractice}/>
     <FilterPanel filterOpen={openFilter} closeSidebar={() =>setOpenFilter(false)} isRating={isRating} isLanguage={isLanguage} isPractice={isPractice} isDuration={isDuration} isTopic={isTopic} isLevel={isLevel} isTitle={isTitle} isPrice={isPrice}
      setIsRating={setIsRating}  setIsLanguage={setIsLanguage} setIsPractice={setIsPractice} setIsDuration={setIsDuration} setIsTopic={setIsTopic} setLevel={setLevel} setTitle={setTitle} setPrice={setPrice}/>
      </>)}
         <Routes>
        <Route path='/' element={<LearningCard isRating={isRating} isLanguage={isLanguage} isPractice={isPractice} isDuration={isDuration} isTopic={isTopic} isLevel={isLevel} isTitle={isTitle} isPrice={isPrice}/>}/>
        <Route path='/page/:pageId' element={<CoursePage/>} />
     </Routes>
     <Footer/>
    </div>
    </>
  );
}

export default AppContent