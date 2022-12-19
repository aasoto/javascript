export const rovers = [
  {
    name: 'Curiosity',
    value: 'curiosity',
    image: './images/curiosity.jpg',
    info: "Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. Curiosity was launched from Cape Canaveral (CCAFS) on November 26, 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on August 6, 2012, 05:17:57 UTC. The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey. Mission goals include an investigation of the Martian climate and geology, assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life (including investigation of the role of water), and planetary habitability studies in preparation for human exploration. In December 2012, Curiosity's two-year mission was extended indefinitely, and on August 5, 2017, NASA celebrated the fifth anniversary of the Curiosity rover landing. On August 6, 2022, a detailed overview of accomplishments by the Curiosity rover for the last ten years was reported. The rover is still operational, and as of 19 December 2022, Curiosity has been active on Mars for 3686 sols (3787 total days; 10 years, 135 days) since its landing (see current status). The NASA/JPL Mars Science Laboratory/Curiosity Project Team was awarded the 2012 Robert J. Collier Trophy by the National Aeronautic Association 'In recognition of the extraordinary achievements of successfully landing Curiosity on Mars, advancing the nation's technological and engineering capabilities, and significantly improving humanity's understanding of ancient Martian habitable environments.' Curiosity's rover design serves as the basis for NASA's 2021 Perseverance mission, which carries different scientific instruments."
  },
  {
    name: 'Opportunity',
    value: 'opportunity',
    image: './images/opportunity.jpg',
    info: "Opportunity, also known as MER-B (Mars Exploration Rover - B) or MER-1, is a robotic rover that was active on Mars from 2004 until 2018. Opportunity was operational on Mars for 5111 sols (14 years, 138 days). Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin, Spirit (MER-A), touched down on the other side of the planet. With a planned 90-sol duration of activity (slightly less than 92.5 Earth days), Spirit functioned until it got stuck in 2009 and ceased communications in 2010, while Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power. This careful operation allowed Opportunity to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 47 days (in Earth time). By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles)."
  },
  {
    name: 'Spirit',
    value: 'spirit',
    image: './images/spirit.jpg',
    info: "Spirit, also known as MER-A (Mars Exploration Rover - A) or MER-2, is a Mars robotic rover, active from 2004 to 2010. Spirit was operational on Mars for 2208 sols or 3.3 Martian years (2249 days; 6 years, 77 days). It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet. Its name was chosen through a NASA-sponsored student essay competition. The rover got stuck in a 'sand trap' in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was on March 22, 2010."
  }
]

export const cameras = [
  {
    name: 'Front Hazard Avoidance Camera',
    value: 'fhaz',
    curiosity: true,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Rear Hazard Avoidance Camera',
    value: 'rhaz',
    curiosity: true,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Mast Camera',
    value: 'mast',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Chemistry and Camera Complex',
    value: 'chemcam',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Mars Hand Lens Imager',
    value: 'mahli',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Mars Descent Imager',
    value: 'mardi',
    curiosity: true,
    opportunity: false,
    spirit: false
  },
  {
    name: 'Navigation Camera',
    value: 'navcam',
    curiosity: true,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Panoramic Camera',
    value: 'pancam',
    curiosity: false,
    opportunity: true,
    spirit: true
  },
  {
    name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    value: 'minites',
    curiosity: false,
    opportunity: true,
    spirit: true
  },
]