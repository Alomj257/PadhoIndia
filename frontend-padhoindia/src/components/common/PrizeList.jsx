import React from 'react'
import { Card, Collapse, List } from 'antd'
import 'antd/dist/reset.css'

// Import local images from assets folder
import schoolImg1 from '../../assets/school1.jpg'
import schoolImg2 from '../../assets/school2.jpg'
import schoolImg3 from '../../assets/school3.jpg'
import schoolImg4 from '../../assets/school4.jpg'
import schoolImg5 from '../../assets/school5.jpg'
import schoolImg6 from '../../assets/school6.jpg'

import blockImg1 from '../../assets/school1.jpg'
import districtImg1 from '../../assets/school1.jpg'
import districtImg2 from '../../assets/school1.jpg'
import stateImg from '../../assets/school1.jpg'
import finalImg1 from '../../assets/school1.jpg'
import finalImg2 from '../../assets/school1.jpg'

const { Panel } = Collapse

const prizeData = [
  {
    level: 'School and College Level',
    winner: '1st Winner will get Rs. 1000',
    diamondCard: {
      title: 'Diamond Card Facilities (Top 11)',
      facilities: [
        'Free Online IT Training',
        'Free Legal Support in High Court',
        'Higher Study Chances',
        'Free Career Counselling classes',
        'Extra Personality Buildup Motivation Classes',
      ],
    },
    images: [schoolImg1, schoolImg2, schoolImg3, schoolImg4, schoolImg5, schoolImg6],
  },
  {
    level: 'Block Level',
    prizes: [
      '1st Winner: Rs. 20,000/- Scholarship',
      'Consolation: 10th Top Winner Rs. 5,000/- Scholarship (Each)',
    ],
    images: [blockImg1],
  },
  {
    level: 'District Level',
    prizes: [
      '1st: BMW Bike',
      '2nd: KTM Bike',
      '3rd: Pulsar Bike',
      '4th: Scooty',
      '5th: Laptop',
      '6th to 11th: Android Phone (Total 7)',
    ],
    images: [districtImg1, districtImg2],
  },
  {
    level: 'State Level',
    prizes: [
      '24 members go to Final Level',
      '24 Hyundai Exter Cars',
      'Each gets Rs. 20 Lakh Cash',
      '50 gm Pure Gold Medal (22 carat)',
    ],
    images: [stateImg],
  },
  {
    level: 'Final Level (National Level)',
    rounds: [
      '1st Round: 500 Losers get 1 Crore cash (Higher Study)',
      '2nd Round: 40 Losers get 2 Crore + 3 BHK Flat',
      'Final Round: 9 Losers get 4 Crore + 4 BHK Flat + Mercedes Benz',
    ],
    winners: [
      {
        title: '1st Prize',
        rewards: [
          '1 Kg Gold Trophy',
          '10 Crore Cash',
          'Jaguar Car',
          '5 BHK Flat',
          'Foreign Tour (4 people, 10 days)',
        ],
      },
      {
        title: '2nd Prize',
        rewards: [
          '500 gm Gold Trophy',
          '8 Crore Cash',
          'Jaguar Car',
          '5 BHK Flat',
          'Foreign Tour (4 people, 10 days)',
        ],
      },
      {
        title: '3rd Prize',
        rewards: [
          '250 gm Gold Trophy',
          '6 Crore Cash',
          'Jaguar Car',
          '5 BHK Flat',
          'Foreign Tour (4 people, 10 days)',
        ],
      },
    ],
    images: [finalImg1, finalImg2],
  },
]

const PrizeList = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-black">
        PADHO INDIA NATIONAL CUP
      </h2>
      <Collapse accordion>
        {prizeData.map((section, index) => (
          <Panel
            header={<span className="font-bold text-gray-700">{section.level}</span>}
            key={index}
          >
            {section.winner && (
              <p className="font-semibold text-yellow-700">{section.winner}</p>
            )}

            {section.images && (
              <div className="flex flex-wrap gap-4 my-4">
                {section.images.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    alt={`prize-img-${i}`}
                    className="w-32 h-32 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
            )}

            {section.diamondCard && (
              <Card
                title={<span className="font-bold text-gray-800">{section.diamondCard.title}</span>}
                className="my-4 bg-yellow-50"
              >
                <List
                  dataSource={section.diamondCard.facilities}
                  renderItem={(item) => (
                    <List.Item className="font-medium">{item}</List.Item>
                  )}
                />
              </Card>
            )}

            {section.prizes && (
              <List
                dataSource={section.prizes}
                renderItem={(item) => (
                  <List.Item className="font-medium text-gray-700">{item}</List.Item>
                )}
                bordered
              />
            )}

            {section.rounds && (
              <>
                <h4 className="text-lg font-semibold mt-4 text-yellow-800">Losers Rounds</h4>
                <List
                  dataSource={section.rounds}
                  renderItem={(item) => (
                    <List.Item className="font-medium">{item}</List.Item>
                  )}
                  bordered
                />
              </>
            )}

            {section.winners && (
              <>
                <h4 className="text-lg font-semibold mt-4 text-yellow-800">Top Winners</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  {section.winners.map((winner, idx) => (
                    <Card
                      title={<span className="font-bold">{winner.title}</span>}
                      key={idx}
                      className="bg-blue-50"
                    >
                      <List
                        dataSource={winner.rewards}
                        renderItem={(item) => (
                          <List.Item className="font-medium">{item}</List.Item>
                        )}
                      />
                    </Card>
                  ))}
                </div>
              </>
            )}
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}

export default PrizeList
