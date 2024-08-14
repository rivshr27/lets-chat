
const generateDiceBearBottts = (seed) =>
  `https://api.dicebear.com/9.x/bottts/svg/${seed}.svg`;

const generateDiceBearGridy = (seed) =>
  `https://avatars.dicebear.com/api/gridy/${seed}.svg`;
const generatebandar=(seed)=>`https://api.dicebear.com/9.x/pixel-art/svg/${seed}.svg`;

const generatechatprof=(seed)=>`https://api.dicebear.com/9.x/lorelei/svg/${seed}.svg`;
const generatechatprof_1=(seed)=>`https://api.dicebear.com/9.x/pixel-art/svg?seed=John${seed}.svg`;
const generatechatprof_2=(seed)=>`https://api.dicebear.com/9.x/pixel-art/svg?seed=Jane${seed}.svg`;
//const generatechatprof_3=(seed)=>`https://api.dicebear.com/9.x/pixel-art/svg?seed=John&hair=short01,short02,short03,short04,short05${seed}.svg`;
const generatechatprof_4=(seed)=>`https://api.dicebear.com/9.x/lorelei/svg?flip=true${seed}.svg`;
const generatechatprof_5=(seed)=>`https://api.dicebear.com/9.x/lorelei/svg?flip=false${seed}.svg`;

export const generateAvatar = () => {
  const data = [];

  for (let i = 0; i < 1; i++) {
    const res =generatechatprof(Math.random());
    data.push(res);
  }

  for (let i = 0; i < 8; i++) {
    const res =generatechatprof_1(Math.random());
    data.push(res);
  }

  for (let i = 0; i < 1; i++) {
    const res =generatechatprof_2(Math.random());
    data.push(res);
  }


  // for (let i = 0; i < 1; i++) {
  //   const res =generatechatprof_4(Math.random());
  //   data.push(res);
  // }
  // for (let i = 0; i < 1; i++) {
  //   const res =generatechatprof_5(Math.random());
  //   data.push(res);
  // }

  for (let i = 0; i < 1; i++) {
    const res =generatebandar(Math.random());
    data.push(res);
  }

  for (let i = 0; i < 1; i++) {
    const res = generateDiceBearBottts(Math.random());
    data.push(res);
  }
 
  return data;
};
