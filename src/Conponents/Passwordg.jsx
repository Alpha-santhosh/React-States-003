import React, { useState } from 'react'
import './Passwordg.css'
import { upperCaseArray, numberArray, symbolsArray, lowerCaseArray, } from './Contant'

function Passwordg() {

    const [checkBoxs, setCheckBoxs] = useState({
        upperCase: false,
        lowerCase: false,
        numbers: false,
        symbol: false,
    })

    const CheckBoxStatus = (checkboxId) => {
        let Id = checkboxId.id
        // console.log(Id);
        if (Id === "upperCase") {
            console.log("UpperCase");
            setCheckBoxs({
                ...checkBoxs, upperCase: !checkBoxs.upperCase
            })
            console.log(checkBoxs.upperCase);
        } else if (Id === "lowerCase") {
            console.log("LowerCase");
            setCheckBoxs({
                ...checkBoxs, lowerCase: !checkBoxs.lowerCase
            })
            console.log(checkBoxs.lowerCase);
        } else if (Id === "numbers") {
            console.log("Number")
            setCheckBoxs({
                ...checkBoxs, numbers: !checkBoxs.numbers
            })
            console.log(checkBoxs.numbers);
        } else if (Id === "symbol") {
            console.log("Symbol");
            setCheckBoxs({
                ...checkBoxs, symbol: !checkBoxs.symbol
            })
            console.log(checkBoxs.symbol);
        }
    }

    const Generatepwd = () => {
        const { upperCase, lowerCase, numbers, symbol } = checkBoxs

        if (upperCase || lowerCase || numbers || symbol) {
            console.log("True");
            const getpwd = (upperCase, lowerCase, numbers, symbol) => {
                const pwd = [
                    ...(upperCase ? upperCaseArray : []),
                    ...(lowerCase ? lowerCaseArray : []),
                    ...(numbers ? numberArray : []),
                    ...(symbol ? symbolsArray : [])
                ]
                // console.log(pwd);
                // console.log(pwd);
                const mixPwd = (array) => {
                    return (array.sort(() => Math.random() - 0.5))
                }

                if (document.getElementById('len').value > 0) {
                    const password = mixPwd(pwd).slice(0, document.getElementById('len').value)
                    console.log(password.join(""));
                    document.getElementById('len').style.border = "none"
                    document.getElementById('text').value = password.join("")
                    document.getElementById('btn').innerText = "Password Generated"
                    document.getElementById('btn').style.backgroundColor = "#17A2B8"
                } else {
                    document.getElementById('len').style.border = "1px solid red"
                    document.getElementById('btn').innerText = "mention length of  password"
                    document.getElementById('btn').style.backgroundColor = "red"
                }
            }
            getpwd(upperCase, lowerCase, numbers, symbol)
        } else {
            console.log("False");
            document.getElementById('btn').innerText = "Check above CheckBoxs"
            document.getElementById('btn').style.backgroundColor = "red"
        }
    }

    return (
        <div className="passwordg">
            <h1>Password Generator</h1>
            <div className="input__box" id="box">
                <input type="text" className='input' id='text' />
                <span className="material-symbols-outlined" onClick={() => {
                    navigator.clipboard.writeText(document.getElementById('text').value)
                }}>
                    content_copy
                </span>
            </div>

            <div className="selectpwd">
                <div className="text">Select Password length</div>
                <input type="number" className='length' id='len' />
            </div>

            <div className="check_boxs">
                <label htmlFor="">
                    <input type="checkbox" name="" id="upperCase" className="checkBox" onChange={() => CheckBoxStatus(document.getElementById('upperCase'))} />
                    Include uppercase letters
                </label>
                <label htmlFor="">
                    <input type="checkbox" name="" id="lowerCase" className="checkBox" onChange={() => CheckBoxStatus(document.getElementById('lowerCase'))} />
                    Include lowercase letters
                </label>
                <label htmlFor="">
                    <input type="checkbox" name="" id="numbers" className="checkBox" onChange={() => CheckBoxStatus(document.getElementById('numbers'))} />
                    Include numbers
                </label>
                <label htmlFor="">
                    <input type="checkbox" name="" id="symbol" className="checkBox" onChange={() => CheckBoxStatus(document.getElementById('symbol'))} />
                    Include symbols
                </label>
            </div>

            <button type='button' id='btn' onClick={Generatepwd}>Generate Password</button>
        </div>
    )
}

export default Passwordg