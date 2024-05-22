const _1th = "8:00-9:40"; //4
const _2th = "9:40-11:20"; //4
const _3th = "11:20-1:00"; //4
const _4th = "2:00-3:30"; //4
const _5th = "3:30-5:00"; //4

const mon = "Monday";
const tue = "Tuesday";
const wed = "Wednesday";
const thur = "Thursday";
const fri = "Friday";
// let obj1
let obj1 = {
  // 2ND
  DHL_405: "",
  CS_308: "",
  CS_306: "",
  MATH_305: "",
  BBA_412: "",
  IS_401: "",
  // 4TH
  CS_406: "",
  SE_412: "",
  SE_410: "",
  SE_408: "",
  STAT_402: "",
  MATH_513: "",
  IS_402: "",
  // 6TH
  SE_502: "",
  SE_504: "",
  SE_506: "",
  SE_510: "",
  SE_512: "",
  SE_514: "",
  // 8TH
  BBA_510: "",
};
let schedule=[];
const some = async () => {
  try {
    const response = await fetch('http://192.168.149.102:3000/getAssign');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const res = await response.json();
    
    // console.log(res)
    // console.log('Response successfully retrieved and processed.');
    return processed(res);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

function processed(res){
  if (!res) {
    console.error('Data is not available yet.');
    return;
  }
  const {
    DHL_405,
    CS_306,
    CS_308,
    CS_406,
    MATH_305,
    MATH_513,
    IS_401,
    IS_402,
    BBA_412,
    BBA_510,
    SE_408,
    SE_410,
    SE_412,
    SE_502,
    SE_504,
    SE_506,
    SE_510,
    SE_512,
    SE_514,
    STAT_402,
  } = res;
  
  // console.log(global.myGlobalVariable.DHL_405);
  // ROOMS 
  const GF1 = 'Ground Floor R#1'
  const GF2 = 'Ground Floor R#2'
  const FF1 = 'First Floor L#1'
  const FF2 = 'First Floor L#3'
  // const CSLAB = 'CS Lecture Theatre'
  
  schedule = [
    {
      id: 0,
      day: mon,
      classRoom: GF1,
      time: _1th,
      degree: "BS(SE)-6th-A",
      teacher: SE_502,
      course: "SE-502-T",
    },
    {
      id: 1,
      day: mon,
      classRoom: GF2,
      time: _1th,
      degree: "BS(SE)-6th-B",
      teacher: SE_510,
      course: "SE-510-T",
    },
    {
      id: 2,
      day: mon,
      classRoom: FF1,
      time: _1th,
      degree: "BS(SE)-4th-A",
      teacher: CS_406,
      course: "CS-406-T",
    },
    {
      id: 3,
      day: mon,
      classRoom: FF2,
      time: _1th,
      degree: "BS(SE)-6th-A",
      teacher: SE_512,
      course: "SE-512-T",
    },
    {
      id: 4,
      day: mon,
      classRoom: GF1,
      time: _2th,
      degree: "BS(SE)-2nd-A",
      teacher: CS_306,
      course: "CS-306-T",
    },
    {
      id: 5,
      day: mon,
      classRoom: GF2,
      time: _2th,
      degree: "BS(SE)-6th-A",
      teacher: SE_510,
      course: "SE-510-T",
    },
    {
      id: 6,
      day: mon,
      classRoom: FF1,
      time: _2th,
      degree: "BS(SE)-4th-B",
      teacher: SE_412,
      course: "SE-412-T",
    },
    {
      id: 7,
      day: mon,
      classRoom: FF2,
      time: _2th,
      degree: "BS(SE)-6th-A",
      teacher: SE_514,
      course: "SE-514-P",
    },
    {
      id: 8,
      day: mon,
      classRoom: GF1,
      time: _3th,
      degree: "BS(SE)-4th-A",
      teacher: SE_410,
      course: "SE-410-T",
    },
    {
      id: 9,
      day: mon,
      classRoom: GF2,
      time: _3th,
      degree: "BS(SE)-4th-A",
      teacher: SE_408,
      course: "SE-408-T",
    },
    {
      id: 10,
      day: mon,
      classRoom: FF1,
      time: _3th,
      degree: "BS(SE)-2nd-A",
      teacher: DHL_405,
      course: "DHL-405",
    },
    {
      id: 11,
      day: mon,
      classRoom: FF2,
      time: _3th,
      degree: "BS(SE)-2nd-A",
      teacher: BBA_412,
      course: "BBA-412",
    },
    {
      id: 12,
      day: mon,
      classRoom: GF1,
      time: _4th,
      degree: "BS(SE)-2nd-A",
      teacher: CS_308,
      course: "CS-308-T",
    },
    {
      id: 13,
      day: mon,
      classRoom: GF2,
      time: _4th,
      degree: "BS(SE)-2nd-A",
      teacher: IS_401,
      course: "IS-401",
    },
    {
      id: 14,
      day: mon,
      classRoom: FF1,
      time: _4th,
      degree: "BS(SE)-2nd-B",
      teacher: IS_401,
      course: "IS-401",
    },
    {
      id: 15,
      day: mon,
      classRoom:FF2,
      time: _4th,
      degree: "BS(SE)-6th-B",
      teacher: SE_512,
      course: "SE-512-T",
    },
    {
      id: 16,
      day: tue,
      classRoom: GF1,
      time: _1th,
      degree: "BS(SE)-6th-A",
      teacher: SE_510,
      course: "SE-510-P",
    },
    {
      id: 17,
      day: tue,
      classRoom: GF2,
      time: _1th,
      degree: "BS(SE)-6th-B",
      teacher: SE_506,
      course: "SE-506-T",
    },
    {
      id: 18,
      day: tue,
      classRoom: FF1,
      time: _1th,
      degree: "BS(SE)-6th-A",
      teacher: SE_512,
      course: "SE-512-P",
    },
    {
      id: 19,
      day: tue,
      classRoom: FF2,
      time: _1th,
      degree: "BS(SE)-4th-B",
      teacher: SE_408,
      course: "SE-408-T",
    },
    {
      id: 20,
      day: tue,
      classRoom: GF1,
      time: _2th,
      degree: "BS(SE)-6th-B",
      teacher: SE_514,
      course: "SE-514-P",
    },
    {
      id: 21,
      day: tue,
      classRoom: GF2,
      time: _2th,
      degree: "BS(SE)-4th-B",
      teacher: "teacher",
      course: "CS-408-P",
    },
    {
      id: 22,
      day: tue,
      classRoom: FF1,
      time: _2th,
      degree: "BS(SE)-4th-A",
      teacher: "teacher",
      course: "CS-412-P",
    },
    {
      id: 23,
      day: tue,
      classRoom: FF2,
      time: _2th,
      degree: "BS(SE)-4th-A",
      teacher: SE_410,
      course: "SE-410-P",
    },
    {
      id: 24,
      day: tue,
      classRoom:GF1,
      time: _3th,
      degree: "BS(SE)-2nd-A",
      teacher: CS_308,
      course: "CS-308-P",
    },
    {
      id: 25,
      day: tue,
      classRoom: GF2,
      time: _3th,
      degree: "BS(SE)-4th-B",
      teacher: STAT_402,
      course: "STAT-402-T",
    },
    {
      id: 26,
      day: tue,
      classRoom:FF1,
      time: _3th,
      degree: "BS(SE)-2nd-A",
      teacher: MATH_305,
      course: "MATH-305",
    },
    {
      id: 27,
      day: tue,
      classRoom: FF2,
      time: _3th,
      degree: "BS(SE)-4th-A, BS(SE)-4th-A",
      teacher: MATH_513,
      course: "MATH-513",
    },
    {
      id: 28,
      day: tue,
      classRoom: GF1,
      time: _4th,
      degree: "BS(SE)-2nd-B",
      teacher: DHL_405,
      course: "DHL-405",
    },
    {
      id: 29,
      day: tue,
      classRoom: GF2,
      time: _4th,
      degree: "BS(SE)-6th-B",
      teacher: SE_506,
      course: "SE-506-P",
    },
    {
      id: 30,
      day: tue,
      classRoom: FF1,
      time: _4th,
      degree: "BS(SE)-6th-B",
      teacher: SE_502,
      course: "SE-502-T",
    },
    {
      id: 31,
      day: tue,
      classRoom: FF2,
      time: _4th,
      degree: "BS(SE)-6th-B",
      teacher: SE_504,
      course: "SE-504-T",
    },
    {
      id: 32,
      day: wed,
      classRoom: GF1,
      time: _1th,
      degree: "BS(SE)-6th-A",
      teacher: SE_506,
      course: "SE-506-T",
    },
    {
      id: 33,
      day: wed,
      classRoom: GF2,
      time: _1th,
      degree: "BS(SE)-4th-A",
      teacher: STAT_402,
      course: "STAT-402-T",
    },
    {
      id: 34,
      day: wed,
      classRoom: FF1,
      time: _1th,
      degree: "BS(SE)-4th-A",
      teacher: SE_412,
      course: "SE-412-T",
    },
    {
      id: 35,
      day: wed,
      classRoom: FF2,
      time: _1th,
      degree: "BS(SE)-4th-A",
      teacher: CS_406,
      course: "CS-406-P",
    },
    {
      id: 36,
      day: wed,
      classRoom: GF1,
      time: _2th,
      degree: "BS(SE)-2nd-B",
      teacher: CS_308,
      course: "CS-308-T",
    },
    {
      id: 37,
      day: wed,
      classRoom: GF2,
      time: _2th,
      degree: "BS(SE)-2nd-B",
      teacher: CS_306,
      course: "CS-306-T",
    },
    {
      id: 38,
      day: wed,
      classRoom: FF1,
      time: _2th,
      degree: "BS(SE)-2nd-B",
      teacher: MATH_305,
      course: "MATH-305",
    },
    {
      id: 39,
      day: wed,
      classRoom: FF2,
      time: _2th,
      degree: "BS(SE)-4th-B",
      teacher: CS_406,
      course: "CS-406-T",
    },
    {
      id: 40,
      day: wed,
      classRoom: GF1,
      time: _3th,
      degree: "BS(SE)-2nd-A",
      teacher: MATH_305,
      course: "MATH-305",
    },
    {
      id: 41,
      day: wed,
      classRoom: GF2,
      time: _3th,
      degree: "BS(SE)-4th-A",
      teacher: "teacher",
      course: "CS-408-P",
    },
    {
      id: 42,
      day: wed,
      classRoom: FF1,
      time: _3th,
      degree: "BS(SE)-2nd-B",
      teacher: BBA_412,
      course: "BBA-412",
    },
    {
      id: 43,
      day: wed,
      classRoom: FF2,
      time: _3th,
      degree: "BS(SE)-2nd-A",
      teacher: BBA_412,
      course: "BBA-412",
    },
    {
      id: 44,
      day: wed,
      classRoom: GF1,
      time: _4th,
      degree: "BS(SE)-6th-A",
      teacher: SE_504,
      course: "SE-504-T",
    },
    {
      id: 45,
      day: wed,
      classRoom: GF2,
      time: _4th,
      degree: "BS(SE)-2nd-B",
      teacher: MATH_305,
      course: "MATH-305",
    },
    {
      id: 46,
      day: wed,
      classRoom: FF1,
      time: _4th,
      degree: "BS(SE)-4th-B",
      teacher: STAT_402,
      course: "STAT-402-P",
    },
    {
      id: 47,
      day: wed,
      classRoom: FF2,
      time: _4th,
      degree: "BS(SE)-4th-B, BS(SE)-4th-A",
      teacher: MATH_513,
      course: "MATH-513",
    },
    {
      id: 48,
      day: thur,
      classRoom: GF1,
      time: _1th,
      degree: "BS(SE)-6th-B",
      teacher: SE_504,
      course: "SE-504-P",
    },
    {
      id: 49,
      day: thur,
      classRoom: GF2,
      time: _1th,
      degree: "BS(SE)-6th-A",
      teacher: SE_506,
      course: "SE-506-P",
    },
    {
      id: 50,
      day: thur,
      classRoom: FF1,
      time: _1th,
      degree: "BS(SE)-4th-B",
      teacher: SE_412,
      course: "SE-412-T",
    },
    {
      id: 51,
      day: thur,
      classRoom: FF2,
      time: _1th,
      degree: "BS(SE)-6th-A",
      teacher: SE_504,
      course: "SE-504-P",
    },
    {
      id: 52,
      day: thur,
      classRoom: GF1,
      time: _2th,
      degree: "BS(SE)-6th-A",
      teacher: SE_502,
      course: "SE-502-P",
    },
    {
      id: 53,
      day: thur,
      classRoom: GF2,
      time: _2th,
      degree: "BS(SE)-2nd-A",
      teacher: CS_306,
      course: "CS-306-P",
    },
    {
      id: 54,
      day: thur,
      classRoom: FF1,
      time: _2th,
      degree: "BS(SE)-2nd-B",
      teacher: CS_306,
      course: "CS-306-P",
    },
    {
      id: 55,
      day: thur,
      classRoom: FF2,
      time: _2th,
      degree: "BS(SE)-6th-B",
      teacher: SE_512,
      course: "SE-512-P",
    },
    {
      id: 56,
      day: thur,
      classRoom: GF1,
      time: _3th,
      degree: "BS(SE)-4th-A",
      teacher: STAT_402,
      course: "STAT-402-P",
    },
    {
      id: 57,
      day: thur,
      classRoom: GF2,
      time: _3th,
      degree: "BS(SE)-2nd-B",
      teacher: CS_308,
      course: "CS-308-P",
    },
    {
      id: 58,
      day: thur,
      classRoom: FF1,
      time: _3th,
      degree: "BS(SE)-2nd-B",
      teacher: DHL_405,
      course: "DHL-405",
    },
    {
      id: 59,
      day: thur,
      classRoom: FF2,
      time: _3th,
      degree: "BS(SE)-6th-A",
      teacher: "teacher",
      course: "SE-414-T",
    },
    {
      id: 60,
      day: fri,
      classRoom: GF1,
      time: _1th,
      degree: "BS(SE)-4th-B",
      teacher: SE_410,
      course: "SE-410-P",
    },
    {
      id: 61,
      day: fri,
      classRoom: GF2,
      time: _1th,
      degree: "BS(SE)-4th-B",
      teacher: "teacher",
      course: "SE-406-P",
    },
    {
      id: 62,
      day: fri,
      classRoom: FF1,
      time: _1th,
      degree: "BS(SE)-4th-B, BS(SE)-4th-A",
      teacher: IS_402,
      course: "IS-402",
    },
    {
      id: 63,
      day: fri,
      classRoom: GF1,
      time: _2th,
      degree: "BS(SE)-6th-B",
      teacher: SE_510,
      course: "SE-510-P",
    },
    {
      id: 64,
      day: fri,
      classRoom: GF2,
      time: _2th,
      degree: "BS(SE)-6th-B",
      teacher: SE_502,
      course: "SE-502-P",
    },
    {
      id: 65,
      day: fri,
      classRoom: FF1,
      time: _2th,
      degree: "BS(SE)-4th-B",
      teacher: SE_410,
      course: "SE-410-T",
    },
    {
      id: 66,
      day: fri,
      classRoom: GF1,
      time: _3th,
      degree: "BS(SE)-8th",
      teacher: BBA_510,
      course: "BBA-510-T",
    },
  ];
  
  return schedule;
  // BS(SE)-2nd-A CS306T
  // BS(SE)-2nd-A CS306P
  // BS(SE)-2nd-B CS306T
  // BS(SE)-2nd-B CS306P
  // BS(SE)-2nd-A CS308T
  // BS(SE)-2nd-A CS308P
  // BS(SE)-2nd-B CS308T
  // BS(SE)-2nd-B CS308P
  // BS(SE)-2nd-A DHL-405
  // BS(SE)-2nd-B DHL-405
  // BS(SE)-2nd-B DHL-405
  // BS(SE)-2nd-A BBA-412
  // BS(SE)-2nd-A BBA-412
  // BS(SE)-2nd-B BBA-412
  // BS(SE)-2nd-A IS-401
  // BS(SE)-2nd-B IS-401
  // BS(SE)-2nd-A MATH-305
  // BS(SE)-2nd-A MATH-305
  // BS(SE)-2nd-B MATH-305

}

// BS(SE)-2nd-B MATH-305
export default some;
