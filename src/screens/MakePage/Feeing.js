import ImgAngry from "../../images/emotions/angry.png";
import ImgAngry_selected from "../../images/emotions/angry_selected.png";
import ImgAnnoyed from "../../images/emotions/annoyed.png";
import ImgAnnoyed_selected from "../../images/emotions/annoyed_selected.png";
import ImgConfused from "../../images/emotions/confused.png";
import ImgConfused_selected from "../../images/emotions/confused_selected.png";
import ImgExcited from "../../images/emotions/excited.png";
import ImgExcited_selected from "../../images/emotions/excited_selected.png";
import ImgHappy from "../../images/emotions/happy.png";
import ImgHappy_selected from "../../images/emotions/happy_selected.png";
import ImgSad from "../../images/emotions/sad.png";
import ImgSad_selected from "../../images/emotions/sad_selected.png";
import ImgShy from "../../images/emotions/shy.png";
import ImgShy_selected from "../../images/emotions/shy_selected.png";
import ImgTired from "../../images/emotions/tired.png";
import ImgTired_selected from "../../images/emotions/tired_selected.png";
import { WriteFeel } from '../../components/writing/DiaryWritingLayout';
import React, { useState } from 'react';


export default function Feeling({setFeelings})  {
    // 기분
    // originFeeling을 복사해서 curFeeling을 set한다.
    const [curFeeling, setCurFeeing] = useState({
        angry: false,
        annoyed: false,
        confused: false,
        excited: false,
        happy: false,
        sad: false,
        shy: false,
        tired: false,
    })
    //복사용으로 만들어논 상태
    const [originFeeling] = useState({
        angry: false,
        annoyed: false,
        confused: false,
        excited: false,
        happy: false,
        sad: false,
        shy: false,
        tired: false,
    })
    // true로 변경하는 메소드
    const changeFeeing = (e) => {
        for(const key in curFeeling) {
            if(key === e.currentTarget.className) {
                setFeelings(e.currentTarget.children[0].src)
                setCurFeeing({
                    ...originFeeling,
                    [key]: true
                })
            }
        }
    }
    // 다시 false로 변경하는 메소드
    const rechangeFeeing = (e) => {
        for(const key in curFeeling) {
            if(key === e.currentTarget.className) {
                setCurFeeing({
                    ...originFeeling,
                    [key]: false
                })
            }
        }
    }


    return (
        <WriteFeel>
            기분:    
            {
                curFeeling.angry === false ? 
                <div className="angry" onClick={changeFeeing}>
                    <img src={ImgAngry} width="40px" alt="angry" /> 
                    <p>화남</p>
                </div>
                : 
                <div className="angry" onClick={rechangeFeeing}>
                    <img src={ImgAngry_selected} width="40px" alt="ImgAngry_selected" /> 
                    <p>화남</p>
                </div>
            }
            {
                curFeeling.annoyed === false ? 
                <div className="annoyed" onClick={changeFeeing}>
                    <img src={ImgAnnoyed} width="40px" alt="angry" /> 
                    <p>짜증</p>
                </div>
                : 
                <div className="annoyed" onClick={rechangeFeeing}>
                    <img src={ImgAnnoyed_selected} width="40px" alt="ImgAngry_selected" /> 
                    <p>짜증</p>
                </div>
            }
            {
                curFeeling.confused === false ? 
                <div className="confused" onClick={changeFeeing}>
                    <img src={ImgConfused} width="40px" alt="ImgConfused" /> 
                    <p>혼란</p>
                </div>
                : 
                <div className="confused" onClick={rechangeFeeing}>
                    <img src={ImgConfused_selected} width="40px" alt="ImgConfused_selected" /> 
                    <p>혼란</p>
                </div>
            }
            {
                curFeeling.excited === false ? 
                <div className="excited" onClick={changeFeeing}>
                    <img src={ImgExcited} width="40px" alt="ImgExcited" /> 
                    <p>흥분</p>
                </div>
                : 
                <div className="excited" onClick={rechangeFeeing}>
                    <img src={ImgExcited_selected} width="40px" alt="ImgExcited_selected" /> 
                    <p>흥분</p>
                </div>
            }
            {
                curFeeling.happy === false ? 
                <div className="happy" onClick={changeFeeing}>
                    <img src={ImgHappy} width="40px" alt="ImgHappy" /> 
                    <p>행복</p>
                </div>
                : 
                <div className="happy" onClick={rechangeFeeing}>
                    <img src={ImgHappy_selected} width="40px" alt="ImgHappy_selected" /> 
                    <p>행복</p>
                </div>
            }
            {
                curFeeling.sad === false ? 
                <div className="sad" onClick={changeFeeing}>
                    <img src={ImgSad} width="40px" alt="ImgSad" /> 
                    <p>슬픔</p>
                </div>
                : 
                <div className="sad" onClick={rechangeFeeing}>
                    <img src={ImgSad_selected} width="40px" alt="ImgSad_selected" /> 
                    <p>슬픔</p>
                </div>
            }
            {
                curFeeling.shy === false ? 
                <div className="shy" onClick={changeFeeing}>
                    <img src={ImgShy} width="40px" alt="ImgShy" /> 
                    <p>부끄</p>
                </div>
                : 
                <div className="shy" onClick={rechangeFeeing}>
                    <img src={ImgShy_selected} width="40px" alt="ImgShy_selected" /> 
                    <p>부끄</p>
                </div>
            }
            {
                curFeeling.tired === false ? 
                <div className="tired" onClick={changeFeeing}>
                    <img src={ImgTired} width="40px" alt="ImgTired" /> 
                    <p>피곤</p>
                </div>
                : 
                <div className="tired" onClick={rechangeFeeing}>
                    <img src={ImgTired_selected} width="40px" alt="ImgTired_selected" /> 
                    <p>피곤</p>
                </div>
            }
        </WriteFeel>
    )
}
