import Imgcloudy from "../../images/weathers/cloudy.png";
import Imgcloudy_selected from "../../images/weathers/cloudy_selected.png";
import Imgfog from "../../images/weathers/fog.png";
import Imgfog_selected from "../../images/weathers/fog_selected.png";
import Imghail from "../../images/weathers/hail.png";
import Imghail_selected from "../../images/weathers/hail_selected.png";
import Imglightning from "../../images/weathers/lightning.png";
import Imglightning_selected from "../../images/weathers/lightning_selected.png";
import Imgrainy from "../../images/weathers/rainy.png";
import Imgrainy_selected from "../../images/weathers/rainy_selected.png";
import Imgshowers from "../../images/weathers/showers.png";
import Imgshowers_selected from "../../images/weathers/showers_selected.png";
import Imgsnow from "../../images/weathers/snow.png";
import Imgsnow_selected from "../../images/weathers/snow_selected.png";
import Imgsunny from "../../images/weathers/sunny.png";
import Imgsunny_selected from "../../images/weathers/sunny_selected.png";
import { WriteWeather } from '../../components/writing/DiaryWritingLayout';
import React, { useState } from 'react';

export default function Weather({setWeather}) {
    // 날씨
    // originFeeling을 복사해서 curFeeling을 set한다.
    const [curWeather, setCurWeather] = useState({
        cloudy: false,
        fog: false,
        hail: false,
        lightning: false,
        rainy: false,
        showers: false,
        snow: false,
        sunny: false,
    })
    //복사용으로 만들어논 상태
    const [originWeather] = useState({
        cloudy: false,
        fog: false,
        hail: false,
        lightning: false,
        rainy: false,
        showers: false,
        snow: false,
        sunny: false,
    })

        // true로 변경하는 메소드
        const changeWeather = (e) => {
            for(const key in curWeather) {
                if(key === e.currentTarget.className) {
                    setWeather(key)
                    setCurWeather({
                        ...originWeather,
                        [key]: true
                    })
                }
            }
        }
        // 다시 false로 변경하는 메소드
        const rechangeWeather = (e) => {
            for(const key in curWeather) {
                if(key === e.currentTarget.className) {
                    setCurWeather({
                        ...originWeather,
                        [key]: false
                    })
                }
            }
        }
    return(
        <WriteWeather>
              날씨:
              {
                  curWeather.cloudy === false ? 
                  <div className="cloudy" onClick={changeWeather}>
                      <img src={Imgcloudy} width="40px" alt="Imgcloudy" /> 
                      <p>흐림</p>
                  </div>
                  : 
                  <div className="cloudy" onClick={rechangeWeather}>
                      <img src={Imgcloudy_selected} width="40px" alt="Imgcloudy_selected" /> 
                      <p>흐림</p>
                  </div>
              }
              {
                  curWeather.fog === false ? 
                  <div className="fog" onClick={changeWeather}>
                      <img src={Imgfog} width="40px" alt="Imgfog" /> 
                      <p>안개</p>
                  </div>
                  : 
                  <div className="fog" onClick={rechangeWeather}>
                      <img src={Imgfog_selected} width="40px" alt="Imgfog_selected" /> 
                      <p>안개</p>
                  </div>
              }
              {
                  curWeather.hail === false ? 
                  <div className="hail" onClick={changeWeather}>
                      <img src={Imghail} width="40px" alt="Imghail" /> 
                      <p>우박</p>
                  </div>
                  : 
                  <div className="hail" onClick={rechangeWeather}>
                      <img src={Imghail_selected} width="40px" alt="Imghail_selected" /> 
                      <p>우박</p>
                  </div>
              }
              {
                  curWeather.lightning === false ? 
                  <div className="lightning" onClick={changeWeather}>
                      <img src={Imglightning} width="40px" alt="Imglightning" /> 
                      <p>번개</p>
                  </div>
                  : 
                  <div className="lightning" onClick={rechangeWeather}>
                      <img src={Imglightning_selected} width="40px" alt="Imglightning_selected" /> 
                      <p>번개</p>
                  </div>
              }
              {
                  curWeather.rainy === false ? 
                  <div className="rainy" onClick={changeWeather}>
                      <img src={Imgrainy} width="40px" alt="Imgrainy" /> 
                      <p>비</p>
                  </div>
                  : 
                  <div className="rainy" onClick={rechangeWeather}>
                      <img src={Imgrainy_selected} width="40px" alt="Imgrainy_selected" /> 
                      <p>비</p>
                  </div>
              }
              {
                  curWeather.showers === false ? 
                  <div className="showers" onClick={changeWeather}>
                      <img src={Imgshowers} width="40px" alt="Imgshowers" /> 
                      <p>소나기</p>
                  </div>
                  : 
                  <div className="showers" onClick={rechangeWeather}>
                      <img src={Imgshowers_selected} width="40px" alt="Imgshowers_selected" /> 
                      <p>소나기</p>
                  </div>
              }
              {
                  curWeather.snow === false ? 
                  <div className="snow" onClick={changeWeather}>
                      <img src={Imgsnow} width="40px" alt="Imgsnow" /> 
                      <p>눈</p>
                  </div>
                  : 
                  <div className="snow" onClick={rechangeWeather}>
                      <img src={Imgsnow_selected} width="40px" alt="Imgsnow_selected" /> 
                      <p>눈</p>
                  </div>
              }
              {
                  curWeather.sunny === false ? 
                  <div className="sunny" onClick={changeWeather}>
                      <img src={Imgsunny} width="40px" alt="Imgsunny" /> 
                      <p>맑음</p>
                  </div>
                  : 
                  <div className="sunny" onClick={rechangeWeather} >
                      <img src={Imgsunny_selected} width="40px" alt="Imgsunny_selected" /> 
                      <p>맑음</p>
                  </div>
              }

         

              </WriteWeather>
    )

}

