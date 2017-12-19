//  装修级别
function zhuangxiu(zx){
  switch(zx){
  case 1:
      document.write("精装修");
      break;
  case 2:
      document.write("简单装修");
      break;
  case 3:
      document.write("豪华装修");
      break;
  default:
      document.write("毛坯");
  }
}

module.exports.zx = zhuangxiu;