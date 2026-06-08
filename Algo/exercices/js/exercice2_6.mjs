import {createInterface} from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function main() {
  const sc= new createInterface({input,output});
  let answer= await sc.question('\x1b[3;38;2;255;234;0mFera-t-il beau demain?\x1b[0m\n');
  
  if (answer=='oui') {
    let answer= await sc.question('\x1b[3;38;2;255;234;0mMon vélo est-il en bon état ?\x1b[0m\n');
    
    if (answer=='oui'){
      console.log('\x1b[3;38;2;43;235;251mJe vais me balader à vélo...\x1b[0m\n');
    } else {
    console.log('\x1b[3;38;2;43;235;251mJ\'emmène mon vélo chez le garagiste.\x1b[0m\n')
    let answer= await sc.question('\x1b[3;38;2;255;234;0mMon vélo est-il réparable immédiatement?\x1b[0m\n');  
      if (answer=='oui'){
        console.log('\x1b[3;38;2;43;235;251mJ\'attends que la réparation soit terminée puis je pars immédiatement me balader à vélo.\x1b[0m\n');
      } else {
        console.log('\x1b[3;38;2;43;235;251mJe vais me promener à pied jusqu\'à l\'étang pour cueillir des joncs.\x1b[0m\n');
      }
    }
  } else {
    console.log('\x1b[3;38;2;43;235;251mJe vais plutôt rester à la maison pour lire.\x1b[0m\n')
    let answer= await sc.question('\x1b[3;38;2;255;234;0mEst-ce que je possède le 1er tome de Game Of Thrones ?\x1b[0m\n');
      if(answer=='oui') {
      console.log('\x1b[3;38;2;43;235;251mJe m\'installe confortablement dans un fauteuil et me plonge dans la lecture.\x1b[0m\n');
      } else {
        console.log('\x1b[3;38;2;43;235;251mJe me rends à la bibliothèque municipale.\x1b[0m\n');
        let answer= await sc.question('\x1b[3;38;2;255;234;0mLe premier tome de Game Of thrones est-il disponible ?\x1b[0m\n');
          if (answer== 'oui') {
            console.log('\x1b[3;38;2;43;235;251mJe l\'emprunte, puis je rentre à la maison, m\'installe confortablement dans un fauteuil et me plonge dans la lecture.\x1b[0m');
          } else {
             console.log('\x1b[3;38;2;43;235;251mJ\'emprunte un roman policier, puis je rentre à la maison, m\'installe confortablement dans un fauteuil et me plonge dans la lecture.\x1b[0m');
          }
        }
  }
  sc.close();
}
await main();
