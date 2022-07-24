import React from 'react';
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {

  return <div className="storyReel">
  
  <Story 
    image="https://preview.redd.it/jaxogavjwt571.jpg?auto=webp&s=48b6e667045abf54717f95d19048f47202ea5437" 
    profileSrc="https://a-z-animals.com/media/2021/10/Arctic-Wolf-1024x535.jpg" 
    title="Sunny Kim" 
    />
    <Story 
    image="https://pbs.twimg.com/media/FYcw1BJWAAEcRcq?format=jpg&name=large" 
    profileSrc="https://static.displate.com/280x392/displate/2021-12-20/dc288e6438e5ddb526d949ed62aa756c_b4eed6360385d29305874ca30633f05a.jpg" 
    title="Lynda " 
    />
    <Story image="https://pbs.twimg.com/media/FYcw1BGXkAIF_Ok?format=jpg&name=medium" 
    profileSrc="https://www.iowadnr.gov/Portals/idnr/uploads/pins/Pins%202/golden%20eagle%203%20link.jpg?ver=2016-02-18-152246-497" 
    title="Laura" 
    />
    <Story image="https://yt3.ggpht.com/bayIGmRlKQ__U11ygwvQvU23P0KcRO7HF-o3JYGPrEutoJ_QByjm8ynRNcpO40XD3CpvgNDJApQ=s900-c-k-c0x00ffffff-no-rj" 
    profileSrc="https://img.freepik.com/premium-photo/head-crocodile-paleosuchus-palpebrosus-dwarf-caiman_641010-1302.jpg?w=2000" 
    title="Lionair" 
    />
    <Story image="https://cdn-img1.playvids.com/star/4/8/21084_7e1b1a3e5fad06.jpg?95580" 
    profileSrc="https://pbs.twimg.com/profile_images/1548154199031984129/P63wUpNj_400x400.jpg" 
    title="Kyr Q" 
    />
    
  
  </div>;

  
}

export default StoryReel;