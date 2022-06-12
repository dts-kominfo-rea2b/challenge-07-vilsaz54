const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>{
  try{
    const hasil = await Promise.all([promiseTheaterIXX(),promiseTheaterVGC()]).then(hsl =>hsl[0].concat(hsl[1]));
    return hasil.filter((item) => item.hasil === emosi).length;

  }catch(err){
    console.log(err);
  }

};

module.exports = {
  promiseOutput,
};
