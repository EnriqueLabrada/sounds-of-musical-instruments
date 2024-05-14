import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../stylessheets/panel.css'
import useSound from 'use-sound'
import S1 from '../sounds/guitar/guitar1.ogg'
import S2 from '../sounds/guitar/guitar2.ogg'
import S3 from '../sounds/guitar/guitar3.ogg'
import S4 from '../sounds/guitar/guitar4.ogg'
import S5 from '../sounds/guitar/guitar5.ogg'
import S6 from '../sounds/guitar/guitar6.ogg'
import S7 from '../sounds/guitar/guitar7.ogg'
import S8 from '../sounds/guitar/guitar8.ogg'
import S9 from '../sounds/guitar/guitar9.ogg'
import { useState } from 'react'




function Guitarra () {

    const [icon, setIcon] =  useState('bi bi-volume-up-fill')

    const [soundEnable, setSoundEnable] = useState(true)

    const [volume, setVolume] = useState(0.5)

    const[saveVolume, setSaveVolumen] = useState(volume)

    const [playSound1] = useSound(S1,{volume})
    const [playSound2] = useSound(S2,{volume})
    const [playSound3] = useSound(S3,{volume})
    const [playSound4] = useSound(S4,{volume})
    const [playSound5] = useSound(S5,{volume})
    const [playSound6] = useSound(S6,{volume})
    const [playSound7] = useSound(S7,{volume})
    const [playSound8] = useSound(S8,{volume})
    const [playSound9] = useSound(S9,{volume})
    
    const sound1 =  () => {
        if(soundEnable) {
            playSound1({volume})
        }
    }
    const sound2 =  () => {
        if(soundEnable) {
            playSound2({volume})
        }
    }
    const sound3 =  () => {
        if(soundEnable) {
            playSound3({volume})
        }
    }
    const sound4 =  () => {
        if(soundEnable) {
            playSound4({volume})
        }
    }
    const sound5 =  () => {
        if(soundEnable) {
            playSound5({volume})
        }
    }
    const sound6 =  () => {
        if(soundEnable) {
            playSound6({volume})
        }
    }
    const sound7 =  () => {
        if(soundEnable) {
            playSound7({volume})
        }
    }
    const sound8 =  () => {
        if(soundEnable) {
            playSound8({volume})
        }
    }
    const sound9 =  () => {
        if(soundEnable) {
            playSound9({volume})
        }
    }

    const keySound = (event) => {

        if(soundEnable) {
            switch(event.key ){
                case 'q' : playSound1();break
                case 'w' : playSound2();break
                case 'e' : playSound3();break
                case 'a' : playSound4();break
                case 's' : playSound5();break
                case 'd' : playSound6();break
                case 'z' : playSound7();break
                case 'x' : playSound8();break
                case 'c' : playSound9();break
                default:console.log('nada')
            }
        }
    } 

    const changeVolume = () => {
        const newVolume = parseFloat(document.getElementById('customRange1').value)
        setVolume(newVolume)
        console.log(newVolume)
    }

    const mute = () => {
        setSoundEnable(!soundEnable)
  

        if(!soundEnable){
            setIcon('bi bi-volume-up-fill') 
            setVolume(saveVolume)
        }
        else {
            setIcon('bi bi-volume-mute-fill')
            setSaveVolumen(volume)
            setVolume(0) 
        }

    }


    return(
        <div className='container d-flex panel'onKeyDown={keySound} tabIndex={0}>
            <div className='buttons-sound container d-flex'>
                <div className='filas'>
                    <button className='btn btn-primary' onClick={sound1}>Q</button>
                    <button className='btn btn-primary' onClick={sound2}>W</button>
                    <button className='btn btn-primary' onClick={sound3}>E</button>
                </div>
                <div className='filas'>
                    <button className='btn btn-primary' onClick={sound4}>A</button>
                    <button className='btn btn-primary' onClick={sound5}>S</button>
                    <button className='btn btn-primary' onClick={sound6}>D</button>
                </div>
                <div className='filas'>
                    <button className='btn btn-primary' onClick={sound7}>Z</button>
                    <button className='btn btn-primary' onClick={sound8}>X</button>
                    <button className='btn btn-primary' onClick={sound9}>C</button>
                </div>
            </div>
            <div className='controles container d-flex'>
                <p>Guitarra</p>
                <input type='range' className='form-range' id='customRange1' min={0} max={1} step={0.1} value={volume} onChange={changeVolume}/>
                <button className='volumen btn btn-primary' onClick={mute}><i className={icon}></i></button>
            </div>
        </div>
    )
}

export default Guitarra