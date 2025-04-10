import React from 'react'
import Hero from '../components/common/Hero'
import Facilities from '../components/common/Facilities'
import ClassSelection from '../components/common/ClassSelection'
import PrizeList from '../components/common/PrizeList'
import Syllabus from '../components/common/Syllabus'
import ScholarshipHighlights from '../components/common/ScholarshipHighlights'
import ImageGallery from '../components/common/ImageGallery'

const Home = () => {
  return (
    <div>
        <>
        <Hero/>
        <Facilities/>
        <ClassSelection/>
        <PrizeList/>
        <Syllabus/>
        <ScholarshipHighlights/>
        <ImageGallery/>
        </>
    </div>
  )
}

export default Home