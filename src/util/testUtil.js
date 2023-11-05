const imageList =[
    require('../../assets/images/post1.jpeg'),
    require('../../assets/images/post2.jpeg'),
    require('../../assets/images/post3.jpeg'),
    require('../../assets/images/post4.jpeg'),
    require('../../assets/images/post5.jpeg'),
    require('../../assets/images/post6.jpeg'),
    require('../../assets/images/post7.jpeg'),
    require('../../assets/images/post8.jpeg'),
    require('../../assets/images/post9.jpeg'),
    require('../../assets/images/post10.jpeg'),
    require('../../assets/images/post11.jpeg'),
    require('../../assets/images/post12.jpeg'),
    require('../../assets/images/post13.jpeg'),
    require('../../assets/images/post14.jpeg'),
    require('../../assets/images/post15.jpeg'),
]

const min = 0; // 최소값
const max = 14; // 최대값

// test용 램덤 이미지 패스 생성
export const testRandomImagePath = () => {
    const randomNumber = Math.random();
    const randomInRange = Math.floor(randomNumber * (max - min + 1)) + min;
    return imageList[randomInRange];
};
