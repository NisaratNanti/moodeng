import { useState } from "react";

export default function App(){
  const[level, setLevel] = useState(1);

  const feedAnimal = (food) => {
    let addedLevel = 0;
    if (food === 'watermelon') addedLevel = 5;
    if (food === 'pumpkin') addedLevel = 10;
    if (food === 'grass') addedLevel = 20;

    setLevel((prevLevel) => Math.min(prevLevel + addedLevel, 100));
  };

  const calculateImageSize = () => {
    const baseSize = 50;
    const maxSize = 1000;
    const sizeIncrease = Math.floor(level / 5) * 20;
    return Math.min(baseSize + sizeIncrease, maxSize);
  };

  return(
    <>
    <div style={{background:'black'}}>
      <h3 style={{textAlign:'center', padding:'2px' }}>Level {level}</h3>

      {/* ส่วนหมูเด้ง */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin: '30px' }}>
        <img src={level >= 100 ?"/picture/มี.jpg":"/picture/หมูดุ้ง.jpg"} alt="หมูเด้ง" style={{ width: calculateImageSize(),
            height: 'auto',
            transition: 'width 0.5s' }} />
      </div>

      {/* ส่วนล่าง */}
      <p style={{ display: 'flex', justifyContent: 'center', gap: '10px' ,padding:'80px'}}>
      <button className="square"><img src="/picture/แตงโม.jpg" alt="แตงโม" style={{ width: '100px', height: '100px' }}  
      onClick={() => feedAnimal('watermelon')}/></button>
      <button className="square"><img src="/picture/ฟักทอง.jpg" alt="ฟักทอง" style={{ width: '100px', height: '100px' }} 
      onClick={() => feedAnimal('pumpkin')}/></button>
      <button className="square"><img src="/picture/หญ้า.jpg" alt="หญ้า" style={{ width: '100px', height: '100px' }} 
      onClick={() => feedAnimal('grass')}/></button>
      </p>
    </div>
    </>
  );
}