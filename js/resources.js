/**
 * 505 GET FREE — Resource Directory Data
 * Imported from live site CSV + The Life Link added manually.
 * To add a resource: copy one { } block, fill in fields, save.
 *
 * VERIFICATION: Each entry has a verified: "YYYY-MM-DD" field showing when it was
 * last confirmed accurate (address, phone, website). When adding new resources,
 * omit the verified field — it will be absent until manually confirmed.
 * For annual re-verification, prioritize entries with the oldest verified date
 * or no verified field at all. Entries with // ⚠ flags are unresolved and
 * should not be published until reviewed.
 *
 * VALID CITIES: albuquerque, santa-fe, las-cruces, taos,
 *   farmington, hobbs, carlsbad, los-lunas, colorado, us-national, international
 *
 * VALID CATEGORIES: housing, shelter, mental-health, medical, food,
 *   legal, substance-use, domestic-violence, children, employment,
 *   lgbtq, sexual-assault, immigration, education, disability,
 *   faith-based, financial, advocacy, hotline
 */

const RESOURCES = [

  /* ========================================
     ALBUQUERQUE
  ======================================== */

  {
    name: "Barrett House",
    city: "albuquerque",
    categories: ["housing"],
    address: "10300 Constitution Ave NE, Albuquerque, NM 87112",
    phone: "(505) 246-9244",
    website: "http://www.barrettfoundation.org",
    description: "Emergency homeless shelter. Within three days of entering the shelter, each guest works with the Housing Stability Advocate to formulate an exit plan to find a home and live independently.",
    verified: "2026-04-21",
    lat: 35.093916, lng: -106.531786
  },

  {
    name: "Amistad Crisis Shelter/Youth at Risk Program (YDI)",
    city: "albuquerque",
    categories: ["housing", "mental-health", "substance-use"],
    address: "1706 Centro Familiar Blvd SW, Albuquerque, NM 87105",
    phone: "(505) 877-0371",
    website: "http://www.ydinm.org",
    description: "Amistad Crisis Shelter is a short-term (14-30 days) program that provides residential services to youth ages 12-17 Counseling, Crisis Intervention, Education, Emergency Shelter, Placement, Skills, Substance Abuse Help...",
    verified: "2026-04-21",
    lat: 35.030875, lng: -106.702422
  },

  {
    name: "Albuquerque Housing Authority (AHA)",
    city: "albuquerque",
    categories: ["housing"],
    address: "1840 University Blvd Albuquerque, NM 87106",
    phone: "(505) 764-3920",
    website: "https://abqha.org/",
    description: "AHA provides housing assistance programs to low-income families, elderly and disabled households. The AHA mission is to assist eligible households with decent, safe and affordable housing, to include living environmen...",
    verified: "2026-04-21",
    lat: 35.105619, lng: -106.623265
  },

  {
    name: "Sangre De Cristo House",
    city: "albuquerque",
    categories: ["housing", "substance-use"],
    address: "815 NM-22 Pena Blanca, NM 87041",
    phone: "(505) 465-2040",
    website: "",
    description: "A resource for woman in recovery Typical stay is 3-6 months Limited number of woman will be able to bring a young child (pre-school age) to the transitional program Clean and sober living environment",
    verified: "2026-04-21",
    lat: 35.572435, lng: -106.337287
  },

  {
    name: "Companion Animal Rescue Effort (CARE)",
    city: "albuquerque",
    categories: ["shelter"],
    address: "",
    phone: "(844) 323-2273",
    website: "http://www.apnm.org/programs/care",
    description: "CARE empowers individuals to leave abusive home environments by providing temporary housing for companion animals, livestock and exotic animals. Temporary homes are provided through a network of government agencies an...",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "ABQ Sexual Assault Nurse Examiners (SANE) Collaborative",
    city: "albuquerque",
    categories: ["legal", "medical", "sexual-assault"],
    address: "625 Silver Ave SW Albuquerque, NM 87102",
    phone: "(505) 883-8720",
    website: "http://www.abqsane.org",
    description: "Specially trained nurses are on-call to respond to immediate sexual assault cases. SANE nurses provide sensitive and objective medical care and collect forensic evidence from the sexual assault survivor. Medical treat...",
    verified: "2026-04-21",
    lat: 35.083318, lng: -106.655013
  },

  {
    name: "Healthcare for the Homeless",
    city: "albuquerque",
    categories: ["medical", "housing"],
    address: "1217 1st St NW Albuquerque, NM 87102",
    phone: "(505) 766-5197",
    website: "http://www.abqhch.org",
    description: "Physical healthcare for those in need Can provide motel vouchers for those in need of a place to stay while recovering from an illness",
    verified: "2026-04-21",
    lat: 35.094964, lng: -106.646216
  },

  {
    name: "New Mexico Department of Workforce Solutions",
    city: "albuquerque",
    categories: ["employment"],
    address: "401 Broadway Blvd NE, Albuquerque, NM 87102, USA",
    phone: "(505) 843-1900",
    website: "https://www.dws.state.nm.us/en-us/",
    description: "We Educate, Empower, Employ, and Enforce. The New Mexico Department of Workforce Solutions strives to be a leader in improving employment and poverty rates through workforce development, enhanced services for employer...",
    verified: "2026-04-21",
    lat: 35.086835, lng: -106.644072
  },

  {
    name: "New Mexico CASA Association",
    city: "albuquerque",
    categories: ["legal", "mental-health", "children"],
    address: "2340 Alamo Ave SE unit 112, Albuquerque, NM 87106, USA",
    phone: "(505) 515-0021",
    website: "https://newmexicocasa.org/",
    description: "The New Mexico CASA Association develops and supports local programs throughout New Mexico that provide quality volunteer advocacy in court for children who are abused and neglected. Advocate and problem-solving. Work...",
    verified: "2026-04-21",
    lat: 35.053966, lng: -106.620663
  },

  {
    name: "Supportive Housing Coalition of New Mexico",
    city: "albuquerque",
    categories: ["housing"],
    address: "PO Box 27459 Albuquerque, NM 87125",
    phone: "(505) 255-3643",
    website: "https://shcnm.org/",
    description: "Only provide property management",
    verified: "2026-04-21",
    lat: 35.09, lng: -106.64
  },

  {
    name: "John Marshalls",
    city: "albuquerque",
    categories: ["food", "financial"],
    address: "1500 Walter SE Albuquerque, NM 87102",
    phone: "(505) 848-1345",
    website: "https://www.cabq.gov/health-housing-homelessness/health/health-social-services/john-marshall",
    description: "Year around services: TEFAP food boxes Emergency diapers Emergency hygiene products Clothing bank Utility and rental assistance (based upon available funds) Notary public Information and referrals to other collaborati...",
    verified: "2026-04-21",
    lat: 35.069063, lng: -106.641334
  },

  {
    name: "Open Skies Healthcare",
    city: "albuquerque",
    categories: ["mental-health", "substance-use", "housing"],
    address: "303 Roma Ave NW, Suite 200, Albuquerque, NM 87102",
    phone: "(505) 345-8471",
    website: "http://www.openskieshealthcare.org/",
    description: "• Living with the family or independently • Parent/child relationships • Family and peer relationships • Managing behaviours • Making life choices • Substance abuse • Anger management • Depression and anxiety • Educat...",
    verified: "2026-04-21",
    lat: 35.08988, lng: -106.643729
  },

  {
    name: "TenderLove Community Center",
    city: "albuquerque",
    categories: ["housing", "mental-health", "employment", "education"],
    address: "1518 Girard Blvd NE, Albuquerque, NM 87106",
    phone: "(505) 349-1795",
    website: "https://tenderlovecommunitycenter.org/",
    description: "GED Preparation Computer Literacy & Job Readiness Parenting Support & On-site Childcare Sewing & Fashion Design Health Education & Nutrition Transitional Housing & Recovery Support Wrap-around Case Management & Employ...",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "The Community Lighthouse",
    city: "albuquerque",
    categories: ["mental-health", "substance-use"],
    address: "3301 Candelaria Rd NE, Suite B  Albuquerque, New Mexico 87107",
    phone: "(505) 273-6300",
    website: "https://www.tclhnm.com/",
    description: "“The Community Lighthouse is a family-owned business that has been providing counseling services to the greater Albuquerque area since 1994. We offer a diverse team of highly trained mental health professionals who ta...",
    verified: "2026-04-21",
    lat: 35.116929, lng: -106.60827
  },

  {
    name: "New Day Youth and Family Services",
    city: "albuquerque",
    categories: ["housing", "mental-health", "children"],
    address: "2820 Ridgecrest Dr SE Albuquerque, NM 87108",
    phone: "(505) 938-1060",
    website: "http://www.ndnm.org",
    description: "New Day provides many services for youth who are experiencing homelessness, including: A Safe Home for immediate refuge and an opportunity to look forward. A Life Skills Academy to develop the tools needed to walk the...",
    verified: "2026-04-21",
    lat: 35.052236, lng: -106.569843
  },

  {
    name: "Westside Emergency Housing Center",
    city: "albuquerque",
    categories: ["housing"],
    address: "7440 Jim McDowell Rd, Albuquerque, NM 87121, USA",
    phone: "(505) 839-9193",
    website: "https://www.cabq.gov/family/services/homeless-services/westside-emergency-housing-center",
    description: "Men and Women Welcome The Westside Emergency Housing Center located at 7440 Jim McDowell NW, offers a safe and welcoming environment to men and women experiencing homelessness in Albuquerque. The center is open year r...",
    verified: "2026-04-21",
    lat: 35.153493, lng: -106.816824
  },

  {
    name: "Catholic Charities (CICLA)",
    city: "albuquerque",
    categories: ["legal", "immigration"],
    address: "2010 Bridge SW, Albuquerque, NM 87105",
    phone: "(505) 539-0274",
    website: "https://www.ccasfnm.org/immigration.html",
    description: "The Center for Immigration and Citizenship Legal Assistance (CICLA) offers immigration representation in family-based immigration matters, consular processing, Deferred Action for Early Childhood Arrivals (DACA) renew...",
    verified: "2026-04-21",
    lat: 35.018088, lng: -106.661653
  },

  {
    name: "Roadrunner Food Bank",
    city: "albuquerque",
    categories: ["food"],
    address: "2645 Baylor SE Albuquerque, NM 87106",
    phone: "(505) 217-1066",
    website: "https://www.rrfb.org/",
    description: "Mobile food pantry",
    verified: "2026-04-21",
    lat: 35.05789, lng: -106.61817
  },

  {
    name: "New Season Treatment Center",
    city: "albuquerque",
    categories: ["substance-use"],
    address: "630 Haines Ave NW, Albuquerque, NM 87102",
    phone: "(877) 284-7074",
    website: "http://www.newseason.com",
    description: "Provides methadone and substance use counseling to people with opiate addiction",
    verified: "2026-04-21",
    lat: 35.103248, lng: -106.652083
  },

  {
    name: "New Mexico Dream Center",
    city: "albuquerque",
    categories: ["housing", "food", "advocacy"],
    address: "126 General Chennault St NE  Albuquerque, New Mexico 87123",
    phone: "(505) 900-3833",
    website: "http://www.nmdreamcenter.org",
    description: "NMDC serves victims or potential victims of human trafficking. Our program, Spoken For, provides aftercare services to survivors of human trafficking in the form of emergency shelter, transitional living apartments, c...",
    verified: "2026-04-21",
    lat: 35.074427, lng: -106.544113
  },

  {
    name: "Safe House",
    city: "albuquerque",
    categories: ["housing", "food", "domestic-violence", "shelter", "children"],
    address: "801 Encino Place NE Albuquerque, NM 87102",
    phone: "(505) 247-4219",
    website: "http://www.safehousenm.org",
    description: "Emergency Shelter for victims of domestic violence. An individual can stay here for up to three months. Children are also welcome. The shelter will provide three meals a day, and snacks, as well as clothing.",
    verified: "2026-04-21",
    lat: 35.090051, lng: -106.6324
  },

  {
    name: "Hopeworks",
    city: "albuquerque",
    categories: ["housing", "mental-health", "substance-use"],
    address: "1201 3rd St NW Albuquerque, NM 87102",
    phone: "(505) 242-4399",
    website: "http://hopeworksnm.org",
    description: "Provides CCSS, Mental Health Treatment, Psychiatry, and Housing.",
    verified: "2026-04-21",
    lat: 35.096044, lng: -106.648933
  },

  {
    name: "Storehouse, Inc.",
    city: "albuquerque",
    categories: ["food"],
    address: "106 Broadway SE, Ste A Albuquerque, NM 87102",
    phone: "(505) 842-6491",
    website: "https://storehousenm.org/",
    description: "Provides non-perishable food items",
    verified: "2026-04-21",
    lat: 35.083197, lng: -106.644282
  },

  {
    name: "Steel Bridge (Women in Crisis Center)",
    city: "albuquerque",
    categories: ["housing", "shelter", "children"],
    address: "2021 2nd St NW Albuquerque, NM 87102",
    phone: "(505) 346-4673",
    website: "http://www.mysteelbridge.org",
    description: "Day shelter for homeless and at-risk women and their children in an enclosed, nurturing, and safe environment. Caring staff and volunteers offer a lifeline during a time of crisis. Faith-based",
    verified: "2026-04-21",
    lat: 35.106699, lng: -106.645387
  },

  {
    name: "LGBTQ: Casa Q Youth Shelter",
    city: "albuquerque",
    categories: ["housing", "substance-use", "lgbtq"],
    address: "PO Box 36168 Albuquerque, NM 87175-6168",
    phone: "(505) 872-2099",
    website: "http://www.casaq.org",
    description: "Provide safe living options and services for lesbian, gay, bisexual, transgender, queer and questioning (LGBTQ) youth, and allies who are at risk of or experiencing homelessness. They can help with housing, as well as...",
    verified: "2026-04-21",
    lat: 35.084386, lng: -106.650422
  },

  {
    name: "NM Coalition of Sexual Assault Programs",
    city: "albuquerque",
    categories: ["legal", "mental-health", "sexual-assault", "advocacy"],
    address: "3909 Juan Tabo Pl NE #6, Albuquerque, NM 87111, USA",
    phone: "(505) 883-8020",
    website: "https://nmcsap.org/",
    description: "Traning for Sexual assault service programs, provide counseling.NMCSAP provides education, support, and advocacy to address all aspects of preventing and responding to sexual violence in NM from an anti-racist, anti-o...",
    verified: "2026-04-21",
    lat: 35.126369, lng: -106.514817
  },

  {
    name: "Joy Junction",
    city: "albuquerque",
    categories: ["housing", "food"],
    address: "4500 2nd St NW Albuquerque, NM 87105",
    phone: "(505) 877-6967",
    website: "http://www.joyjunction.org",
    description: "Provides shelter, food, and transportation to shelter. Faith-based, but not forced Children welcome",
    verified: "2026-04-21",
    lat: 35.128014, lng: -106.639525
  },

  {
    name: "ASAP Substance Abuse Treatment",
    city: "albuquerque",
    categories: ["substance-use", "medical"],
    address: "2600 Yale Blvd SE Albuquerque, NM 87106",
    phone: "(505) 994-7999",
    website: "https://unmhealth.org/",
    description: "Outpatient substance abuse treatment Primary Care Clinic offers adult primary care services for those being treated for substance abuse using preventative medicine",
    verified: "2026-04-21",
    lat: 35.053471, lng: -106.621348
  },

  {
    name: "New Mexico Immigrant Law Center",
    city: "albuquerque",
    categories: ["legal", "immigration"],
    address: "714 4th St SW Albuquerque, NM  87102",
    phone: "(505) 247-1023",
    website: "https://www.nmilc.org/",
    description: "The New Mexico Immigrant Law Center has worked to provide legal assistance and resources to build off of the resilience and power of our immigrant communities across our state. Our mission is to advance justice and eq...",
    verified: "2026-04-21",
    lat: 35.078005, lng: -106.652664
  },

  {
    name: "Bernalillo County Substance Abuse Program",
    city: "albuquerque",
    categories: ["substance-use", "medical"],
    address: "5901 Zuni Road SE Albuquerque, NM 87108",
    phone: "(505) 468-1550",
    website: "https://www.bernco.gov/department-behavioral-health-services/campus-services/addiction-treatment-program/",
    description: "Methadone clinic Medicaid accepted Provides expedited services for those with children. Immediate service for pregnant women. Wait time can be longer than two weeks. People under the age of 21 will be taken immediatel...",
    verified: "2026-04-21",
    lat: 35.073605, lng: -106.580045
  },

  {
    name: "Duke City Recovery Toolbox",
    city: "albuquerque",
    categories: ["substance-use", "mental-health", "medical"],
    address: "912 1st St NW Albuquerque, NM 87102",
    phone: "(505) 224-9777",
    website: "https://www.dukecityrecovery.com/",
    description: "Integrated addiction recovery services and mental health services, including medication, individual and/or family counseling and spiritual support (if desired) as well as medical care for patients receiving medication...",
    verified: "2026-04-21",
    lat: 35.092133, lng: -106.646285
  },

  {
    name: "Para los Niños (UNM Hospital)",
    city: "albuquerque",
    categories: ["medical"],
    address: "625 Silver Ave SW, 2nd floor, Albuquerque, NM 87102",
    phone: "(505) 272-6849",
    website: "https://cec.unm.edu/project_detail.php?project=3152",
    description: "Para los Ninos can treat youth without payment or insurance. ***If you come in contact with youth who need medical attention, please refer them to Para Los Ninos. They can provide birth control, STI testing, and other...",
    verified: "2026-04-21",
    lat: 35.081282, lng: -106.640317
  },

  {
    name: "Best Buddies",
    city: "albuquerque",
    categories: ["employment", "mental-health", "medical", "disability"],
    address: "3507 Wyoming Blvd NE a, Albuquerque, NM 87111, USA",
    phone: "(505) 299-2552",
    website: "https://www.bestbuddies.org/newmexico/",
    description: "Serves individuals with IDD and their families. The IDD community includes, but is not limited to, people with Down syndrome, autism, Fragile X, Williams syndrome, and other undiagnosed disabilities.",
    verified: "2026-04-21",
    lat: 35.122423, lng: -106.551604
  },

  {
    name: "Haven House",
    city: "albuquerque",
    categories: ["housing", "domestic-violence", "legal", "employment"],
    address: "PO Box 15611 Rio Rancho, NM 87174",
    phone: "(505) 896-4869",
    website: "http://www.havenhouseinc.org",
    description: "Haven House operates a 5-bedroom DV shelter with capacity for 20. Also offered: -support groups, legal advocacy, case management, employment assistance; -housing assistance; -education, 52 week batterers' intervention...",
    verified: "2026-04-21",
    lat: 35.24, lng: -106.67
  },

  /* ========================================
     SANTA FE
  ======================================== */

  {
    name: "The Life Link",
    city: "santa-fe",
    categories: ["advocacy", "hotline", "housing", "mental-health", "substance-use"],
    address: "2325 Cerrillos Road, Santa Fe, NM 87505",
    phone: "(505) 438-0010",
    website: "https://www.thelifelink.org",
    description: "Comprehensive services for individuals experiencing issues related to homelessness, mental health, substance use, and other behavioral health challenges. Operator of New Mexico's largest and most comprehensive human trafficking aftercare program and operator of the 505 GET FREE Human Trafficking Hotline.",
    verified: "2026-04-21",
    lat: 35.660949, lng: -105.981601
  },

  {
    name: "Youth Shelters and Family Services",
    city: "santa-fe",
    categories: ["housing", "food", "mental-health", "children", "education"],
    address: "5686 Agua Fria St B  Santa Fe, NM 87507",
    phone: "(505) 983-0586",
    website: "https://youthshelters.org/",
    description: "Our 24-hour shelter is a safe haven for youth in crisis, serving ages 10-17. The Shelter addresses health needs, mental health support, safety, education, and basic life skills development Our Transitional Living Prog...",
    verified: "2026-04-21",
    lat: 35.639806, lng: -106.05068
  },


  {
    name: "Esperanza Shelter for Battered Families",
    city: "santa-fe",
    categories: ["housing", "shelter", "domestic-violence"],
    address: "3130 Rufina Street, Santa Fe, NM 87507",
    phone: "(505) 416-7184",
    website: "https://esperanzashelter.org/",
    description: "Provides temporary shelter for victims of domestic violence and human trafficking",
    verified: "2026-04-21",
    lat: 35.655365, lng: -105.996383
  },

  {
    name: "Santa Fe Recovery Center",
    city: "santa-fe",
    categories: ["substance-use"],
    address: "2504 Camino Entrada, Santa Fe, NM 87507",
    phone: "(505) 471-4985",
    website: "https://www.sfrecovery.org/",
    description: "Outpatient and Intensive Outpatient drug and alcohol treatment in Santa Fe and Española. 30-day residential care 3 - 7 day social detox",
    verified: "2026-04-21",
    lat: 35.626101, lng: -106.026777
  },

  {
    name: "Friendship Club",
    city: "santa-fe",
    categories: ["substance-use"],
    address: "1316 Apache Avenue, Santa Fe, NM, 87505 USA",
    phone: "(505) 982-9040",
    website: "https://friendshipclubsantafe.org/",
    description: "Our mission is to provide and maintain a multi-use community center that promotes activities and events focusing on mental, spiritual and physical recovery. We provide an inviting, supportive environment where people ...",
    verified: "2026-04-21",
    lat: 35.662434, lng: -105.979857
  },

  {
    name: "Bienvenidos Outreach, Inc.",
    city: "santa-fe",
    categories: ["food"],
    address: "1511 Fifth Street Santa Fe, NM 87505",
    phone: "(505) 986-0583",
    website: "http://bienvenidosfoodpantry.org",
    description: "rovides food boxes to people in need",
    verified: "2026-04-21",
    lat: 35.66395, lng: -105.971135
  },

  {
    name: "Casa Familia/St Elizabeth's Emergency Men's Shelter",
    city: "santa-fe",
    categories: ["housing", "food", "mental-health"],
    address: "1604 Berry Ave  Santa Fe, NM 87505",
    phone: "(505) 983-2042",
    website: "https://www.steshelter.org/",
    description: "​St. Elizabeth Shelter and Supportive Housing is dedicated to assisting homeless individuals and families by providing emergency shelter, food, case management, and counseling, as well as supportive housing and referr...",
    verified: "2026-04-21",
    lat: 35.66635, lng: -105.968312
  },

  {
    name: "Southwest Care Center",
    city: "santa-fe",
    categories: ["medical", "mental-health", "substance-use"],
    address: "649 Harkle Road, Suite E, Santa Fe, NM 87505",
    phone: "(505) 955-9454",
    website: "https://southwestcare.org/",
    description: "Southwest Care has been delivering exceptional medical, behavioral, and pharmaceutical services in our community for 25 years. We provide compassionate care in a judgement-free environment where your health, wellbeing...",
    verified: "2026-04-21",
    lat: 35.659625, lng: -105.950848
  },

  {
    name: "Solace Sexual Assault Services",
    city: "santa-fe",
    categories: ["mental-health", "medical", "sexual-assault"],
    address: "6601 Valentine Way, Santa Fe, NM 87507",
    phone: "(505) 988-1951",
    website: "https://www.findsolace.org",
    description: "Crisis stabilization and sexual assault examination",
    verified: "2026-04-21",
    lat: 35.626209, lng: -106.051665
  },

  {
    name: "Adelante (SFPS)",
    city: "santa-fe",
    categories: ["food", "education", "children"],
    address: "1300 Camino Sierra Vista, Santa Fe, NM 87505",
    phone: "(505) 467-2524",
    website: "https://www.sfps.info/page/adelante-program",
    description: "The SFPS Adelante program provides the following types of services: Access to school clothing, school supplies, and backpacks; Referrals and linkages for mental health, housing, medical, and other social service needs...",
    verified: "2026-04-21",
    lat: 35.679048, lng: -105.95888
  },


  {
    name: "Many Mothers",
    city: "santa-fe",
    categories: ["mental-health", "children"],
    address: "4001 Office Court Drive suite 207, Santa Fe, NM 87507, USA",
    phone: "(505) 983-5984",
    website: "https://manymothers.org/",
    description: "Provide services for children, infant, and pregnant women. Free diapers for families, hours of volunteer-home support.",
    verified: "2026-04-21",
    lat: 35.632834, lng: -106.015601
  },

  {
    name: "The Mountain Center",
    city: "santa-fe",
    categories: ["mental-health", "housing", "lgbtq", "substance-use"],
    address: "1524 Bishops Lodge Rd # B, Santa Fe, NM 87506",
    phone: "(505) 983-6158",
    website: "https://www.themountaincenter.org",
    description: "Therapeutic Adventure, Emergence, NM Genders and Sexualities, Harm Reduction, Transitional Living Program, Counseling Services, Professional Development",
    verified: "2026-04-21",
    lat: 35.69416, lng: -105.933465
  },

  {
    name: "Youth Shelters Street Outreach",
    city: "santa-fe",
    categories: ["food", "housing", "children"],
    address: "402 St. Francis Dr.  Santa Fe, NM 87501",
    phone: "(505) 471-4985",
    website: "https://youthshelters.org/programs/",
    description: "Street Outreach Program provides street-based critical services such as food, water and blankets to youth up to age 21 with nowhere to go. Many camp in the mountains, live in cars or sleep in abandoned buildings. Stre...",
    verified: "2026-04-21",
    lat: 35.683669, lng: -105.955323
  },

  {
    name: "YouthWorks",
    city: "santa-fe",
    categories: ["employment", "education", "children"],
    address: "1505 Llano St., Santa Fe, NM 87505",
    phone: "(505) 989-1855",
    website: "https://www.santafeyouthworks.org/",
    description: "YouthWorks offers a continuum of services designed to reconnect “at-risk” and disadvantaged youth with our community through education, employment training, and job placement.",
    verified: "2026-04-21",
    lat: 35.668599, lng: -105.966912
  },

  /* ========================================
     LAS CRUCES
  ======================================== */

  {
    name: "Roadrunner Food Bank",
    city: "las-cruces",
    categories: ["food"],
    address: "2100 N Main, Suite 2, Las Cruces, NM 88001",
    phone: "(575) 523-4390",
    website: "http://rrfb.org",
    description: "One food box is distributed to a single person based on need",
    verified: "2026-04-21",
    lat: 32.303789, lng: -106.775623
  },

  {
    name: "La Pinon",
    city: "las-cruces",
    categories: ["housing", "mental-health", "advocacy"],
    address: "850 N Motel Blvd Las Cruces, NM 88007",
    phone: "(575) 526-3437",
    website: "http://lapinon.org",
    description: "Provides case management for victims of human trafficking and several types of services. Human traffiking and child abuse for healing and comprehensive services.",
    verified: "2026-04-21",
    lat: 32.306857, lng: -106.814012
  },

  {
    name: "Casa de Peregrinos",
    city: "las-cruces",
    categories: ["food"],
    address: "999 W Amador Ave, Las Cruces, NM 88005",
    phone: "(575) 523-5542",
    website: "https://casadeperegrinos.org",
    description: "Offers groceries for people to take home on the same day",
    verified: "2026-04-21",
    lat: 32.302665, lng: -106.78839
  },

  {
    name: "Memorial Medical Center",
    city: "las-cruces",
    categories: ["medical"],
    address: "2450 S Telshor Blvd Las Cruces, NM 88011",
    phone: "(575) 522-8641",
    website: "https://www.mmclc.org/",
    description: "Emergent and non-emergent services provided",
    verified: "2026-04-21",
    lat: 32.29204, lng: -106.736088
  },

  {
    name: "La Casa, Inc.",
    city: "las-cruces",
    categories: ["housing"],
    address: "800 South Walnut Street, Las Cruces, NM 88001, USA",
    phone: "(575) 526-2819",
    website: "https://lacasainc.org/",
    description: "Emergency housing services Up to two years transitional housing offered",
    verified: "2026-04-21",
    lat: 32.309923, lng: -106.754345
  },

  /* ========================================
     TAOS
  ======================================== */

  {
    name: "Community Against Violence (CAV)",
    city: "taos",
    categories: ["housing", "domestic-violence", "sexual-assault", "legal", "mental-health", "hotline", "children"],
    address: "945 Salazar Rd, Taos, NM 87571",
    phone: "(575) 758-9888",
    website: "https://taoscav.org/",
    description: "CAV offers a 24-Hour Helpline (575) 758-9888 for survivors of domestic and sexual violence. We provide legal and medical advocacy services, counseling and support groups, children’s programs, community prevention and ...",
    verified: "2026-04-21",
    lat: 36.407213, lng: -105.573379
  },

  {
    name: "The Shared Table Taos",
    city: "taos",
    categories: ["food"],
    address: "1309 Paseo Del Pueblo Norte, El Prado, NM 87529",
    phone: "(575) 758-3166",
    website: "http://elpueblitoumc.org/",
    description: "Food pantry service",
    verified: "2026-04-21",
    lat: 36.383122, lng: -105.581599
  },

  {
    name: "El Centro Family Services",
    city: "taos",
    categories: ["medical"],
    address: "1331 Gusdorf Road Taos, NM 87571",
    phone: "(575) 758-3601",
    website: "http://www.ecfh.org",
    description: "Medical services on a sliding scale",
    verified: "2026-04-21",
    lat: 36.373018, lng: -105.589873
  },

  {
    name: "Taos Men's Shelter",
    city: "taos",
    categories: ["housing"],
    address: "220 Albright Street, Taos NM 87571",
    phone: "(575) 779-9198",
    website: "https://www.taosmensshelter.org/",
    description: "Emergency overnight shelter for men 18 and older.",
    verified: "2026-04-21",
    lat: 36.395199, lng: -105.575702
  },

  {
    name: "Dream Tree",
    city: "taos",
    categories: ["housing"],
    address: "128 La Posta Road, Taos, NM 87571",
    phone: "(575) 758-9595",
    website: "https://www.dreamtreeproject.org/",
    description: "DreamTree Project offers emergency teen shelter, a transitional home and resources for youth throughout northern New Mexico, including Colfax, Mora, Rio Arriba, Taos and Union counties. Our emergency teen shelter is o...",
    verified: "2026-04-21",
    lat: 36.394353, lng: -105.583414
  },

  /* ========================================
     FARMINGTON
  ======================================== */

  {
    name: "Echo Inc",
    city: "farmington",
    categories: ["food", "employment", "housing"],
    address: "401 S. Commercial Farmington, NM 87401",
    phone: "(505) 326-3770",
    website: "https://echoinc.org/",
    description: "Economic Council Helping Others, Inc. provides numerous services to low-income individuals and families in San Juan County. These services include the following: Commodity Supplemental Food Program (CSFP) - assists in...",
    verified: "2026-04-21",
    lat: 36.72569, lng: -108.204799
  },

  {
    name: "Totah Behavioral Health Authority",
    city: "farmington",
    categories: ["substance-use", "housing", "mental-health"],
    address: "1615 Ojo Court Farmington, N.M. 87499",
    phone: "(505) 564-4804",
    website: "https://www.pmsnm.org/locations/totah-behavioral-health-authority/",
    description: "Substance Abuse Outpatient Treatment Totah Behavioral Health Authority (TBHA) offers comprehensive community support services, individual counseling, group counseling, faith based groups, assessment and referrals to r...",
    verified: "2026-04-21",
    lat: 36.721284, lng: -108.233463
  },

  /* ========================================
     HOBBS
  ======================================== */

  {
    name: "The Phoenix House",
    city: "hobbs",
    categories: ["medical", "sexual-assault", "domestic-violence", "legal", "advocacy"],
    address: "221 E. Green Acres Dr, Hobbs, NM 88240",
    phone: "(575) 942-1911",
    website: "https://www.phhobbs.org/",
    description: "Sexual Assault and Domestic Violence Resource Center Providing Forensic Nursing (Sexual Assault Exams, Domestic Violence Exams, Strangulation, Delayed Disclosures) and Victim Advocacy (Crisis Advocacy, Legal Advocacy,...",
    verified: "2026-04-21",
    lat: 32.702612, lng: -103.13604
  },

  /* ========================================
     CARLSBAD
  ======================================== */

  {
    name: "Artesia Healthcare and Rehabilitation Center",
    city: "carlsbad",
    categories: ["medical", "mental-health"],
    address: "1402 W Gilchrist Ave, Artesia, NM 88210",
    phone: "(575) 746-6006",
    website: "https://artesiahc.com/",
    description: "Provieded services like 24/7 RN Coverage, Aggressive wound progrem, Diabetic Care management, Phisical Therapy, Occupational Therapy, and IV Therapy.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Cavern City Child Advocacy Center",
    city: "carlsbad",
    categories: ["mental-health", "children", "legal", "sexual-assault", "advocacy"],
    address: "1313 W Mermod St, Carlsbad, NM 88220",
    phone: "(575) 200-3929",
    website: "https://www.senmcac.com/home",
    description: "The mission of the Cavern City CAC is: • To provide child abuse prevention and awareness training to children within their reach; • To provide forensically sound child interviews to service agencies; • To provide SANE...",
    verified: "2026-04-21",
    lat: 32.420234, lng: -104.243512
  },

  {
    name: "Grammy's House",
    city: "carlsbad",
    categories: ["legal", "domestic-violence", "advocacy", "children"],
    address: "811 W Texas Ave, Artesia, NM 88210, USA",
    phone: "(575) 748-1198",
    website: "https://grammyshouse.org/",
    description: "Grammy’s House seeks to provide a safe environment assisting in the advocacy, education, and empowerment of victims and child-witness victims of domestic violence.",
    verified: "2026-04-21",
    lat: 32.843068, lng: -104.407018
  },

  {
    name: "Foundry Home",
    city: "carlsbad",
    categories: ["mental-health", "housing", "shelter", "children"],
    address: "2317 Jackson, PO Box 1441 Carlsbad, NM 88221",
    phone: "(888) 808-2775",
    website: "https://www.senmcac.com/foundryhome",
    description: "Cavern City CAC's Foundry Home (low barrier youth crisis shelter). The Foundry Home is a low-barrier youth crisis shelter that provides beds for up to eight youth, ages 12-17 for twenty-one days.",
    verified: "2026-04-21",
    lat: 32.42, lng: -104.229999
  },

  {
    name: "Haven of Hope NM",
    city: "carlsbad",
    categories: ["employment", "housing", "children"],
    address: "",
    phone: "(575) 231-7334",
    website: "https://www.havenofhopenm.com/",
    description: "Empowering exceptional single mothers, offering stable community living and resources to cultivate self-reliance for their families",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  /* ========================================
     LOS LUNAS
  ======================================== */

  {
    name: "Los Lunas Public Health Office",
    city: "los-lunas",
    categories: ["medical"],
    address: "445 Camino Del Rey SW, Suite A, Los Lunas, NM 87031",
    phone: "(505) 222-0940",
    website: "https://www.nmhealth.org/location/public/#Valencia",
    description: "",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },


  {
    name: "Southwest Family Guidance Center",
    city: "las-cruces",
    categories: ["mental-health"],
    address: "755 S. Telshor Blvd, Suite 201B, Las Cruces, NM 88011",
    phone: "(575) 524-6820",
    website: "https://swfamily.com/",
    description: "Provide personalized behavioral health services.",
    verified: "2026-04-21",
    lat: 32.311699, lng: -106.740939
  },

  {
    name: "Duke City Urgent Care (Los Lunas)",
    city: "los-lunas",
    categories: ["medical"],
    address: "1044 Main St NE, Los Lunas, NM 87031",
    phone: "(505) 814-1995",
    website: "https://www.dukecityurgentcare.com/",
    description: "Providing urgent care",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Valencia Shelter Services",
    city: "los-lunas",
    categories: ["housing", "shelter", "domestic-violence", "sexual-assault", "mental-health", "children"],
    address: "445 Camino Del Rey Southwest suite e, Los Lunas, NM 87031, USA",
    phone: "(505) 565-3100",
    website: "https://www.vssnm.org/",
    description: "Helps individuals affected by domestic and sexual violence and child abuse in their efforts to move their lives forward. Provide shelter, housing, counseling, and advocacy to support them in building lives free from t...",
    verified: "2026-04-21",
    lat: 34.811131, lng: -106.761343
  },

  {
    name: "Valencia Counseling Services, Inc.",
    city: "los-lunas",
    categories: ["mental-health", "food"],
    address: "703 Don Pasqual Rd NW, Los Lunas, NM 87031",
    phone: "(505) 861-7090",
    website: "http://www.vcs-nm.com",
    description: "For mental health, crisis intervention, help clients continue to reside at home, providing home visits, and the availability of group therapy. Primary food program: providing food serves chronically mentally ill adult...",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Bella Vida Healthcare Clinic",
    city: "los-lunas",
    categories: ["medical"],
    address: "328 Main St SW, Los Lunas, NM 87031",
    phone: "(505) 916-5446",
    website: "http://bellavidaclinic.com/",
    description: "Primary care and walk-in clinic",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "First Choice Community Healthcare",
    city: "los-lunas",
    categories: ["medical", "mental-health", "substance-use"],
    address: "145 Don Pasqual NW, Los Lunas, NM 87031",
    phone: "(505) 865-4618",
    website: "https://www.fcch.com/location/los-lunas-health-center/",
    description: "Services provided at this location: Primary Care | Dental | Behavioral Health | Women’s Health | Substance Use Disorder Treatment | Pharmacy | Lab | Health Education | Specialty Care | Telehealth",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Presbyterian Behavioral Health",
    city: "los-lunas",
    categories: ["mental-health", "substance-use"],
    address: "200 Emilio Lopez Rd NW, Los Lunas, NM 87031",
    phone: "(505) 866-2700",
    website: "https://www.phs.org/",
    description: "Presbyterian Healthcare Services is committed to improving access to health care, behavioral health, health insurance coverage, community supports, healthy food, and opportunities for exercise, and supporting everyone...",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Valencia Family Medicine",
    city: "los-lunas",
    categories: ["medical"],
    address: "311 S Los Lentes Rd, Los Lunas, NM 87031",
    phone: "(505) 565-2232",
    website: "",
    description: "",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Valencia Health & Wellness",
    city: "los-lunas",
    categories: ["medical"],
    address: "101 N 6th St, Belen, NM 87002", // note: located in Belen, not Los Lunas proper
    phone: "(505) 317-7773",
    website: "https://vhwell.com/",
    description: "Physical therapy, Acupuncture,and aesthetics provided.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Income Support Division",
    city: "los-lunas",
    categories: ["employment", "financial"],
    address: "445 Camino Del Rey SW, Suite B, Los Lunas, NM 87031",
    phone: "(800) 283-4465",
    website: "https://www.hca.nm.gov/",
    description: "providing whole-person, cost-effective, accessible, and high-quality health care and safety-net services.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Journey to Wellness Counseling & Mental Health",
    city: "los-lunas",
    categories: ["mental-health", "children"],
    address: "1050 Maxfield Ave NE, Los Lunas, NM 87031",
    phone: "(505) 944-6626",
    website: "https://jtwcounseling.com/",
    description: "Offer therapy services for children, adolescents, adults, elderly and families.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  /* ========================================
     COLORADO (Regional)
  ======================================== */

  {
    name: "Colorado Feeding Kids",
    city: "colorado",
    categories: ["food", "children"],
    address: "14107 E Exposition Ave, Aurora, CO 80012, USA",
    phone: "(720) 560-2354",
    website: "https://www.cofeedingkids.org/",
    description: "Providing food for kids and families. On the first and the third Sauturday of every month host a public meal pack.",
    verified: "2026-04-21",
    lat: 39.7046, lng: -104.824789
  },

  {
    name: "Colorado Dream Foundation",
    city: "colorado",
    categories: ["employment", "food", "children", "education"],
    address: "1836 Grant St #2, Denver, CO 80203, USA",
    phone: "(303) 861-5005",
    website: "https://www.coloradodream.org/",
    description: "Working with youth and their families as their successfully nevigate school, college and career by providing a holistic academic, social, and emotional program from elementary school through college, along with postse...",
    verified: "2026-04-21",
    lat: 39.745931, lng: -104.98312
  },

  {
    name: "Volunteer of outdoor Colorado",
    city: "colorado",
    categories: ["employment", "mental-health"],
    address: "",
    phone: "(303) 715-1010",
    website: "https://www.voc.org/",
    description: "Motivate and enable people to become active stewards of Colorado's natural resources.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Mile High United Way",
    city: "colorado",
    categories: ["food", "employment", "housing", "children", "education"],
    address: "",
    phone: "(303) 433-8383",
    website: "https://unitedwaydenver.org/",
    description: "Connect community members to the resources they need to thrive, grow and move. Providing people with basic needs, homelessness prevention and housing stability, early child care and education and small business and wo...",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Project Angel Heart",
    city: "colorado",
    categories: ["food", "mental-health", "medical"],
    address: "",
    phone: "(719) 323-0084",
    website: "https://www.projectangelheart.org/",
    description: "For people with sereve illness to have access to nutritious food that supports their health and well-being. Volunteers help pack and deliver each meal to the people who is too sick and in needs.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Caring For Colorado Foundation",
    city: "colorado",
    categories: ["food", "employment", "children", "education"],
    address: "1635 W 13th Ave suite 303, Denver, CO 80204, USA",
    phone: "(720) 524-0770",
    website: "https://caringforcolorado.org/",
    description: "Creating equity in health, well-being, and oppunity for Colorado's young people and their family.",
    verified: "2026-04-21",
    lat: 39.737266, lng: -105.008651
  },

  {
    name: "Altlantis Community. Inc",
    city: "colorado",
    categories: ["medical", "disability", "advocacy"],
    address: "201 S Cherokee St unit 100, Denver, CO 80223, USA",
    phone: "(303) 733-9324",
    website: "https://atlantiscommunity.org/",
    description: "To advocate all people with disability and providing individuals with disabilities the skills and support tho achieve what others take for granted",
    verified: "2026-04-21",
    lat: 39.712655, lng: -104.992958
  },

  {
    name: "The Center on Colfax-LGBTQ Colorado",
    city: "colorado",
    categories: ["legal", "lgbtq", "advocacy"],
    address: "1301 E. Colfax Ave, Denver, CO 80218",
    phone: "(303) 733-7743",
    website: "https://lgbtqcolorado.org/",
    description: "Giving voice to Colorado's lesbian, gay, bisexual, transgender, and queer(LGBTQ) community and playing a pivotal role in statewide initiavities to reduce harassment and discrimination.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "Colorado Coalition for the Homeless-Dept of Outreach & Engagement",
    city: "colorado",
    categories: ["housing", "shelter", "advocacy"],
    address: "2100 Stout St, Denver, CO 80205, USA",
    phone: "(303) 312-9676",
    website: "https://www.coloradocoalition.org/",
    description: "For People who is expericing or at risk of homelessness, to provide housing and a stability to improve the health and well-being of all communities.",
    verified: "2026-04-21",
    lat: 39.750494, lng: -104.986667
  },

  {
    name: "Another Life Foundation",
    city: "colorado",
    categories: ["employment", "mental-health", "financial"],
    address: "5050 Edison Ave suite 217, Colorado Springs, CO 80915, USA",
    phone: "(719) 216-7238",
    website: "https://www.anotherlifefoundation.com/",
    description: "Promto mental illness, Fincial empowerment, and life saving support bu eduacating the public. Providing comprehesive resources in health, enconomic mobility, and mental wellness for all.",
    verified: "2026-04-21",
    lat: 38.841055, lng: -104.734033
  },

  {
    name: "Food Bank of the Rockies",
    city: "colorado",
    categories: ["food"],
    address: "10700 E 45th Ave, Denver, CO 80239, USA",
    phone: "(303) 371-9250",
    website: "https://www.foodbankrockies.org/",
    description: "provding food and necessties to people in need.",
    verified: "2026-04-21",
    lat: 39.777716, lng: -104.863715
  },

  {
    name: "Charity's Hope",
    city: "colorado",
    categories: ["food"],
    address: "201 N Chelton Rd, Colorado Springs, CO 80909, USA",
    phone: "(719) 332-2360",
    website: "https://www.charityshopecs.org/",
    description: "provide essential resources, including food, clothing, hygiene, and school supplies",
    verified: "2026-04-21",
    lat: 38.836026, lng: -104.766505
  },

  {
    name: "A Little Help",
    city: "colorado",
    categories: ["food", "mental-health", "employment"],
    address: "2755 S Locust St suite 220, Denver, CO 80222, USA",
    phone: "(720) 242-9032",
    website: "https://alittlehelp.org/",
    description: "A little help connects volunteers with older adults to provide essential support, including transportation, yard work, friendly visits, tech assistance, and more.",
    verified: "2026-04-21",
    lat: 39.66638, lng: -104.916026
  },

  {
    name: "Advocacy Denver",
    city: "colorado",
    categories: ["legal", "disability", "advocacy"],
    address: "950 South Cherry Street suite 1100, Denver, CO 80246, USA",
    phone: "(303) 831-7733",
    website: "https://www.advocacydenver.org/",
    description: "Provide active voice and civil rights for people with disabilities. Serving children, teens, and adults with developmental or intellectual disabilities and their family.",
    verified: "2026-04-21",
    lat: 39.698914, lng: -104.93321
  },

  {
    name: "Colorado Immgrant Rights Coalition",
    city: "colorado",
    categories: ["legal", "immigration", "advocacy"],
    address: "2525 W Alameda Ave, Denver, CO 80219, USA",
    phone: "(303) 922-3344",
    website: "https://coloradoimmigrant.org/",
    description: "Advocate the rights for all immgrants and refugees and their family. Helping community and people to know the rights and expand collabration and coordination among immigrants and allies.",
    verified: "2026-04-21",
    lat: 39.711456, lng: -105.017433
  },

  {
    name: "Special Kids Special Families",
    city: "colorado",
    categories: ["medical", "disability", "children"],
    address: "1915 Aerotech Dr suite 100, Colorado Springs, CO 80916, USA",
    phone: "(719) 447-8983",
    website: "https://sksfcolorado.org/",
    description: "Taking care for children and adults with disabilities.",
    verified: "2026-04-21",
    lat: 38.804751, lng: -104.733772
  },

  {
    name: "Harvest of Hope Pantry",
    city: "colorado",
    categories: ["food"],
    address: "4830 Pearl St, Boulder, CO 80301, USA",
    phone: "(720) 382-1971",
    website: "https://hopepantry.org/",
    description: "Provide healthy supplemental food to families and individuals in need of food assistance. We provide fruit, vegetables, bakery items, canned foods, dairy, meat, and frozen foods.",
    verified: "2026-04-21",
    lat: 40.025047, lng: -105.24092
  },

  /* ========================================
     U.S. NATIONAL
  ======================================== */

  {
    name: "Oklahoma Coalition Against Human Trafficking",
    city: "us-national",
    categories: ["legal"],
    address: "",
    phone: "(918) 742-7480",
    website: "https://ocatoklahoma.org/",
    description: "A collaborative effort involving various stakeholders in Oklahoma to address human trafficking.",
    lat: 0, lng: 0
  },

  {
    name: "Lanier Law Firm",
    city: "us-national",
    categories: ["legal"],
    address: "10940 W. Sam Houston Pkwy N, Suite 100  Houston, TX  77064",
    phone: "(505) 341-0042",
    website: "https://www.lanierlawfirm.com/trucking-and-human-trafficking/",
    description: "Human Trafficking Law Services",
    verified: "2026-04-21",
    lat: 29.922818, lng: -95.55427
  },

  {
    name: "The Dragonfly Home",
    city: "us-national",
    categories: ["legal", "housing", "advocacy"],
    address: "",
    phone: "(405) 212-3378",
    website: "https://www.endslaverynow.org/the-dragonfly-home",
    description: "Focused on serving victim-survivors of human trafficking. Operates housing assistance program and community outreach.",
    lat: 0, lng: 0
  },

  {
    name: "Feed the Children",
    city: "us-national",
    categories: ["food", "children"],
    address: "",
    phone: "(800) 627-4556",
    website: "https://www.feedthechildren.org/about/",
    description: "Helping children and falimiles, support food and household essentials. Offer food banks and food pantries, and school meal program.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "ARISE Sexual Assault Services",
    city: "us-national",
    categories: ["legal", "sexual-assault", "mental-health"],
    address: "801 W 18th St, Portales, NM 88130, USA",
    phone: "(575) 226-7263",
    website: "https://www.arisenm.org/",
    description: "ARISE Sexual Assault Services provides free emergency services for individuals who experience sexual assault in and around Quay, De Bacca, Rossevelt, Curry, Harding, and Union Conties. Provide conseling for sexual tra...",
    verified: "2026-04-21",
    lat: 34.171041, lng: -103.339677
  },

  {
    name: "Roberta's Place Inc.",
    city: "us-national",
    categories: ["domestic-violence", "housing", "children", "legal"],
    address: "805 E Roosevelt Ave, Grants, NM 87020",
    phone: "(505) 287-7200",
    website: "http://robertasplace.net/index2.html",
    description: "Roberta's Place, Inc. is committed to working for personal, community and social change to eliminate Domestic Violence in the lives of women, children, and families. Roberta's place achieves this by providing the foll...",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "National Human Trafficking Hotline",
    city: "us-national",
    categories: ["legal", "hotline", "advocacy"],
    address: "",
    phone: "(888) 373-7888",
    website: "https://humantraffickinghotline.org/",
    description: "A hotline that connects victims and survivors with services and supports, and also works with service providers and law enforcement in Oklahoma.",
    verified: "2026-04-21",
    lat: 0, lng: 0
  },

  {
    name: "A New Leaf",
    city: "us-national",
    categories: ["housing", "legal", "shelter"],
    address: "868 East University Drive, Mesa, AZ 85203, USA",
    phone: "(480) 969-4024",
    website: "https://turnanewleaf.org",
    description: "Provides emergency shelter, rapid re-housing assistance, and wrap-around support services for survivors of human trafficking.",
    verified: "2026-04-21",
    lat: 33.422718, lng: -111.812016
  },

  {
    name: "No Boundaries International",
    city: "us-national",
    categories: ["legal", "mental-health", "housing", "advocacy"],
    address: "",
    phone: "(405) 513-5453",
    website: "https://www.nbint.org/",
    description: "Working to combat human trafficking, sexual explotation, and homelessness. This program offers therapy one-on-one session, group sessions, and free e-course. Outreach on street to help homeless and people in need.",
    lat: 0, lng: 0
  },

  {
    name: "Preble Street",
    city: "us-national",
    categories: ["housing", "shelter", "food", "medical", "mental-health", "substance-use", "advocacy"],
    address: "55 Portland Street, Portland, ME 04101",
    phone: "(207) 775-0026",
    website: "https://preblestreet.org/",
    description: "Provides accessible, barrier-free services to empower people experiencing homelessness, housing instability, hunger, and poverty. Programs include emergency shelter, permanent supportive housing, food access, healthcare, substance use treatment, mental health services, and human trafficking survivor support.",
    verified: "2026-04-22",
    lat: 43.6574, lng: -70.2621
  },

  /* ========================================
     INTERNATIONAL
  ======================================== */

  {
    name: "Canadian Human Trafficking Hotline",
    city: "international",
    categories: ["legal", "hotline"],
    address: "",
    phone: "(833) 900-1010",
    website: "https://www.canadianhumantraffickinghotline.ca/",
    description: "The Canadian Human Trafficking Hotline is a confidential, multilingual service, operating 24/7 to connect victims and survivors with social services, law enforcement, and emergency services, as well as receive tips fr...",
    verified: "2026-04-21",
    lat: 0, lng: 0
  }

];

const ALL_CATEGORIES = [
  { id: "shelter",          label: "Shelter" },
  { id: "housing",          label: "Housing" },
  { id: "food",             label: "Food" },
  { id: "mental-health",    label: "Mental Health" },
  { id: "medical",          label: "Medical" },
  { id: "legal",            label: "Legal" },
  { id: "substance-use",    label: "Substance Use" },
  { id: "domestic-violence",label: "Domestic Violence" },
  { id: "children",         label: "Children" },
  { id: "employment",       label: "Employment" },
  { id: "lgbtq",            label: "LGBTQ+" },
  { id: "sexual-assault",   label: "Sexual Assault" },
  { id: "immigration",      label: "Immigration" },
  { id: "education",        label: "Education" },
  { id: "disability",       label: "Disability" },
  { id: "faith-based",      label: "Faith-Based" },
  { id: "financial",        label: "Financial Aid" },
  { id: "advocacy",         label: "Advocacy" },
  { id: "hotline",          label: "Hotline" }
];

const CITIES = [
  { id: "all",           label: "All Locations" },
  { id: "albuquerque",   label: "Albuquerque" },
  { id: "santa-fe",      label: "Santa Fe" },
  { id: "las-cruces",    label: "Las Cruces" },
  { id: "taos",          label: "Taos" },
  { id: "farmington",    label: "Farmington" },
  { id: "hobbs",         label: "Hobbs" },
  { id: "carlsbad",      label: "Carlsbad" },
  { id: "los-lunas",     label: "Los Lunas" },
  { id: "colorado",      label: "Colorado" },
  { id: "us-national",   label: "U.S. National" },
  { id: "international", label: "International" }
];

/* City center coordinates for map view */
const CITY_CENTERS = {
  "all":           { lat: 34.5199, lng: -105.8701, zoom: 6 },
  "albuquerque":   { lat: 35.0844, lng: -106.6504, zoom: 12 },
  "santa-fe":      { lat: 35.6870, lng: -105.9378, zoom: 12 },
  "las-cruces":    { lat: 32.3199, lng: -106.7637, zoom: 12 },
  "taos":          { lat: 36.4072, lng: -105.5731, zoom: 12 },
  "farmington":    { lat: 36.7281, lng: -108.2087, zoom: 12 },
  "hobbs":         { lat: 32.7026, lng: -103.1360, zoom: 12 },
  "carlsbad":      { lat: 32.4207, lng: -104.2288, zoom: 12 },
  "los-lunas":     { lat: 34.8065, lng: -106.7322, zoom: 12 },
  "colorado":      { lat: 39.5501, lng: -105.7821, zoom: 7 },
  "us-national":   { lat: 38.9072, lng: -96.0000,  zoom: 4 },
  "international": { lat: 20.0000, lng: 0.0000,    zoom: 2 }
};
