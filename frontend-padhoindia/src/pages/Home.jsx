import React from 'react'
import Hero from '../components/common/Hero'
import Facilities from '../components/common/Facilities'
import ClassSelection from '../components/common/ClassSelection'
import PrizeList from '../components/common/PrizeList'
import Syllabus from '../components/common/Syllabus'
import ScholarshipHighlights from '../components/common/ScholarshipHighlights'
import ImageGallery from '../components/common/ImageGallery'
import FacilitiesText from '../components/common/FacilitiesText'
import EducationOverview from '../components/common/EducationOverview'

const Home = () => {
  return (
    <div>
        <>
        <Hero/>
        <FacilitiesText/>
        <Facilities/>
        <ClassSelection/>
        <EducationOverview/>
        <PrizeList/>
        <Syllabus/>
        <ScholarshipHighlights/>
        <ImageGallery/>
        </>
    </div>
  )
}

export default Home